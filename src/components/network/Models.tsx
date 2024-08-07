import models_img from '../../assets/models.png'
import comm_img from '../../assets/layers_communication.png'
import head_img from '../../assets/headers.png'

function Models(){
    return(
        <div>
            <h2>TCP/IP and OSI Models</h2>
            <ul>
                <li>Network communication can be abstracted using a model composed of layers.</li>
                <li>Each layer correspond to a level of abstraction.</li>
                <li>A layer provides services to the upper layer and uses services from the lower layer.</li>
            </ul>
            <img src={models_img}></img>

            <table>
                <tr>
                    <th>Layer</th>
                    <th>Goal</th>
                    <th>Data Unit</th>
                    <th>Protocols</th>
                </tr>

                <tr>
                    <td>Layer 7 : Application</td>
                    <td>Communication between network applications</td>
                    <td>Data</td>
                    <td>
                        <ul>
                            <li>HTTP</li>
                            <li>FTP</li>
                            <li>SMTP</li>
                            <li>DNS</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Layer 6 : Presentation</td>
                    <td>The Presentation Layer is responsible for data translation, encryption, compression, and ensuring that data is in a readable format for the application layer.</td>
                    <td>Data</td>
                    <td>
                        <ul>
                            <li>SSL</li>
                            <li>TLS</li>
                            <li>JPEG</li>
                            <li>GIF</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Layer 5 : Session</td>
                    <td>The Session Layer is responsible for establishing, maintaining, and terminating connections between two applications.</td>
                    <td>Data</td>
                    <td>
                        <ul>
                            <li>L2TP</li>
                            <li>RTCP</li>
                            <li>SOCKS</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Layer 4 : Transport</td>
                    <td>The transport layer is responsible for end-to-end communication, ensuring complete data transfer and integrity. It manages error detection and correction, flow control, and segmentation and reassembly of data.</td>
                    <td>Segment (TCP) / Datagram (UDP)</td>
                    <td>
                        <ul>
                            <li>TCP</li>
                            <li>UDP</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Layer 3 : Network</td>
                    <td>The Network Layer is responsible for packet forwarding, routing, and logical addressing to ensure data reaches its intended destination across complex networks.</td>
                    <td>Packet</td>
                    <td>
                        <ul>
                            <li>IP</li>
                            <li>ICMP</li>
                            <li>MPLS</li>
                            <li>ARP</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Layer 2 : Data Link</td>
                    <td>The data link layer is responsible for node-to-node data transfer and error detection/correction. It ensures that data sent from the physical layer is free of transmission errors when sent to the network layer.</td>
                    <td>Frame</td>
                    <td>
                        <ul>
                            <li>Ethernet</li>
                            <li>Wi-Fi</li>
                            <li>PPP</li>
                            <li>MAC</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Layer 1 : Physical</td>
                    <td>The physical layer is responsible for the transmission and reception of raw bit streams over a physical medium. It defines the hardware specifications for devices and manages the physical connection between devices.</td>
                    <td>Bit</td>
                    <td>
                        <ul>
                            <li>Ethernet</li>
                            <li>USB</li>
                            <li>Fiber Optics</li>
                        </ul>
                    </td>
                </tr>
            </table>

            <img src={comm_img}></img>

            <img src={head_img}></img>



        </div>
    );
}

export default Models