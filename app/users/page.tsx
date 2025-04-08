import { UserDetails, fetchAllUsersWithDetails } from "@/lib/api";
import UserListItem from "@/components/UserListItem";

const UserListPage = async () => {
  const successfulUserDetails: UserDetails[] = await fetchAllUsersWithDetails();

  if (successfulUserDetails.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No users found or details could not be loaded.
      </p>
    );
  }

  const usersForList = successfulUserDetails.map((user) => ({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    image: user.image,
  }));

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl mx-auto border-t border-gray-100">
      <ul data-testid="user-list">
        {usersForList.map((user) => (
          <li key={user.id}>
            <UserListItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;
