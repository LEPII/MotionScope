import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/form/LoginForm";
import SignUpForm from "./components/form/SignUpForm";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "sign-up", element: <SignUpForm /> },
    ],
  },
]);

export default router;
