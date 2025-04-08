import { Skill } from "@/lib/api";

interface SkillProgressBarProps {
  skillName: string;
  skillData: Skill;
}

const capitalizeFirstLetter = (string: string): string => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({
  skillName,
  skillData,
}) => {
  const { current, max, level } = skillData;
  const percentage = max > 0 ? Math.round((current / max) * 100) : 0;

  // Basic validation
  if (
    typeof current !== "number" ||
    typeof max !== "number" ||
    max < 0 ||
    current < 0
  ) {
    return (
      <div className="mb-4 p-3 bg-gray-100 rounded-lg">
        <p className="font-medium text-gray-700">
          {capitalizeFirstLetter(skillName)}
        </p>
        <p className="text-sm text-red-500">Invalid skill data</p>
      </div>
    );
  }

  return (
    <div className="mb-4 p-3 bg-gray-50 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          {capitalizeFirstLetter(skillName)}
        </span>
        <span className="text-xs font-semibold text-gray-700 bg-gray-200 px-2 py-0.5 rounded-full">
          {level}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-indigo-400 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={`${capitalizeFirstLetter(skillName)} skill progress`}
        ></div>
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">
        {current} / {max}
      </div>
    </div>
  );
};

export default SkillProgressBar;
