import logo from "../assets/SH Logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BrowserRouter, Link } from "react-router-dom"
import IconButton from "./IconButtons.jsx";

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt={"Logo"}/>
            </div>
            <BrowserRouter>
                <div className="flex gap-4">
                    <Link to={"https://www.linkedin.com/in/hassansanni/"}>
                        <IconButton text={"LinkedIn"}>
                            <FaLinkedin size={40}/>
                        </IconButton>
                    </Link>
                    <Link to={"https://github.com/JVO29"}>
                        <IconButton text={"Github"}>
                            <FaGithub size={40}/>
                        </IconButton>
                    </Link>
                </div>
            </BrowserRouter>

        </nav>
    )
}

export default NavBar;