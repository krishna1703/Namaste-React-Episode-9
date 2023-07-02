import React, { Suspense } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import Contact from "./src/Contact";
import Error from "./src/Error";
import Cart from "./src/Cart";



import RestaurentMenu from "./src/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const About = lazy(() => import("./src/About"))

const InstaMart = lazy(() => import("./src/InstaMart"))



const AppLayout = () => {
  return (
    <div className="App">

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
     
      {
        path: "/About",
        element: <Suspense fallback={<h5>loading.....</h5>}>
          <About />

        </Suspense>
      },

      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/InstaMart",
        element: <Suspense fallback={<h5>loading.....</h5>}>
          <InstaMart />

        </Suspense>
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/restaurents/:resId/",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />,
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
