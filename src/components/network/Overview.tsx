function Overview(){
    return(
        <div className="topic-container">
            <h2 className="topic-title">Overview</h2>

            <h3 className="topic-subtitle">Types of computer Networks</h3>
            <table className="basic-table">
                <tr>
                    <th className="basic-th overview-type-th">Type</th>
                    <th className="basic-th">Meaning</th>
                    <th className="basic-th">Description</th>
                    <th className="basic-th">Coverage</th>
                    <th className="basic-th">Technologies</th>
                </tr>
                <tr className="basic-tr">
                    <td className="basic-td">PAN</td>
                    <td className="basic-td">Personal Area Network</td>
                    <td className="basic-td">A small network designed for connecting devices in an individual's workspace, typically covering a range around a single person. It's often used to link devices like smartphones, tablets, laptops, and wearable devices.</td>
                    <td className="basic-td">A room (1 - 10 meters)</td>
                    <td className="basic-td">USB</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">WPAN</td>
                    <td className="basic-td">Wireless Personal Area Network</td>
                    <td className="basic-td">A subset of PAN that uses wireless technologies to connect devices within a personal space.</td>
                    <td className="basic-td">A room (1 - 10 meters)</td>
                    <td className="basic-td">Bluetooth, Infrared, NFC</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">LAN</td>
                    <td className="basic-td">Local Area Network</td>
                    <td className="basic-td">A Local Area Network (LAN) connects computers and devices in a limited area such as a home, school, or office building. It enables the sharing of resources like printers, files, and internet connections among multiple users.</td>
                    <td className="basic-td">A building</td>
                    <td className="basic-td">Ethernet</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">WLAN</td>
                    <td className="basic-td">Wireless Local Area Network</td>
                    <td className="basic-td">A Wireless Local Area Network (WLAN) is a LAN that uses wireless technology to allow devices to connect to the network.</td>
                    <td className="basic-td">A building</td>
                    <td className="basic-td">Wi-Fi</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td" >VLAN</td>
                    <td className="basic-td">Virtual Local Area Network</td>
                    <td className="basic-td">A Virtual Local Area Network (VLAN) is a logical segmentation of a physical LAN into multiple distinct broadcast domains. It allows devices to be grouped together, regardless of their physical location, for better network management and security.</td>
                    <td className="basic-td"></td>
                    <td className="basic-td"></td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">SAN</td>
                    <td className="basic-td">Storage Area Network</td>
                    <td className="basic-td">A Storage Area Network (SAN) is a specialized high-speed network that provides access to consolidated block-level storage.</td>
                    <td className="basic-td">A data center</td>
                    <td className="basic-td"></td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">CAN</td>
                    <td className="basic-td">Campus Area Network</td>
                    <td className="basic-td">A Campus Area Network (CAN) is a network that spans a college or university campus, corporate campus, or military base. It interconnects multiple local area networks (LANs) within a limited geographical area, usually serving buildings within a close proximity.</td>
                    <td className="basic-td">A campus</td>
                    <td className="basic-td"></td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">MAN</td>
                    <td className="basic-td">Metropolitan Area Network</td>
                    <td className="basic-td">A Metropolitan Area Network (MAN) is a network that covers a larger geographic area than a CAN but is smaller than a WAN. It connects multiple LANs within a metropolitan area, such as a city, and is typically used to connect multiple corporate offices, government buildings, or educational institutions within the same region.</td>
                    <td className="basic-td">A city</td>
                    <td className="basic-td"></td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">WAN</td>
                    <td className="basic-td">Wide Area Network</td>
                    <td className="basic-td">A Wide Area Network (WAN) is a network that covers a broad area, such as a country, continent, or even globally. It connects multiple LANs and MANs, allowing communication and resource sharing across large distances.</td>
                    <td className="basic-td">Country, Continents</td>
                    <td className="basic-td" >Internet, Satellite communication</td>
                </tr>
            </table>
        </div>
    );
}

export default Overview