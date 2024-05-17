import {CONTACT} from "../constants/index.js";

const Contact = () => {
    return (
        <div className={"pb-20"}>
            <h1 className={"my-10 text-center text-4xl"}>Contact</h1>
            <div className={"text-center tracking-tighter"}>
                <p className={"my-4"}>{CONTACT.address}</p>
                <p className={"my-4"}>{CONTACT.phoneNo}</p>
                <p className={"my-4"}>{CONTACT.email}</p>
            </div>
        </div>
    )
}
export default Contact;