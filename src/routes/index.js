import { Navigate, Outlet } from "react-router-dom";
import SignIn from "../views/signIn";
import Dashboard from "../views/dashboard";
import NotFound from "../views/notFound";
import SecondLayout from '../views/layout/main'
import Vehicles from "../views/vehicles";
import Help from "../views/help";
import VehicleDetails from "../views/vehicle-details";
const routes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? (
      <SecondLayout>
        <Outlet />
      </SecondLayout>
    ) : (
      <Navigate to="/login" />
    ),
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/vehicles", element: <Vehicles /> },
      { path: "/vehicle-details/:dvid", element: <VehicleDetails /> },
      { path: "/help", element: <Help /> },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <Outlet /> : <Navigate to="/" />,
    children: [
      { path: "login", element: <SignIn /> },
      { path: "/", element: <Navigate to="/login" /> },
    ],
  },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
