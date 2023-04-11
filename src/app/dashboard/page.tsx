import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

const PageDashboard = () => {
  return (
    <>
      <div className="mb-4">PageDashboard</div>
      <Link
        href="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Inicio
      </Link>
      <Link
        href="/dashboard/settings"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        settings
      </Link>
    </>
  );
};
export default PageDashboard;
