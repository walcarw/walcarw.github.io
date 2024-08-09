import SubjectPage from "../SubjectPage";
import default_img from "../../assets/default.png"
import Docker from "./Docker";
import Samba from "./Samba";
import VirtualBox from "./Virtualbox";
import samba_img from "../../assets/samba.jpg"

function Software(){
    const data = [
        {name: "Docker", desc: "Notes about the Docker software", img: default_img, component: <Docker/>},
        {name: "Samba", desc: "Notes about the Samba software", img: samba_img, component: <Samba/>},
        {name: "VirtualBox", desc: "Notes about the VirtualBox software", img: default_img, component: <VirtualBox/>},
    ]
    return(
        <div>
            <SubjectPage title="Software Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Software