import logo from "../assets/SH Logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"


const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt={"Logo"}/>
            </div>
            <div className="flex gap-4 text-5xl">
                <FaLinkedin/>
                <FaGithub/>
            </div>
        </nav>
    )
}

export default NavBar;