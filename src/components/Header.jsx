import Logo from "./Logo";
import NavBar from "./NavBar";


const Header = () => {
    return (
        <div className={`bg-blue-500  fixed w-screen z-50`}>
            <div className={`flex items-center h-14 container mx-auto px-4 `}>
                <Logo/>
                <NavBar />
            </div>
        </div>
    )
}
export default Header;