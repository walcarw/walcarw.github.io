function Arp(){
    return(
        <div>
            <h2>ARP : Address Resolution Protocol</h2>
            <h3>Overview</h3>
            <ul>
                <li>GOAL : Get the MAC address given an IP address</li>
                <li>The mapping IP address/MAC address are stored in an ARP cache table</li>
                <li>The data in the table is in the form : (IP address, MAC address, Type)</li>
                <li>A host only ask the MAC addresses of hosts in its LAN. If the receiver is on another LAN, the host send the message to the gateway and ask the MAC address of the gateway.</li>
            </ul>
            <h3>Scenarios</h3>
            <ul>
                <li>
                    The host A want to send a message M to the host B (same LAN)
                    <ol>
                        <li>The host A send an ARP Request message with the IP address of the host B as target (broadcast)</li>
                        <li>The host B receive the ARP Request. The host B send an ARP Reply message which contains its MAC address (unicast)</li>
                        <li>The host A receive the ARP Reply. The host A send the message M to the host B.</li>
                    </ol>
                </li>
                <li>
                    The host A want to send a message M to the host B (A and B are in different LAN)
                    <ol>
                        <li>The host A send an ARP Request message with the IP address of the gateway (router) as target (broadcast)</li>
                        <li>The gateway receive the ARP Request. The gateway send an ARP Reply message which contains its MAC address (unicast)</li>
                        <li>The host A receive the ARP Reply. The host A send the message M to the gateway.</li>
                        <li>The gateway send an ARP Request message with the IP address of the host B as target (broadcast)</li>
                        <li>The host B receive the ARP Request. The host B send an ARP Reply message which contains its MAC address (unicast)</li>
                        <li>The gateway receive the ARP Reply. The gateway send the message M to the host B.</li>
                    </ol>
                </li>
            </ul>
            <h3>Practice</h3>
            <ul>
                <li>
                    Windows
                    <ul>
                        <li>To display the ARP table: arp -a</li>
                    </ul>
                </li>
                <li>
                    Linux 
                    <ul>
                        <li>The ARP table can be found in /proc/net/arp</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Arp