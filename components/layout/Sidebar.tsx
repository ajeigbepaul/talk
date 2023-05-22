 import {BsHouseFill, BsBellFill} from 'react-icons/bs'
 import {BiLogOut} from "react-icons/bi"
 import {FaUser} from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarItems from './SidebarItems'
import SidebarTweetButton from './SidebarTweetButton'
 const Sidebar = () => {
    const items = [
        {
            label:'Home',
            href:'/',
            icon: BsHouseFill
        },
        {
            label:'Notifications',
            href:'/notifications',
            icon: BsBellFill
        },
        {
            label:'Profile',
            href:'/123',
            icon:FaUser
        }
    ]
  return (
    <div className='col col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[250px]'>
            <SidebarLogo/>
            {items.map(item=><SidebarItems
            key={item.label}
            label={item.label}
            href={item.label}
            icon={item.icon}
            />)}
            <SidebarItems onClick={()=>{}} label='Logout' icon={BiLogOut}/>
            <SidebarTweetButton/>
            </div>

        </div>
        Sidebar
    </div>
  )
}

export default Sidebar
