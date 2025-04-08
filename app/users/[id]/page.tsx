import { fetchUserDetails } from "@/lib/api";
import UserProfileCard from "@/components/UserProfileCard";
import Link from "next/link";
import { notFound } from "next/navigation";

const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // First, await the promise to get the resolved params object
  const resolvedParams = await params;
  // Then, access the id property from the resolved object
  const userIdString = resolvedParams.id;
  const userId = parseInt(userIdString, 10);

  if (isNaN(userId) || userId <= 0) {
    notFound(); // Trigger the 404 page
  }

  try {
    const userDetails = await fetchUserDetails(userId);

    return (
      <div className="container mx-auto">
        <UserProfileCard user={userDetails} />

        <div className="mt-6 text-center">
          <Link
            href="/users"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to User List
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      typeof (error as { status: unknown }).status === "number" &&
      (error as { status: number }).status === 404
    ) {
      notFound(); // Trigger the 404 page for user not found
    }

    // Throw the error to be caught by the nearest error.tsx
    throw new Error(
      `Could not load profile for user ${userId}. Please try again later.`
    );
  }
};

export default UserProfilePage;
