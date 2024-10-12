import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  About as AboutSection,
  Contact as ContactSection,
  Home as HomeSection,
  Project as ProjectSection,
  Resume as ResumeSection,
} from "../pages";

const appRoutes = [
  {
    path: "/",
    element: <HomeSection />,
  },
  {
    path: "/about",
    element: <AboutSection />,
  },
  {
    path: "/projects",
    element: <ProjectSection />,
  },
  {
    path: "/resume",
    element: <ResumeSection />,
  },
  {
    path: "/contact",
    element: <ContactSection />,
  },
];

const AppRoutes = createBrowserRouter(appRoutes);

export default AppRoutes;
