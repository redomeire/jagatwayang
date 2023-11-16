import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from './pages/Beranda'
import TentangWayang from './pages/TentangWayang'
import EposTokoh from './pages/EposTokoh'
import TentangKami from './pages/TentangKami'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />
  },
  {
    path: '/tentang-wayang',
    element: <TentangWayang />
  },
  {
    path: '/epos',
    element: <EposTokoh />
  },
  {
    path: '/tentang-kami',
    element: <TentangKami />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
