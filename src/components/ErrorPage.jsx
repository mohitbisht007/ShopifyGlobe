import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex md:w-full flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</p>
      <p className="text-gray-600 mb-6 text-center">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;