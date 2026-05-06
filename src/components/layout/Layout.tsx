import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="font-satoshi 3xl:px-60 3xl:py-30 3xl:grid 3xl:grid-cols-2 3xl:gap-x-40 3xl:gap-y-30 flex flex-col items-start gap-10 bg-white px-5 py-10">
      <Outlet />
    </main>
  );
}
