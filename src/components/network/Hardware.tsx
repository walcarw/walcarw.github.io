function Hardware(){
    return(
        <div>
            <h2>Network Hardware</h2>
            <table>
                <tr>
                    <th>Hardware</th>
                    <th>Goal</th>
                    <th>Description</th>
                    <th>Layer</th>
                    <th>Advantages/Disadvantages</th>
                </tr>

                <tr>
                    <td>Bridge</td>
                    <td>Connect two network segments</td>
                    <td>A bridge is a network device that connects and filters traffic between two network segments that use the same protocol. It operates by inspecting incoming traffic and making forwarding decisions based on the destination MAC addresses. Bridges can be used to extend a network by connecting different parts, segment traffic, and reduce collision domains.</td>
                    <td>Data Link (Layer 2)</td>
                    <td>
                        <h4>Advantages</h4>
                        <ul>
                            <li>Traffic Filtering</li>
                            <li>Collision Domain Reduction</li>
                            <li>Bandwidth Utilization</li>
                        </ul>
                        <h4>Disadvantages</h4>
                        <ul>
                            <li>Latency</li>
                            <li>Don't filter broadcast traffic</li>
                            <li>The two network segments needs to use the same protocol</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Hub</td>
                    <td>Connect devices together</td>
                    <td>A hub is a basic networking device that connects multiple Ethernet devices, providing a central point for network communications. It receives incoming data packets and broadcasts them to all connected devices. Hubs are simple devices that do not filter or manage traffic, and they operate in a half-duplex mode.</td>
                    <td>Physical (Layer 1)</td>
                    <td>
                        <h4>Advantages</h4>
                        <ul>
                            <li>Cheap</li>
                            <li>Plug-and-play</li>
                        </ul>
                        <h4>Disadvantages</h4>
                        <ul>
                            <li>Large Collision Domain</li>
                            <li>Inefficient Bandwidth Use</li>
                            <li>No traffic management</li>
                            <li>Half-duplex</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Repeater</td>
                    <td>Regenerate and amplify a signal</td>
                    <td>A repeater is a network device used to regenerate and amplify signals in a network. It receives a signal, cleans it of noise, amplifies it, and retransmits it, allowing the signal to cover longer distances without degradation.</td>
                    <td>Physical (Layer 1)</td>
                    <td>
                        <h4>Advantages</h4>
                        <ul>
                            <li>Extended Network Range</li>
                            <li>Signal Strength</li>
                        </ul>
                        <h4>Disadvantages</h4>
                        <ul>
                            <li>Only amplify the signal</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Router</td>
                    <td>Connect networks together</td>
                    <td>A router is a networking device that connects multiple computer networks and routes data packets between them. Its primary function is to forward data from one network to another, ensuring that information reaches its intended destination.</td>
                    <td>Network (Layer 3)</td>
                    <td>
                        <h4>Advantages</h4>
                        <ul>
                            <li>Traffic Management</li>
                            <li>Network Segmentation</li>
                        </ul>
                        <h4>Disadvantages</h4>
                        <ul>
                            <li>Cost</li>
                            <li>Latency</li>
                            <li>Complex Configuration</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Switch</td>
                    <td>Connect devices together</td>
                    <td>A switch is a networking device that connects devices within a LAN (Local Area Network). It uses MAC addresses to forward data only to the intended recipient, rather than broadcasting it to all connected devices. This process is known as switching. Unlike hubs, which simply repeat incoming signals to all ports, switches intelligently direct data to specific devices, improving the efficiency and security of data transfers within a network.</td>
                    <td>Data Link (Layer 2)</td>
                    <td>
                        <h4>Advantages</h4>
                        <ul>
                            <li>Efficient Data Transfert</li>
                            <li>Scalability</li>
                            <li>Each port has its own collision domain</li>
                            <li>Automatically learns MAC addresses</li>
                            <li>Full duplex</li>
                        </ul>
                        <h4>Disadvantages</h4>
                        <ul>
                            <li>Cost</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Hardware