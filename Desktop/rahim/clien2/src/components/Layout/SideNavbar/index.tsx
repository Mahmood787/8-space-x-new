import { Link } from "react-router-dom"
import { FiHome, FiMail } from 'react-icons/fi';
import { BsFonts } from 'react-icons/bs';
import { BiDroplet } from 'react-icons/bi';
import { GrStatusPlaceholder } from 'react-icons/gr';
import { AiTwotoneTool } from 'react-icons/ai';
import { IoIosContact} from 'react-icons/io';


const SideNavbar = () => {
    return (
        <div>
            <div className="px-2  bg-white" >
                {/* Logo */}
                <div className="py-6 px-2">
                    <Link to="/" >
                        <img src="https://hubadviser.com/wp-content/uploads/2021/05/hubadvisor_logo.png" alt="logo" />
                    </Link>
                </div>
                {/* Nav */}
                <nav>
                    <ul className="space-y-2 pt-4 "> 
                        <li className=" text-skin-muted text-sm font-semibold px-2">HOME</li>
                        <ItemLi >
                            <ItemLink to="/dashboard" >
                                <FiHome/> <span>Dashboard</span>
                            </ItemLink>     
                        </ItemLi>
                        <li  className=" text-skin-muted text-sm font-semibold pt-4 p-2">CONSULTSTIONS</li>
                        <ItemLi >
                            <ItemLink to="/status" >
                                <FiMail/> <span>Status</span>
                            </ItemLink>  
                            <ItemLink to="/opportunities" >
                                <FiMail/> <span>Opportunities</span>
                            </ItemLink>    
                        </ItemLi>
                        <li className=" text-skin-muted text-sm font-semibold pt-4 p-2">YOU</li>
                        <ItemLi >
                            <ItemLink to="/profile">
                                <BsFonts/> <span>Profile</span>
                            </ItemLink>   
                            <ItemLink to="/recommendations" >
                                <BiDroplet/> <span>Recommendations</span>
                            </ItemLink>      
                        </ItemLi>
                        <li className=" text-skin-muted text-sm font-semibold pt-4 p-2">PAYMENTS</li>
                        <ItemLi >
                            <ItemLink to="/status" >
                                <GrStatusPlaceholder/> <span>Status</span>
                            </ItemLink>     
                        </ItemLi>
                        <li className=" text-skin-muted text-sm font-semibold pt-4 p-2">HELP</li>
                        <ItemLi>
                            <ItemLink to="/toolbox" >
                                <AiTwotoneTool/> <span>My ToolBox</span>
                            </ItemLink>    
                            <ItemLink to="/" >
                                <IoIosContact/> <span>Contact</span>
                            </ItemLink> 
                        </ItemLi>
                    </ul>
                </nav>
            </div>
            {/* Content */}
            <div className="flex-1 p-10 text-2xl font-bold">
                Content Goes Here
            </div>
        </div>
    )
}

export default SideNavbar

const ItemLi:React.FC = ({children}) => {
    return (
        <li className="space-y-2 text-skin-base font-semibold ">        
            {children}
        </li>
    )
}
type ItemLinkProps = {to: string}
const ItemLink:React.FC<ItemLinkProps> = ({children, to}) => {
    return (
        <Link to={to} className="
            flex items-center space-x-2 hover:text-white 
            hover:bg-skin-gradient1 hover:shadow-2xl hover:opacity-80 rounded-sm p-2
            transition duration-400 ease-in-out text-base"
        
            >
            {children}
        </Link>
    )
}
