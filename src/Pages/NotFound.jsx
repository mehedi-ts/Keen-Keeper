import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-screen min-h-screen bg-[#d9d8d8] flex flex-col justify-center items-center gap-4 text-center">
      <h1 className="font-extrabold text-8xl"> 404</h1>
      <p>Oops..! Page Not Found</p>
      <p>The page you're looking for doesn't exist or has been moved</p>
      <Link className="btn bg-[#244D3F] text-white" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
