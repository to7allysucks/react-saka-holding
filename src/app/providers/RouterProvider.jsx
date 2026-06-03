import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import HomePage from "../../Pages/HomePage/ui/HomePage";
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
])

export const AppRouter = () => <RouterProvider router={router}/>