import { UserDetails } from "@/lib/api";
import UserAvatar from "./UserAvatar";
import SkillProgressBar from "./SkillProgressBar";
import { getFullName } from "@/lib/utils";

interface UserProfileCardProps {
  user: UserDetails;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const fullName = getFullName({
    first_name: user.first_name,
    last_name: user.last_name,
  });

  // Define the order of skills
  const skillOrder: (keyof UserDetails["stats"]["skills"])[] = [
    "math",
    "reading",
    "writing",
    "speaking",
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto p-6 border-t border-gray-100">
      <div className="flex flex-col items-center mb-6">
        <div className="mb-4">
          <UserAvatar
            base64Image={user.image}
            alt={`${fullName}'s avatar`}
            size={96}
          />
        </div>
        <h2
          className="text-2xl font-bold text-gray-800"
          data-testid="profile-card-name"
        >
          {fullName}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-center">
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Current Streak</p>
          <p className="text-xl font-semibold text-gray-700">
            {user.stats.current_streak_in_days} days
          </p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Sessions Played</p>
          <p className="text-xl font-semibold text-gray-700">
            {user.stats.total_sessions_played}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Skills</h3>
        {skillOrder.map((skillKey) => (
          <SkillProgressBar
            key={skillKey}
            skillName={skillKey}
            skillData={user.stats.skills[skillKey]}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfileCard;
