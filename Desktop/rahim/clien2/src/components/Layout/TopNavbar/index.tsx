import { Link } from "react-router-dom"
import {  FiMail,FiMessageSquare } from 'react-icons/fi';
import  {BsCheck2Square}  from 'react-icons/bs';
import {  FiCalendar } from 'react-icons/fi';
import {  AiOutlineStar } from 'react-icons/ai';
import {  FiMoon } from 'react-icons/fi';
import {  IoMdNotificationsOutline } from 'react-icons/io';
import {  FiSearch } from 'react-icons/fi';
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";


const TopNavbar = () => {
    return (
        <nav className="justify-between flex">
            <ul className="align-baseline flex space-x-4">
                < Item too="mail" Icon={FiMail}/>
                < Item too="message" Icon={FiMessageSquare}/>
                < Item too="check" Icon={BsCheck2Square}/>
                < Item too="calender" Icon={FiCalendar}/>
                < Item too="star" Icon={AiOutlineStar}/>
            </ul>
            <ul className="align-baseline flex space-x-4">
                < Item too="mail" Icon={FiMail}/>
                < Item too="message" Icon={FiMoon}/>
                < Item too="check" Icon={FiSearch}/>
                < Item too="calender" Icon={IoMdNotificationsOutline}/>
                <li className="-mt-2.5 text-right space-y-0">
                    <p className="text-skin-base font-semibold">johndoe</p>
                    <p className="text-skin-muted font-medium">adivser</p>
                </li>
                <li className="w-12 h-12 -mt-2.5 rounded-full bg-green-700">
                </li>
            </ul>
        </nav>
    )
}

export default TopNavbar

type Props = {too:string, Icon:IconType}
const Item:React.FC<Props> = ({too, Icon}) => {
    return (
        <li className="text-skin-base ">
            <Link to={too} className=""><Icon  size={25} /></Link>
        </li>
    )
}