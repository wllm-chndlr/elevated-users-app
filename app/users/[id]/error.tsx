"use client";

import ErrorDisplay from "@/components/ErrorDisplay";

interface UserProfileErrorProps {
  error: Error;
  reset: () => void;
}

const UserProfileError: React.FC<UserProfileErrorProps> = ({
  error,
  reset,
}) => {
  return (
    <ErrorDisplay
      error={error}
      reset={reset}
      contextMessage="Could not load this user profile."
      secondaryAction={{
        href: "/users",
        label: "Go to User List",
        ariaLabel: "Go back to user list",
      }}
    />
  );
};

export default UserProfileError;
