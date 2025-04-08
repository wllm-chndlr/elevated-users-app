"use client";

import ErrorDisplay from "@/components/ErrorDisplay";

interface UsersErrorProps {
  error: Error;
  reset: () => void;
}

const UsersError: React.FC<UsersErrorProps> = ({ error, reset }) => {
  return (
    <ErrorDisplay
      error={error}
      reset={reset}
      contextMessage="Could not load the user list."
    />
  );
};

export default UsersError;
