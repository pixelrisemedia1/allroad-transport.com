import { Link, useLocation } from "react-router-dom";
export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean).pop() || "unknown";
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-7xl font-light text-slate-300">404</h1>
      <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
      <p className="text-slate-600">The page "{pageName}" could not be found.</p>
      <Link className="underline text-cyan-700" to="/Home">Return home</Link>
    </main>
  );
}
