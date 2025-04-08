import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { UserDetails } from "@/lib/api";
import { getFullName } from "@/lib/utils";

interface UserListItemProps {
  user: Pick<UserDetails, "id" | "first_name" | "last_name" | "image">;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const fullName = getFullName({
    first_name: user.first_name,
    last_name: user.last_name,
  });

  return (
    <Link
      href={`/users/${user.id}`}
      className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md transition-colors duration-150 ease-in-out"
      aria-label={`View profile for ${fullName}`}
      data-testid={`user-list-item-link-${user.id}`}
    >
      <div className="mr-4 flex-shrink-0">
        <UserAvatar
          base64Image={user.image}
          alt={`${fullName}'s avatar`}
          size={48}
        />
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-gray-800">{fullName}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default UserListItem;
