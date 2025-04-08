import { redirect } from "next/navigation";

// This component will immediately redirect any requests for '/' to '/users'
const HomePage = () => {
  redirect("/users");
};

export default HomePage;
