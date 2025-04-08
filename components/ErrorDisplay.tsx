"use client";

import Link from "next/link";

interface ErrorDisplayProps {
  error: Error;
  reset: () => void;
  contextMessage: string;
  secondaryAction?: {
    href: string;
    label: string;
    ariaLabel?: string;
  };
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  reset,
  contextMessage,
  secondaryAction,
}) => {
  const primaryButtonClasses =
    "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors inline-flex items-center justify-center align-middle cursor-pointer";
  const secondaryButtonClasses =
    "px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors inline-flex items-center justify-center align-middle cursor-pointer";

  return (
    <div className="container mx-auto max-w-2xl text-center py-8">
      {" "}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mb-6">{error.message || contextMessage}</p>
      <button
        onClick={() => reset()}
        className={`${primaryButtonClasses} ${secondaryAction ? "mr-2" : ""}`} // Add margin only if secondary action exists
        aria-label={`Try again: ${contextMessage}`}
      >
        Try again
      </button>
      {secondaryAction && (
        <Link
          href={secondaryAction.href}
          className={secondaryButtonClasses}
          aria-label={secondaryAction.ariaLabel || secondaryAction.label}
        >
          {secondaryAction.label}
        </Link>
      )}
    </div>
  );
};

export default ErrorDisplay;
