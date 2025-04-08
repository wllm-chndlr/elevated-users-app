import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl text-center">
      <Link
        href="/users"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Back to User List
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - User Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn't find the user profile you were looking for.
      </p>
      <Link
        href="/users"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        aria-label="Return to the user list"
      >
        Return to User List
      </Link>
    </div>
  );
};

export default NotFoundPage;
