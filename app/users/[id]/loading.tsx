import UserProfileCardSkeleton from "@/components/UserProfileCardSkeleton";

const UserProfileLoading = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <UserProfileCardSkeleton />
      </div>

      <div className="mt-6 text-center animate-pulse">
        <div className="inline-flex items-center">
          <div className="h-4 w-4 mr-1 bg-gray-200 rounded"></div>{" "}
          <div className="h-4 bg-gray-200 rounded w-24"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserProfileLoading;
