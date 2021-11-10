import { IconType } from "react-icons"
import { FiKey } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import { HiOutlineCurrencyDollar } from "react-icons/hi"
import { HiOutlineBriefcase } from "react-icons/hi"
import { FiUsers } from "react-icons/fi"
import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <div className="m-6">
            <div className="my-6">
                <h1 className="text-2xl font-bold">Settings</h1>
            </div>
            <div className="flex">
                <div>
                <ul className="space-y-2 py-4 pl-6 bg-white w-48 rounded-xl shadow"> 
                    <ItemLink text="Profile" to="" Icon={FiUser} />
                    <ItemLink text="Social" to="" Icon={FiUsers} />
                    <ItemLink text="Project" to="" Icon={HiOutlineBriefcase} />
                    <ItemLink text="Billing" to="" Icon={HiOutlineCurrencyDollar} />
                    <ItemLink text="Security" to="" Icon={FiKey} />
                </ul>
                </div>
                <div className="bg-white ml-6 p-6 flex-auto rounded-xl shadow ">
                    <h1 className="text-xl font-semibold">Profile</h1>
                    <div>
                        <form>
                            <div className="mt-10">
                                <label className="text-sm">First Name</label>
                                <input type="text"  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

type ItemLinkProps = {to: string, Icon:IconType, text:string}
const ItemLink:React.FC<ItemLinkProps> = ({to, Icon, text}) => {
    return (
        <li className="space-y-2 text-skin-base font-semibold focus:text-black ">        
            <Link to={to} className="
            space-y-2 text-skin-muted hover:text-skin-base font-semibold focus:text-black
                flex items-center space-x-2 rounded-sm p-2
                transition duration-400 ease-in-out text-base align-baseline"
            
                >
                <Icon className="text-xl focus:fill-current" /> 
                <span className="pb-1">{text}</span>
            </Link>
        </li>
    )
}

