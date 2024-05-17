import NavBar from './components/NavBar';
import Body from "./components/Body.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";



const App = () => {
    return (
        <div className={"overflow-hidden text-neutral-300 antialiased selection:bg-blue-600 selection:text-black"}>
            <div className={"fixed top-0 -z-10 h-full w-full"}>
                <div className={"absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"}></div>
            </div>
            <div className={"container mx-auto px-8"}>
                <NavBar/>
                <Body/>
                <AboutMe/>
                <Technologies/>
                <Projects/>
                <Experience/>
                <Contact/>
            </div>
        </div>
    )
}

export default App;