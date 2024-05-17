import About from "../assets/about me.png"
import {ABOUT_TEXT} from "../constants/index.js";
import {motion} from "framer-motion";


const AboutMe = () => {
    return (
        <div className={"border-b border-neutral-900 pg-4"}>
            <h1 className={"my-20 text-center text-4xl"}>
                About
                <span className={"text-neutral-500"}> Me</span>
            </h1>
            <div className={"flex flex-wrap"}>
                <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 1, x:-100}}
                    transition={{duration:1.5}}
                    className={"w-full lg:w-1/2 lg:p-8"}>
                    <div className={"flex items-center justify-center"}>
                        <img className={"pt-0"} src={About} alt="About"/>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 1, x:100}}
                    transition={{duration:1.5}}
                    className={"w-full p-20 lg:w-1/2"}>
                    <div className={"flex justify-center lg:justify-start"}>
                        <p>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default AboutMe;
