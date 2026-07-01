import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3 text-gray-500">Page Not Found</p>

      <Link
        to="/"
        className="mt-6 rounded bg-blue-600 px-6 py-3 text-white"
      >
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;