import SubjectPage from "../SubjectPage";
import default_img from "../../assets/default.png"
import Docker from "./Docker";
import Samba from "./Samba";
import VirtualBox from "./Virtualbox";
import samba_img from "../../assets/samba.png"

function Software(){
    const data = [
        {name: "Docker", img: default_img, component: <Docker/>},
        {name: "Samba", img: samba_img, component: <Samba/>},
        {name: "VirtualBox", img: default_img, component: <VirtualBox/>},
    ]
    return(
        <div>
            <SubjectPage title="Software Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Software