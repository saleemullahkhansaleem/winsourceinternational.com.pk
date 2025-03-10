import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import { AboutUs, ContactUs, Gallery, Home, NotFound } from "./pages";
import { ProductsDetail, ServiceDetail } from "./components";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";

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
        path: "products/:productId",
        element: <ProductsDetail />,
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
    {/* <Provider store={store}> */}
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    {/* </Provider> */}
  </StrictMode>
);
