import "./App.css";
import {lazy, Suspense} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Offers from "./components/Offers";
import Signin from "./components/Signin";
import ErrorElement from "./components/ErrorElement";
import ResturantDetail from "./components/ResturantDetail";
import FlashSale from "./components/FlashSale";
import store from "./utils/store";
import {Provider} from "react-redux";
import Cart from "./components/Cart";
const Search= lazy(()=>{
  return import('./components/Search')
})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:'/',
        element:<MainContent/>
      },
      {
        path:'/offers',
        element:<Offers/>,
        children:[{
          path:'flash-sale',
          element:<FlashSale/>
        }]
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/restaurant/:id',
        element:<ResturantDetail/>,
      },
      {
        path: '/search',
        element: <Suspense fallback={'loading...'}><Search/></Suspense>
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

export default App;
