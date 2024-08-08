function Dns(){
    return(
        <div>
            <h2>DNS : Domain Name System</h2>
            <h3>Overview</h3>
            <ul>
                <li>GOAL : Get the IP address from a hostname</li>
                <li>DNS is a hierachical and distributed database</li>
                <li>An entry in the DNS database is called Ressource Record</li>
                <li>The format of a Ressource Record is (domain name, value, type, time-to-live)</li>
                <li>
                    Types of Ressource Record 
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>

                        <tr>
                            <td>SOA</td>
                            <td>Start of authority</td>
                            <td>Domain name</td>
                            <td>Zone parameters</td>
                        </tr>

                        <tr>
                            <td>A</td>
                            <td>Address</td>
                            <td>Hostname</td>
                            <td>IPv4 address</td>
                        </tr>

                        <tr>
                            <td>AAAA</td>
                            <td>Address</td>
                            <td>Hostname</td>
                            <td>IPv6 address</td>
                        </tr>

                        <tr>
                            <td>MX</td>
                            <td>Mail eXchange</td>
                            <td>Domain name</td>
                            <td>Priority + hostname</td>
                        </tr>

                        <tr>
                            <td>NS</td>
                            <td>Name server</td>
                            <td>Domain name</td>
                            <td>Hostname of authoritative name server</td>
                        </tr>

                        <tr>
                            <td>CNAME</td>
                            <td>Canonical name</td>
                            <td>Hostname (alias)</td>
                            <td>Primary hostname</td>
                        </tr>

                        <tr>
                            <td>HINFO</td>
                            <td>Host information</td>
                            <td>Hostname</td>
                            <td>CPU, OS</td>
                        </tr>

                        <tr>
                            <td>TXT</td>
                            <td>Text</td>
                            <td>Domain name</td>
                            <td>Descriptive text</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
    );
}

export default Dns