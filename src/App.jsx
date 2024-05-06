import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './features/ui/Home';
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from './features/cart/Cart';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, { action as createOrder } from './features/order/CreateOrder';
import Error from './features/ui/Error';
import AppLayout from "./features/ui/AppLayout";
import { Provider } from "react-redux";
import store from './features/store';
function App() {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />, errorElement: <Error />, children: [
        { path: '/', element: <Home /> },
        { path: '/menu', element: <Menu />, loader: menuLoader, errorElement: <Error /> },
        { path: "/cart", element: <Cart /> },
        { path: "/order/new", element: <CreateOrder />, action: createOrder },
        { path: "/order/:id", element: <Order />, loader: orderLoader },
      ]
    }

  ])
  return <>
    <Provider store={store} >
      <RouterProvider router={routes} />
    </Provider >

  </>
}

export default App
