import * as React from "react";
import Characters from "../pages/Characters/Characters";
import Home from "../pages/Home";
import Layout from "../componets/Layout/Layout";
import Character from "../pages/Character/Character";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      ></Route>
      <Route
        path="/characters"
        element={
          <Layout>
            <Characters />
          </Layout>
        }
      ></Route>
      <Route
        path="/character/:id"
        element={
          <Layout>
            <Character />
          </Layout>
        }
      ></Route>
    </Route>
  )
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <Home />
//       </Layout>
//     ),
//   },
//   {
//     path: "/characters",
//     element: (
//     <Layout>
//     <Characters />,
//     </Layout>
//     ),
//   },
//   {
//     path: "/character",
//     element: (
//     <Layout>
//     <Character />,
//     </Layout>
//     ),
//   },
// ]);

export const Provider = () => <RouterProvider router={router} />;
