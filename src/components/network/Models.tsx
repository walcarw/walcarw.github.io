import models_img from '../../assets/models.png'
import comm_img from '../../assets/layers_communication.png'
import head_img from '../../assets/headers.png'

function Models(){
    return(
        <div className="topic-container">
            <h2 className="topic-title">TCP/IP and OSI Models</h2>
            <h3 className="topic-subtitle">Overview</h3>
            <ul>
                <li>Network communication can be abstracted using a model composed of layers.</li>
                <li>Each layer correspond to a level of abstraction.</li>
                <li>A layer provides services to the upper layer and uses services from the lower layer.</li>
            </ul>
            <img src={models_img}></img>

            <h3 className='topic-subtitle'>Description</h3>
            <table className='basic-table'>
                <tr>
                    <th className='basic-th models-layer-th'>Layer</th>
                    <th className='basic-th'>Goal</th>
                    <th className='basic-th'>Data Unit</th>
                    <th className='basic-th models-protocols-th'>Protocols</th>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 7 : Application</td>
                    <td className='basic-td'>Communication between network applications</td>
                    <td className='basic-td'>Data</td>
                    <td className='basic-td'>
                        <ul>
                            <li>HTTP</li>
                            <li>FTP</li>
                            <li>SMTP</li>
                            <li>DNS</li>
                        </ul>
                    </td>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 6 : Presentation</td>
                    <td className='basic-td'>The Presentation Layer is responsible for data translation, encryption, compression, and ensuring that data is in a readable format for the application layer.</td>
                    <td className='basic-td'>Data</td>
                    <td className='basic-td'>
                        <ul>
                            <li>SSL</li>
                            <li>TLS</li>
                            <li>JPEG</li>
                            <li>GIF</li>
                        </ul>
                    </td>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 5 : Session</td>
                    <td className='basic-td'>The Session Layer is responsible for establishing, maintaining, and terminating connections between two applications.</td>
                    <td className='basic-td'>Data</td>
                    <td className='basic-td'>
                        <ul>
                            <li>L2TP</li>
                            <li>RTCP</li>
                            <li>SOCKS</li>
                        </ul>
                    </td>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 4 : Transport</td>
                    <td className='basic-td'>The transport layer is responsible for end-to-end communication, ensuring complete data transfer and integrity. It manages error detection and correction, flow control, and segmentation and reassembly of data.</td>
                    <td className='basic-td'>Segment (TCP) / Datagram (UDP)</td>
                    <td className='basic-td'>
                        <ul>
                            <li>TCP</li>
                            <li>UDP</li>
                        </ul>
                    </td>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 3 : Network</td>
                    <td className='basic-td'>The Network Layer is responsible for packet forwarding, routing, and logical addressing to ensure data reaches its intended destination across complex networks.</td>
                    <td className='basic-td'>Packet</td>
                    <td className='basic-td'>
                        <ul>
                            <li>IP</li>
                            <li>ICMP</li>
                            <li>MPLS</li>
                            <li>ARP</li>
                        </ul>
                    </td>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 2 : Data Link</td>
                    <td className='basic-td'>The data link layer is responsible for node-to-node data transfer and error detection/correction. It ensures that data sent from the physical layer is free of transmission errors when sent to the network layer.</td>
                    <td className='basic-td'>Frame</td>
                    <td className='basic-td'>
                        <ul>
                            <li>Ethernet</li>
                            <li>Wi-Fi</li>
                            <li>PPP</li>
                            <li>MAC</li>
                        </ul>
                    </td>
                </tr>

                <tr className='basic-tr'>
                    <td className='basic-td'>Layer 1 : Physical</td>
                    <td className='basic-td'>The physical layer is responsible for the transmission and reception of raw bit streams over a physical medium. It defines the hardware specifications for devices and manages the physical connection between devices.</td>
                    <td className='basic-td'>Bit</td>
                    <td className='basic-td' >
                        <ul>
                            <li>Ethernet</li>
                            <li>USB</li>
                            <li>Fiber Optics</li>
                        </ul>
                    </td>
                </tr>
            </table>



            <h3 className='topic-subtitle'>Communications</h3>
            <img src={comm_img} className='max-width-img'></img>

            <h3 className='topic-subtitle'>Encapsulation</h3>
            <img src={head_img} className='max-width-img'></img>



        </div>
    );
}

export default Models