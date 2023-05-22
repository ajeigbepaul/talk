import { useRouter } from "next/router";
const SidebarLogo =()=> {
    const router = useRouter()
    return (
    
      <div onClick={()=>router.push('/')} className="rounded-full h-14 w-14 flex item-center justify-center hover:bg-blue-300 hover:bg-opacity-10 transition cursor-pointer">
        <img src="communelogo.png" alt="logo" color="white" className="w-12 h-12 rounded-md" />
      </div>
    );
}

export default SidebarLogo;