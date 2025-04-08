const UsersLoading = () => {
  return (
    <div
      className="container mx-auto max-w-2xl"
      data-testid="user-list-loading"
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden border-t border-gray-100">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center animate-pulse">
            <div className="mr-4 flex-shrink-0">
              <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex-grow space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-5 w-5 bg-gray-200 rounded ml-2"></div>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center animate-pulse">
            <div className="mr-4 flex-shrink-0">
              <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex-grow space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-5 w-5 bg-gray-200 rounded ml-2"></div>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center animate-pulse">
            <div className="mr-4 flex-shrink-0">
              <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex-grow space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-5 w-5 bg-gray-200 rounded ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLoading;
