import SubjectPage from "../SubjectPage";
import default_img from "../../assets/default.png"
import Computer from "./Computer";
import Monitor from "./Monitor";
import Printer from "./Printer";
import Peripheral from "./Peripheral";

function Hardware(){
    const data = [
        {name: "Computer", desc: "Notes about Computers", img: default_img, component: <Computer/>},
        {name: "Monitor", desc: "Notes about Monitors", img: default_img, component: <Monitor/>},
        {name: "Printer", desc: "Notes about Printers", img: default_img, component: <Printer/>},
        {name: "Peripheral", desc: "Notes about Peripherals", img: default_img, component: <Peripheral/>},
    ]
    return(
        <div>
            <SubjectPage title="Hardware Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Hardware