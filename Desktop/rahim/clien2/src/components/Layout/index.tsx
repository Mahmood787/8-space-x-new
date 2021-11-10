import { FC } from "react"
import SideNavbar from "./SideNavbar"
import TopNavbar from "./TopNavbar"

const Layout:FC = ({children}) => {
    return (
        <header className="bg-gray-100 flex ">
            <div className="w-64 shadow">
                <SideNavbar />
            </div>
            <div className="flex-grow m-4 h-14 shadow  p-4 rounded-xl bg-white">
                <TopNavbar />
                 {/* content */}
                <div>
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Layout
