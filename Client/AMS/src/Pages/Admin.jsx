// src/pages/Admin.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { checkAuthStatus, logoutUser } from "../Redux/AuthThunk";

import {
  Squares2X2Icon,
  UsersIcon,
  ComputerDesktopIcon,
  InboxArrowDownIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, user, role } = useSelector(
    (state) => state.auth
  );

  /* ---------- verify token on mount ---------- */
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  /* ---------- redirects ---------- */
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) navigate("/login", { replace: true });
      else if (role === "employee") navigate("/employee", { replace: true });
    }
  }, [loading, isAuthenticated, role, navigate]);

  /* ---------- logout ---------- */
  const handleLogout = async () => {
    await dispatch(logoutUser()).unwrap();
    navigate("/login", { replace: true });
  };

  /* ---------- loading spinner ---------- */
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
        <span className="h-14 w-14 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></span>
      </div>
    );
  }

  /* ---------- ui ---------- */
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* ───── Sidebar ───── */}
      <aside className="w-72 bg-white shadow-2xl flex flex-col py-8 px-6 border-r border-gray-100">
        <h1 className="text-2xl font-extrabold text-indigo-600 mb-10">
          AMS Admin
        </h1>

        <nav className="flex-1 space-y-1">
          <NavLink
            label="Dashboard"
            Icon={Squares2X2Icon}
            onClick={() => navigate("/admin")}
          />
          <NavLink
            label="Employees"
            Icon={UsersIcon}
            onClick={() => navigate("/admin/employees")}
          />
          <NavLink
            label="Assets"
            Icon={ComputerDesktopIcon}
            onClick={() => navigate("/admin/assets")}
          />
          <NavLink
            label="Requests"
            Icon={InboxArrowDownIcon}
            onClick={() => navigate("/admin/requests")}
          />
        </nav>

        <NavLink
          label="Logout"
          Icon={ArrowRightOnRectangleIcon}
          onClick={handleLogout}
          danger
        />
      </aside>

      {/* ───── Main content ───── */}
      <main className="flex-1 overflow-y-auto p-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.name || user?.email?.split("@")[0]}
          </h2>
          <p className="text-gray-500 mt-1">
            Manage employees, assets, and requests from here.
          </p>
        </header>

        {/* React‑Router renders nested pages here */}
        <Outlet />
      </main>
    </div>
  );
}

/* --------------------------------------------------
   Sidebar link component
-------------------------------------------------- */
function NavLink({ label, Icon, onClick, danger = false }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 w-full px-4 py-2 rounded-lg font-medium transition
        ${danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-indigo-50"}`}
    >
      <Icon className={`h-5 w-5 ${danger ? "text-red-600" : "text-indigo-600"}`} />
      <span>{label}</span>
    </button>
  );
}
