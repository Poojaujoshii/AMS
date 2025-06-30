import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuthStatus, logoutUser } from "../Redux/AuthThunk";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  PlusCircleIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

/* --------------------------------------------------
   Employee dashboard – full‑width layout
-------------------------------------------------- */
export default function Employee() {
  const dispatch   = useDispatch();
  const navigate   = useNavigate();
  const { isAuthenticated, loading, user, role } = useSelector((s) => s.auth);

  /* ---- verify token on mount ---- */
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  /* ---- redirects ---- */
  useEffect(() => {
    if (role === "admin") navigate("/admin", { replace: true });
    else if (!loading && !isAuthenticated) navigate("/login", { replace: true });
  }, [role, isAuthenticated, loading, navigate]);

  const handleLogout = async () => {
    await dispatch(logoutUser()).unwrap();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* ───────────────────────────── Sidebar */}
      <aside className="w-72 bg-white shadow-2xl flex flex-col py-8 px-6 border-r border-gray-100">
        <h1 className="text-2xl font-extrabold text-indigo-600 mb-10">AMS Employee</h1>

        <nav className="flex-1 space-y-1">
          <SidebarLink label="Dashboard" Icon={HomeIcon} onClick={() => navigate("/employee")} />
          <SidebarLink label="My Assets" Icon={ClipboardDocumentListIcon} onClick={() => navigate("/employee/assets")} />
          <SidebarLink label="Request Asset" Icon={PlusCircleIcon} onClick={() => navigate("/employee/request")} />
          <SidebarLink label="Profile" Icon={UserCircleIcon} onClick={() => navigate("/employee/profile")} />
        </nav>

        {/* logout */}
        <SidebarLink
          label="Logout"
          Icon={ArrowRightOnRectangleIcon}
          onClick={handleLogout}
          danger
        />
      </aside>

      {/* ───────────────────────────── Main content */}
      <main className="flex-1 overflow-y-auto p-12">
        {/* greeting */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome back, {user?.name || user?.email?.split("@")[0]}!
          </h2>
          <p className="text-gray-500 mt-1">Here’s a quick overview of your workspace.</p>
        </header>

        {/* profile card */}
        <section className="bg-white rounded-2xl shadow-sm p-8 flex items-center gap-6 mb-10">
          <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-2xl">
            {user?.name ? user.name[0].toUpperCase() : user?.email?.[0].toUpperCase()}
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-900">{user?.name || "Unnamed Employee"}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </section>

        {/* quick links grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickCard
            title="My Assets"
            description="View everything assigned to you"
            onClick={() => navigate("/employee/assets")}
          />
          <QuickCard
            title="Request Asset"
            description="Need something new? Create a request."
            onClick={() => navigate("/employee/request")}
          />
          <QuickCard
            title="Profile"
            description="Manage personal info & settings"
            onClick={() => navigate("/employee/profile")}
          />
        </section>
      </main>
    </div>
  );
}

/* --------------------------------------------------
   Sidebar link component
-------------------------------------------------- */
function SidebarLink({ label, Icon, onClick, danger = false }) {
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

/* --------------------------------------------------
   Quick‑action card
-------------------------------------------------- */
function QuickCard({ title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col text-left"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 flex-1">{description}</p>
      <span className="mt-4 text-indigo-600 font-medium">Go &rarr;</span>
    </button>
  );
}
