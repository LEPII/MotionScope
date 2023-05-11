import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "sign-up", element: <SignUpForm /> },
    ],
  },
]);

export default router;
