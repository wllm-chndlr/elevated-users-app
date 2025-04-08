"use client";

import { usePathname } from "next/navigation";
import ViewToggle from "@/components/ViewToggle";
import React from "react";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine if we are on the list or carousel page to show the toggle
  const showToggle = pathname === "/users" || pathname === "/users/carousel";

  return (
    <div className="container mx-auto py-8">
      {/* Don't show view toggle on user detail page */}
      {showToggle && (
        <div className="flex justify-center mb-6">
          <ViewToggle currentPathname={pathname} />
        </div>
      )}

      <div
        id={showToggle ? "user-view-content" : undefined}
        role={showToggle ? "tabpanel" : undefined}
      >
        {children}
      </div>
    </div>
  );
}
