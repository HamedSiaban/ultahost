import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="font-satoshi 3xl:px-60 3xl:py-30 3xl:gap-x-40 3xl:gap-y-30 flex flex-col items-start gap-10 bg-white px-5 py-10 2xl:grid 2xl:grid-cols-2 2xl:gap-x-5 2xl:gap-y-20 2xl:px-10 2xl:py-25">
      <Outlet />
    </main>
  );
}
