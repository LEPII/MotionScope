import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error</h1>
      <p>
        {isRouteErrorResponse(error) //Check if its 404 or another type of error
          ? "404 Error: Invalid Page"
          : "Unexpected Error"}
      </p>
    </div>
  );
};

export default ErrorPage;
