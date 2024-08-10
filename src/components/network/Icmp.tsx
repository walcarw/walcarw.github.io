function Icmp(){
    return(
        <div className="topic-container">
            <h2 className="topic-title" >ICMP : Internet Control Message Protocol</h2>
            <h3 className="topic-subtitle">Overview</h3>
            <ul>
                <li>Used by hosts and routers to communicate network-level informations</li>
                <li>Used to report errors and operational information</li>
                <li>Used as a diagnostic tool for network performance</li>
            </ul>

            <h3 className="topic-subtitle">Technical Information</h3>
            <h4>Types of control messages</h4>
            <table className="basic-table">
                <tr>
                    <th className="basic-th icmp-type-th">Type</th>
                    <th className="basic-th icmp-desc-th">Description</th>
                    <th className="empty-th"></th>
                    <th className="basic-th icmp-type-th">Type</th>
                    <th className="basic-th icmp-desc-th">Description</th>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">0</td>
                    <td className="basic-td">Echo reply</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">10</td>
                    <td className="basic-td">Router solitation</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">1</td>
                    <td className="basic-td">Unassigned/Reserved</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">11</td>
                    <td className="basic-td">Time exceeded</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">2</td>
                    <td className="basic-td">Unassigned/Reserved</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">12</td>
                    <td className="basic-td">Bad IP header</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">Destination Unreachable</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">13</td>
                    <td className="basic-td">Timestamp</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">4</td>
                    <td className="basic-td">Source Quench (Deprecated)</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">14</td>
                    <td className="basic-td">Timestamp reply</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">5</td>
                    <td className="basic-td">Redirect message</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">15 - 41</td>
                    <td className="basic-td">Deprecated or reserved</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">6</td>
                    <td className="basic-td">Alternate host address (Deprecated)</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">42</td>
                    <td className="basic-td">Extended echo request</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">7</td>
                    <td className="basic-td">Unassigned/Reserved</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">43</td>
                    <td className="basic-td">Extended echo reply</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">8</td>
                    <td className="basic-td">Echo request</td>
                    <td className="empty-td"></td>
                    <td className="basic-td">44 - 255</td>
                    <td className="basic-td">Unassigned/Reserved</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">9</td>
                    <td className="basic-td">Router advertissement</td>
                    <td className="empty-td"></td>
                    <td className="empty-td"></td>
                    <td className="empty-td"></td>
                </tr>
            </table>

            <h4>Notable control messages</h4>
            <table className="basic-table">
                <tr>
                    <th className="basic-th icmp-type-th">Type</th>
                    <th className="basic-th icmp-type-th">Code</th>
                    <th className="basic-th icmp-desc-th">Description</th>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">0</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">Echo reply (used to ping)</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">Destination network unreachable</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">1</td>
                    <td className="basic-td">Destination host unreachable</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">2</td>
                    <td className="basic-td">Destination protocol unreachable</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">3</td>
                    <td className="basic-td">Destination port unreachable</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">4</td>
                    <td className="basic-td">Fragmentation needed</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">5</td>
                    <td className="basic-td">Source route failed</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">6</td>
                    <td className="basic-td">Destination network unknown</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">7</td>
                    <td className="basic-td">Destination host unkown</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">8</td>
                    <td className="basic-td">Source host isolated</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">9</td>
                    <td className="basic-td">Destination network access denied</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">3</td>
                    <td className="basic-td">10</td>
                    <td className="basic-td">Destination host access denied</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">5</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">Redirect datagram for the network</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">5</td>
                    <td className="basic-td">1</td>
                    <td className="basic-td">Redirect datagram for the host</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">8</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">echo request (used to ping)</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">9</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">Router advertisement</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">10</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">Router discovery/selection/solicitation</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">11</td>
                    <td className="basic-td">0</td>
                    <td className="basic-td">TTL expired</td>
                </tr>
            </table>
        </div>
    );
}

export default Icmp