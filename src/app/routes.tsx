import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { UserPage } from "../pages/user-page";
import { SummaryPage } from "../pages/summary-page";
import { MAIN_PAGE, USER_PAGE, SUMMARY_PAGE } from "./constants";

export const AppRoutes = () => (
  <>
    <Routes>
      <Route path={MAIN_PAGE} element={<HomePage />} />
      <Route path={USER_PAGE} element={<UserPage />} />
      <Route path={SUMMARY_PAGE} element={<SummaryPage />} />
    </Routes>
  </>
);
