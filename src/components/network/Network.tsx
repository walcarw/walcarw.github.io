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
        {name: "Overview", desc: "Notes about the Basic Concepts of Computer Networking", img: default_img, component: <Overview/>},
        {name: "OSI & TCP/IP", desc: "Notes about the OSI and TCP/IP Models", img: default_img, component: <Models/>},
        {name: "Hardware", desc: "Notes about network hardware", img: default_img, component: <Hardware/>},
        {name: "ARP", desc: "Notes about the ARP protocol", img: default_img, component: <Arp/>},
        {name: "DHCP", desc: "Notes about the DHCP protocol", img: default_img, component: <Dhcp/>},
        {name: "DNS", desc: "Notes about the DNS protocol", img: default_img, component: <Dns/>},
        {name: "ICMP", desc: "Notes about the ICMP protocol", img: default_img, component: <Icmp/>},
        {name: "IP", desc: "Notes about the IP protocol", img: default_img, component: <Ip/>},
        {name: "NAT", desc: "Notes about the NAT protocol", img: default_img, component: <Nat/>},

    ]
    return(
        <div>
            <SubjectPage title="Network Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Network