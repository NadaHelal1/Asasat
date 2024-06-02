import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
        <Navbar />
        <main>
        <Outlet />
        </main>
    </div>
  )
}

export default MainLayout
