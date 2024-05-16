import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import Home from './pages/home'
import Category from './pages/category'
import SearchPage from './pages/search'
import GifPage from './pages/single-gif'
import Favorites from './pages/favourites'
import GifProvider from './context/gif-context'


//homepage
//categories
//search
//single gif
//favourites

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:type/:slug',
        element:<GifPage/>
      },
      {
        path:'/:category',
        element:<Category/>
      },
      {
        path:'/search/:query',
        element:<SearchPage/>
      },
      {
        path:'/favourites',
        element:<Favorites/>
      },

    ]
  }
])

function App() {
  
  return( 
  <GifProvider>
    <RouterProvider router={router}/>
  </GifProvider>
)
}

export default App
