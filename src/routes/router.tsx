import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ExperiencePage from "@/pages/ExperiencePage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import OpenSourcePage from "@/pages/OpenSourcePage";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ResumePage from "@/pages/ResumePage";
import WritingPage from "@/pages/WritingPage";
import { routes } from "./routes";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.projects} element={<ProjectsPage />} />
        <Route path={routes.projectDetail} element={<ProjectDetailsPage />} />
        <Route path={routes.openSource} element={<OpenSourcePage />} />
        <Route path={routes.writing} element={<WritingPage />} />
        <Route path={routes.experience} element={<ExperiencePage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.resume} element={<ResumePage />} />
        <Route path={routes.notFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
