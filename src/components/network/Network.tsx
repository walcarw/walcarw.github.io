import default_img from "../../assets/default.png"
import Models from "./Models";
import Hardware from "./Hardware";
import Arp from "./Arp";
import Dhcp from "./Dhcp";
import Dns from "./Dns";
import Icmp from "./Icmp";
import Ip from "./Ip";
import Nat from "./Nat";
import Overview from "./Overview";
import SubjectPage from "../SubjectPage";

function Network(){

    const data = [
        {name: "Overview", img: default_img, component: <Overview/>},
        {name: "OSI & TCP/IP", img: default_img, component: <Models/>},
        {name: "Hardware", img: default_img, component: <Hardware/>},
        {name: "ARP", img: default_img, component: <Arp/>},
        {name: "DHCP", img: default_img, component: <Dhcp/>},
        {name: "DNS", img: default_img, component: <Dns/>},
        {name: "ICMP", img: default_img, component: <Icmp/>},
        {name: "IP", img: default_img, component: <Ip/>},
        {name: "NAT", img: default_img, component: <Nat/>},

    ]
    return(
        <div>
            <SubjectPage title="Network Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Network