import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/home/ui/HomePage";
import Header from "../../widgets/header/ui/Header";
import { ROUTES } from "../../shared/config/routes";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
    )
}

const router = createBrowserRouter([
  {
    path: ROUTES.HOME, element: <Layout><HomePage /></Layout>
  },
])

export const AppRouter = () => <RouterProvider router={router}/>