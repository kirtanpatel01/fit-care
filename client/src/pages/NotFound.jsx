import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 text-slate-100">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-4 text-lg text-slate-400">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-4 rounded-md bg-indigo-600 hover:bg-indigo-700 font-semibold text-lg text-white transition"
        >
          Go to Homepage
        </button>
        <p className="mt-6 text-slate-500 text-sm">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
