function Overview(){
    return(
        <div>
            <h2>Overview</h2>

            <h3>Types of computer Networks</h3>
            <table>
                <tr>
                    <th className="type-column">Type</th>
                    <th className="meaning-column">Meaning</th>
                    <th>Description</th>
                    <th className="coverage-column">Coverage</th>
                    <th className="tech-column">Technologies</th>
                </tr>

                <tr>
                    <td>PAN</td>
                    <td>Personal Area Network</td>
                    <td>A small network designed for connecting devices in an individual's workspace, typically covering a range around a single person. It's often used to link devices like smartphones, tablets, laptops, and wearable devices.</td>
                    <td>A room (1 - 10 meters)</td>
                    <td>USB</td>
                </tr>

                <tr>
                    <td>WPAN</td>
                    <td>Wireless Personal Area Network</td>
                    <td>A subset of PAN that uses wireless technologies to connect devices within a personal space.</td>
                    <td>A room (1 - 10 meters)</td>
                    <td>Bluetooth, Infrared, NFC</td>
                </tr>

                <tr>
                    <td>LAN</td>
                    <td>Local Area Network</td>
                    <td>A Local Area Network (LAN) connects computers and devices in a limited area such as a home, school, or office building. It enables the sharing of resources like printers, files, and internet connections among multiple users.</td>
                    <td>A building</td>
                    <td>Ethernet</td>
                </tr>

                <tr>
                    <td>WLAN</td>
                    <td>Wireless Local Area Network</td>
                    <td>A Wireless Local Area Network (WLAN) is a LAN that uses wireless technology to allow devices to connect to the network.</td>
                    <td>A building</td>
                    <td>Wi-Fi</td>
                </tr>

                <tr>
                    <td>VLAN</td>
                    <td>Virtual Local Area Network</td>
                    <td>A Virtual Local Area Network (VLAN) is a logical segmentation of a physical LAN into multiple distinct broadcast domains. It allows devices to be grouped together, regardless of their physical location, for better network management and security.</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>SAN</td>
                    <td>Storage Area Network</td>
                    <td>A Storage Area Network (SAN) is a specialized high-speed network that provides access to consolidated block-level storage.</td>
                    <td>A data center</td>
                    <td></td>
                </tr>

                <tr>
                    <td>CAN</td>
                    <td>Campus Area Network</td>
                    <td>A Campus Area Network (CAN) is a network that spans a college or university campus, corporate campus, or military base. It interconnects multiple local area networks (LANs) within a limited geographical area, usually serving buildings within a close proximity.</td>
                    <td>A campus</td>
                    <td></td>
                </tr>

                <tr>
                    <td>MAN</td>
                    <td>Metropolitan Area Network</td>
                    <td>A Metropolitan Area Network (MAN) is a network that covers a larger geographic area than a CAN but is smaller than a WAN. It connects multiple LANs within a metropolitan area, such as a city, and is typically used to connect multiple corporate offices, government buildings, or educational institutions within the same region.</td>
                    <td>A city</td>
                    <td></td>
                </tr>

                <tr>
                    <td>WAN</td>
                    <td>Wide Area Network</td>
                    <td>A Wide Area Network (WAN) is a network that covers a broad area, such as a country, continent, or even globally. It connects multiple LANs and MANs, allowing communication and resource sharing across large distances.</td>
                    <td>Country, Continents</td>
                    <td>Internet, Satellite communication</td>
                </tr>
            </table>
        </div>
    );
}

export default Overview