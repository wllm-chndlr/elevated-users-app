const UserProfileCardSkeleton = () => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md p-6 animate-pulse mx-auto border-t border-gray-100">
    {/* Avatar and Name Skeleton */}
    <div className="flex flex-col items-center mb-6">
      <div className="mb-4 bg-gray-200 rounded-full h-24 w-24"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    </div>

    {/* Stats Skeleton */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-gray-100 p-3 rounded-lg h-16"></div>
      <div className="bg-gray-100 p-3 rounded-lg h-16"></div>
    </div>

    {/* Skills Skeleton */}
    <div>
      <div className="h-5 bg-gray-200 rounded w-1/4 mb-3"></div>
      <div className="mb-4 p-3 bg-gray-50 rounded-lg h-16"></div>
      <div className="mb-4 p-3 bg-gray-50 rounded-lg h-16"></div>
      <div className="mb-4 p-3 bg-gray-50 rounded-lg h-16"></div>
      <div className="mb-4 p-3 bg-gray-50 rounded-lg h-16"></div>
    </div>
  </div>
);

export default UserProfileCardSkeleton;
