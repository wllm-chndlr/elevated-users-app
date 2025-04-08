import { UserDetails, fetchAllUsersWithDetails } from "@/lib/api";
import UserCarousel from "@/components/UserCarousel";

const UserCarouselPage = async () => {
  const successfulUserDetails: UserDetails[] = await fetchAllUsersWithDetails();

  if (successfulUserDetails.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No users found or details could not be loaded.
      </p>
    );
  }

  return <UserCarousel users={successfulUserDetails} />;
};

export default UserCarouselPage;
