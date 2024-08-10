function Dhcp(){
    return(
        <div className="topic-container" >
            <h2 className="topic-title">DHCP : Dynamic Host Configuration Protocol</h2>
            <h3 className="topic-subtitle">Overview</h3>
            <ul>
                <li>GOAL : Automatically gives IP addresses to hosts</li>
                <li>Uses the client-server architecture. The host send a request to a DHCP server and the server respond</li>
                <li>
                    Advantages
                    <ul>
                        <li>Centralize management of IP addresses</li>
                        <li>Can reuse IP addresses</li>
                        <li>Avoid manual configuration of IP address</li>
                    </ul>
                </li>
                <li>
                    Actors 
                    <ul>
                        <li>DHCP Client</li>
                        <li>DHCP Server</li>
                        <li>DHCP Relay</li>
                    </ul>
                </li>
                <li>
                    IP Addresses 
                    <ul>
                        <li>The DHCP server gives an IP address using a scope. A scope is a range of IP addresses and is determined by a start IP address and a end IP address.</li>
                        <li>The DHCP server assigns IP addresses as a lease</li>
                        <li>The DHCP server can reserve IP addresses for a special host so that the host have always the same IP address</li>
                        <li>The MAC address is used to identify a host</li>
                    </ul>
                </li>
                <li>
                    Technical Infos 
                    <ul>
                        <li>Uses the protocol UDP</li>
                        <li>Uses port 67 on the server</li>
                        <li>Uses port 68 on the client(host)</li>
                        <li>
                            Informations given by the DHCP server 
                            <ul>
                                <li>The subnet mask</li>
                                <li>IP of the default Gateway</li>
                                <li>IP of the DNS server</li>
                            </ul>
                        </li>
                        <li>
                            Messages used
                            <table className="basic-table">
                                <tr>
                                    <th className="basic-th dhcp-message-th">Message</th>
                                    <th className="basic-th">Use case</th>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPDISCOVER</td>
                                    <td className="basic-td">Sent when the client want to contact a DHCP server</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPOFFER</td>
                                    <td className="basic-td">Sent when the server propose an IP address to the client</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPREQUEST</td>
                                    <td className="basic-td">Sent when the client request the proposed IP address</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPACK</td>
                                    <td className="basic-td">Sent when the server confirm the allocation of the IP address</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPNACK</td>
                                    <td className="basic-td">Negative acknoledgement</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPDECLINE</td>
                                    <td className="basic-td">Sent when the client decline an IP address offer</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPRELEASE</td>
                                    <td className="basic-td">Sent when the client want to signal the server to release the IP address</td>
                                </tr>

                                <tr className="basic-tr">
                                    <td className="basic-td">DHCPINFORM</td>
                                    <td className="basic-td">Sent when the client want to inform the server that its IP address was set manually</td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </li>
            </ul>

            <h3 className="topic-subtitle">Scenarios</h3>
            <ul>
                <li>
                    A Host want to receive an IP address 
                    <ol>
                        <li>The client send a DHCPDISCOVER. The message is broadcasted in the network.</li>
                        <li>The server receive the DHCPDISCOVER message. The server reserve an IP address for the client. Then the server send a DHCPOFFER message to the client. The message contains the IP address that the server offer to the client.</li>
                        <li>The client receive the DHCPOFFER message. The client send a DHCPREQUEST message to the server.</li>
                        <li>The server receive the DHCPREQUEST message. The server assigns the address to the client. Then it send a DHCPACK message to the client.</li>
                    </ol>
                </li>
            </ul>
        </div>
    );
}

export default Dhcp