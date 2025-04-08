"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { UserDetails } from "@/lib/api";
import UserProfileCard from "./UserProfileCard";

interface UserCarouselProps {
  users: UserDetails[];
}

const UserCarousel: React.FC<UserCarouselProps> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : users.length - 1
    );
  }, [users.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < users.length - 1 ? prevIndex + 1 : 0
    );
  }, [users.length]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (event.deltaY < 0) {
        handlePrevious();
      } else if (event.deltaY > 0) {
        handleNext();
      }
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handlePrevious, handleNext]);

  const currentUserData = users[currentIndex];

  if (!currentUserData) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No user data available for display.
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div
        ref={carouselRef}
        className="relative max-w-md mx-auto outline-none"
        tabIndex={0}
        aria-roledescription="carousel"
      >
        <div
          key={currentUserData.id}
          className="min-h-[580px] flex items-center justify-center transition-opacity duration-300 ease-in-out animate-fadeIn"
          role="group"
          aria-label={`User ${currentIndex + 1} of ${users.length}`}
        >
          <UserProfileCard user={currentUserData} />
        </div>

        {users.length > 1 && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full pl-2">
            <button
              onClick={handlePrevious}
              className="p-3 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all mx-4"
              aria-label="Previous user"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        )}
        {users.length > 1 && (
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full pr-2">
            <button
              onClick={handleNext}
              className="p-3 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all mx-4"
              aria-label="Next user"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCarousel;
