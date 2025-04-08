interface NameParts {
  first_name?: string | null;
  last_name?: string | null;
}

/**
 * Constructs a full name from optional first and last names.
 * Handles null, undefined, and empty strings, and trims whitespace.
 * Returns 'Unnamed User' if both names are effectively empty.
 *
 * @param names - An object containing optional first_name and last_name.
 * @returns The formatted full name string.
 */
export const getFullName = ({ first_name, last_name }: NameParts): string => {
  const firstName = first_name?.trim();
  const lastName = last_name?.trim();

  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  if (firstName) {
    return firstName;
  }
  if (lastName) {
    return lastName;
  }

  return "Unnamed User"; // fallback
};
