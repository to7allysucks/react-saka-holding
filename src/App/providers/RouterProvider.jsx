import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import Header from "../../widgets/header/ui/Header";
import Footer from "../../widgets/footer";
import HomePage from "../../Pages/HomePage";
import CatalogPage from "../../Pages/catalog";
import NewsPage from "../../Pages/news";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
    )
}

const router = createBrowserRouter([
  {
    path: ROUTES.HOME, element: <Layout><HomePage /></Layout>
  },
  {
    path: ROUTES.CATALOG, element: <Layout><CatalogPage /></Layout>
  },
  {
    path: ROUTES.NEWS, element: <Layout><NewsPage /></Layout>
  },
])

export const AppRouter = () => <RouterProvider router={router}/>