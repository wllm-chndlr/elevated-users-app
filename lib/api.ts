export interface Skill {
  current: number;
  level: string;
  max: number;
}

export interface Stats {
  current_streak_in_days: number;
  skills: {
    math: Skill;
    reading: Skill;
    speaking: Skill;
    writing: Skill;
  };
  total_sessions_played: number;
}

export interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  image: string; // Base64 encoded JPG
  stats: Stats;
}

export interface UserListResponse {
  user_ids: number[];
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const AUTH_USER_ID = process.env.API_AUTH_USER_ID;
const AUTH_TOKEN = process.env.API_AUTH_TOKEN;

const fetchApi = async <T>(endpoint: string): Promise<T> => {
  if (!BASE_URL || !AUTH_USER_ID || !AUTH_TOKEN) {
    throw new Error("API configuration is missing in environment variables.");
  }

  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append("authentication_user_id", AUTH_USER_ID);
  url.searchParams.append("authentication_token", AUTH_TOKEN);

  const response = await fetch(url.toString(), { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }

  try {
    return (await response.json()) as T;
  } catch (e) {
    throw new Error(`Invalid JSON response from ${endpoint}`);
  }
};

export const fetchUserIds = async (): Promise<number[]> => {
  const data = await fetchApi<UserListResponse>("/users");
  return data.user_ids;
};

export const fetchUserDetails = async (
  userId: number
): Promise<UserDetails> => {
  const details = await fetchApi<Omit<UserDetails, "id">>(`/users/${userId}`);
  return { ...details, id: userId };
};

/**
 * Fetches all user IDs and then fetches details for each user.
 * Handles concurrent fetching and filters out unsuccessful detail fetches.
 */
export const fetchAllUsersWithDetails = async (): Promise<UserDetails[]> => {
  let userIds: number[] = [];

  // Fetch user IDs
  try {
    userIds = await fetchUserIds();
  } catch (error) {
    // Throw to be handled by the calling page's error boundary
    throw error;
  }

  // Handle empty ID list
  if (userIds.length === 0) {
    return [];
  }

  // Fetch details concurrently
  const userDetailsPromises = userIds.map((id) => fetchUserDetails(id));
  const userDetailsResults = await Promise.allSettled(userDetailsPromises);

  // Filter successful results
  const successfulUserDetails = userDetailsResults
    .filter((result): result is PromiseFulfilledResult<UserDetails> => {
      if (result.status === "rejected") {
        return false;
      }
      return true;
    })
    .map((result) => result.value);

  // Return array of user details
  return successfulUserDetails;
};
