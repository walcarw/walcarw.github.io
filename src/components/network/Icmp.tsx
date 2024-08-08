function Icmp(){
    return(
        <div>
            <h2>ICMP : Internet Control Message Protocol</h2>
            <h3>Overview</h3>
            <ul>
                <li>Used by hosts and routers to communicate network-level informations</li>
                <li>Used to report errors and operational information</li>
                <li>Used as a diagnostic tool for network performance</li>
            </ul>

            <h3>Technical Information</h3>
            <h4>Types of control messages</h4>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th></th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>

                <tr>
                    <td>0</td>
                    <td>Echo reply</td>
                    <td></td>
                    <td>10</td>
                    <td>Router solitation</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Unassigned/Reserved</td>
                    <td></td>
                    <td>11</td>
                    <td>Time exceeded</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Unassigned/Reserved</td>
                    <td></td>
                    <td>12</td>
                    <td>Bad IP header</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Destination Unreachable</td>
                    <td></td>
                    <td>13</td>
                    <td>Timestamp</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Source Quench (Deprecated)</td>
                    <td></td>
                    <td>14</td>
                    <td>Timestamp reply</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Redirect message</td>
                    <td></td>
                    <td>15 - 41</td>
                    <td>Deprecated or reserved</td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>Alternate host address (Deprecated)</td>
                    <td></td>
                    <td>42</td>
                    <td>Extended echo request</td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>Unassigned/Reserved</td>
                    <td></td>
                    <td>43</td>
                    <td>Extended echo reply</td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>Echo request</td>
                    <td></td>
                    <td>44 - 255</td>
                    <td>Unassigned/Reserved</td>
                </tr>

                <tr>
                    <td>9</td>
                    <td>Router advertissement</td>
                </tr>
            </table>

            <h4>Notable control messages</h4>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Code</th>
                    <th>Description</th>
                </tr>

                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>Echo reply (used to ping)</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>0</td>
                    <td>Destination network unreachable</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>1</td>
                    <td>Destination host unreachable</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>2</td>
                    <td>Destination protocol unreachable</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>Destination port unreachable</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>Fragmentation needed</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>5</td>
                    <td>Source route failed</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>6</td>
                    <td>Destination network unknown</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>7</td>
                    <td>Destination host unkown</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>8</td>
                    <td>Source host isolated</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>9</td>
                    <td>Destination network access denied</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>10</td>
                    <td>Destination host access denied</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>0</td>
                    <td>Redirect datagram for the network</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>1</td>
                    <td>Redirect datagram for the host</td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>0</td>
                    <td>echo request (used to ping)</td>
                </tr>

                <tr>
                    <td>9</td>
                    <td>0</td>
                    <td>Router advertisement</td>
                </tr>

                <tr>
                    <td>10</td>
                    <td>0</td>
                    <td>Router discovery/selection/solicitation</td>
                </tr>

                <tr>
                    <td>11</td>
                    <td>0</td>
                    <td>TTL expired</td>
                </tr>
            </table>
        </div>
    );
}

export default Icmp