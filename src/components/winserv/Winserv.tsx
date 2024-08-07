import SubjectPage from "../SubjectPage";
import default_img from "../../assets/default.png"
import ActiveDirectory from "./Ad";
import Roles from "./Roles";
import DhcpServer from "./Dhcp_server";
import DnsServer from "./Dns_server";

function Winserv(){
    const data = [
        {name: "Active Directory", desc: "Notes about the Active Directory", img: default_img, component: <ActiveDirectory/>},
        {name: "Roles", desc: "Notes about Roles", img: default_img, component: <Roles/>},
        {name: "DHCP Server", desc: "Notes about DHCP Server", img: default_img, component: <DhcpServer/>},
        {name: "DNS Server", desc: "Notes about DNS Server", img: default_img, component: <DnsServer/>},
    ]
    return(
        <div>
            <SubjectPage title="Windows Server Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Winserv