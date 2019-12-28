import App from "../client/App";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UserListPage";
import adminsListPage from "./pages/adminsListPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...adminsListPage,
        path: "/admins"
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
