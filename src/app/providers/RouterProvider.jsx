import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import HomePage from "../../pages/home/ui/HomePage";
import Header from "../../widgets/header/ui/Header";
import AboutPage from "../../pages/about/ui/AboutPage";
import CatalogPage from '../../pages/catalog/ui/CatalogPage';
import NewsPage from "../../pages/news/ui/NewsPage";

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