"use client";

import { useRouter } from "next/navigation";

interface ViewToggleProps {
  currentPathname: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentPathname }) => {
  const router = useRouter();

  // Determine active view based on pathname
  const activeView =
    currentPathname === "/users/carousel" ? "carousel" : "list";

  const handleViewChange = (view: "list" | "carousel") => {
    const targetPath = view === "list" ? "/users" : "/users/carousel";
    // Only navigate if the path is actually changing
    if (targetPath !== currentPathname) {
      router.push(targetPath);
    }
  };

  const baseButtonClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer";
  const inactiveButtonClasses = "text-gray-600 bg-gray-100 hover:bg-gray-200";
  const activeButtonClasses = "text-gray-900 bg-gray-300 font-semibold";

  return (
    <div
      className="flex space-x-2 p-1 bg-gray-200 rounded-lg"
      role="tablist"
      aria-label="User view toggle"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeView === "list"}
        aria-controls="user-view-content"
        className={`${baseButtonClasses} ${
          activeView === "list" ? activeButtonClasses : inactiveButtonClasses
        }`}
        onClick={() => handleViewChange("list")}
        data-testid="view-toggle-list"
      >
        List
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeView === "carousel"}
        aria-controls="user-view-content"
        className={`${baseButtonClasses} ${
          activeView === "carousel"
            ? activeButtonClasses
            : inactiveButtonClasses
        }`}
        onClick={() => handleViewChange("carousel")}
        data-testid="view-toggle-carousel"
      >
        Carousel
      </button>
    </div>
  );
};

export default ViewToggle;
