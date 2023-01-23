import { Routes, Route } from "react-router-dom";
import { InboxPage } from "../pages/inbox-page";
import { DraftsPage } from "../pages/drafts-page";
import { MAIN_PAGE, INBOX_PAGE, DRAFT_PAGE } from "./constants";

export const AppRoutes = () => (
  <>
    <Routes>
      <Route path={MAIN_PAGE} element={<InboxPage />} />
      <Route path={INBOX_PAGE} element={<InboxPage />} />
      <Route path={DRAFT_PAGE} element={<DraftsPage />} />
    </Routes>
  </>
);
