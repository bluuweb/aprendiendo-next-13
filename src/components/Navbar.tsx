"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogin = () => {
    console.log("login");
    // verifican que la cuenta exista...??

    // si existe, se redirecciona a dashboard
    router.push("/dashboard");
  };

  return (
    <div>
      <Link
        href="/"
        className="bg-gray-500 text-white py-2 px-4 rounded-md"
      >
        Inicio
      </Link>
      <Link
        href="/dashboard"
        className="bg-gray-500 text-white py-2 px-4 rounded-md"
      >
        dashboard
      </Link>
      <Link
        href="/dashboard/settings"
        className="bg-gray-500 text-white py-2 px-4 rounded-md"
      >
        settings
      </Link>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Navbar;
