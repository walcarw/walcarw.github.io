import SubjectPage from "../SubjectPage";
import default_img from "../../assets/default.png"
import User from "./User";
import File from "./File";
import Process from "./Process";

function Linux(){
    const data = [
        {name: "Users & Groups", img: default_img, component: <User/>},
        {name: "Files", img: default_img, component: <File/>},
        {name: "Processes", img: default_img, component: <Process/>},
    ]
    return(
        <div>
            <SubjectPage title="Linux Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Linux