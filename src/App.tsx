import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "@/constants/routes";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <div className="font-satoshi">
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
