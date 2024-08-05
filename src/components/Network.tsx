import { useState } from "react";
import NetworkCard from "./network/NetworkCard";
import Models from "./network/Models";
import Hardware from "./network/Hardware";
import Arp from "./network/Arp";
import Dhcp from "./network/Dhcp";
import Dns from "./network/Dns";
import Icmp from "./network/Icmp";
import Ip from "./network/Ip";
import Nat from "./network/Nat";

function Network(){

    const [selected, setSelected] = useState(<NetworkCard/>);

    return(
        <div>
            <h2>Network Cheatsheets</h2>
            <div className="subject-display">
                <nav className="subject-nav">
                    <h3>Basics</h3>
                    <ul>
                        <li>Types</li>
                        <li onClick={() => setSelected(<Hardware/>)}>Hardware</li>
                        <li onClick={() => setSelected(<Models/>)}>TCP/IP & OSI</li>
                    </ul>
                    <h3>Protocols</h3>
                    <ul>
                        <li onClick={() => setSelected(<Arp/>)}>ARP</li>
                        <li onClick={() => setSelected(<Dhcp/>)}>DHCP</li>
                        <li onClick={() => setSelected(<Dns/>)}>DNS</li>
                        <li onClick={() => setSelected(<Icmp/>)}>ICMP</li>
                        <li onClick={() => setSelected(<Ip/>)}>IP</li>
                        <li onClick={() => setSelected(<Nat/>)}>NAT</li>
                    </ul>
                </nav>
                <div>
                    {selected}
                </div>
            </div>
        </div>
    );
}

export default Network