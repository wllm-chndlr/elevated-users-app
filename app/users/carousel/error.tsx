"use client";

import ErrorDisplay from "@/components/ErrorDisplay";

interface CarouselErrorProps {
  error: Error;
  reset: () => void;
}

const CarouselError: React.FC<CarouselErrorProps> = ({ error, reset }) => {
  return (
    <ErrorDisplay
      error={error}
      reset={reset}
      contextMessage="Could not load the user carousel."
      secondaryAction={{
        href: "/",
        label: "Go Home",
        ariaLabel: "Go to homepage",
      }}
    />
  );
};

export default CarouselError;
