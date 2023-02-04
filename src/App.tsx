import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "shop",
//         element: <Shop />,
//         errorElement: <Error />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
