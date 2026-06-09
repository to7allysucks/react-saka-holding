import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import HomePage from "../../pages/home";
import Header from "../../widgets/header";
import AboutPage from "../../pages/about";
import CatalogPage from '../../pages/catalog';
import NewsPage from "../../pages/news";

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
    {
    path: ROUTES.ABOUT, element: <Layout><AboutPage /></Layout>
  },
  {
    path: ROUTES.CATALOG, element: <Layout><CatalogPage /></Layout>
  },
  {
    path: ROUTES.NEWS, element: <Layout><NewsPage /></Layout>
  },
])

export const AppRouter = () => <RouterProvider router={router}/>