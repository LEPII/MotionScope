import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const router = createBrowserRouter([
  { path: "/", element: <LoginForm /> },
  { path: "/sign-up", element: <SignUpForm /> },
]);

export default router;
