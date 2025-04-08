import Image from "next/image";

interface UserAvatarProps {
  base64Image: string | null | undefined;
  alt: string;
  size?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  base64Image,
  alt,
  size = 40,
}) => {
  let imageSrc: string | null = null;

  // Check if we have a string and if the prefix is missing
  if (typeof base64Image === "string" && base64Image.length > 0) {
    if (base64Image.startsWith("data:image/jpeg;base64,")) {
      imageSrc = base64Image; // Already has prefix
    } else if (base64Image.startsWith("/9j/")) {
      // Looks like a valid JPEG base64 string, add the prefix
      imageSrc = `data:image/jpeg;base64,${base64Image}`;
    }
  }

  return (
    <div
      className="relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0"
      style={{ width: size, height: size }}
      aria-label={alt}
      role="img"
    >
      {imageSrc ? (
        // Render the image if we have a valid source string
        <Image
          src={imageSrc}
          alt=""
          layout="fill"
          objectFit="cover"
          unoptimized={true}
          aria-hidden="true"
        />
      ) : (
        // Render placeholder if imageSrc is null
        <div
          className={`absolute inset-0 flex items-center justify-center text-gray-400`}
          aria-label="Default user avatar"
          title="User avatar not available"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: size * 0.6, height: size * 0.6 }}
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
