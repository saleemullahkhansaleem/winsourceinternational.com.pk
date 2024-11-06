import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  AboutUs,
  ContactUs,
  EdgeMallCeremony,
  Gallery,
  Home,
  NotFound,
} from "./pages";
import { ServiceDetail } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "edge-mall-ceremony",
        element: <EdgeMallCeremony />,
      },
      {
        path: "services/:serviceId",
        element: <ServiceDetail />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
