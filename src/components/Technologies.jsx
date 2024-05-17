import {
    DiAngularSimple,
    DiCss3,
    DiDatabase,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiPython, DiRuby
} from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import {motion} from "framer-motion";

const iconVariant = (duration) => ({
    initial:{y:-10},
    animate:{
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"

        }
    }
})
const Technologies = () => {
    return (
        <motion.div
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 1, y:-100}}
            transition={{duration:1.5}}
            className={"border-b border-neutral-900 pb-24"}>
            <h2 className={"my-20 text-center text-4xl"}>Technologies</h2>
            <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 1, x:-100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center">
                <motion.div
                    variants={iconVariant(2.5)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiPython className={"text-7xl text-blue-600"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(3)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiHtml5 className={"text-7xl text-red-700"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(3.5)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiCss3 className={"text-7xl text-blue-500"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(4)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiJavascript1 className={"text-7xl text-yellow-500"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(4.5)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiDatabase className={"text-7xl"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(5)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiAngularSimple className={"text-7xl text-red-700"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(5.5)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <SiMongodb className={"text-7xl text-green-500"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(6)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4 mr-4"}>
                    <DiNodejsSmall className={"text-7xl text-green-500"}/>
                </motion.div>
                <motion.div
                    variants={iconVariant(6.5)}
                    initial="initial"
                    animate="animate"
                    className={"rounded-2xl border-4 border-neutral-900 p-4"}>
                    <DiRuby className={"text-7xl text-red-800"}/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};


export default Technologies