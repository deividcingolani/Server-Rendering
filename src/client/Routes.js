import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UserListPage";
import App from "../client/App";

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
        ...UsersListPage,
        path: "/users"
      }
    ]
  }
];
