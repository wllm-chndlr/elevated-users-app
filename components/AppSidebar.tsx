"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const pathname = usePathname();

  // Define styles for sidebar links
  const baseLinkClasses =
    "px-3 py-2 rounded text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors";
  const activeLinkClasses = "bg-gray-200 text-gray-800 font-semibold";

  // Determine if the current path starts with /users
  const isUsersRouteActive = pathname.startsWith("/users");

  return (
    <aside className="w-60 h-screen bg-white text-gray-800 shadow-lg border-r border-gray-200 sticky top-0 flex flex-col flex-shrink-0">
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors mb-6"
        >
          Elevated
        </Link>

        <Link
          href="/users"
          className={`${baseLinkClasses} ${
            isUsersRouteActive ? activeLinkClasses : ""
          }`}
          aria-current={isUsersRouteActive ? "page" : undefined}
        >
          Users
        </Link>
      </nav>
    </aside>
  );
};

export default AppSidebar;
