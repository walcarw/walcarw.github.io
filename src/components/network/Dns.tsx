function Dns(){
    return(
        <div className="topic-container">
            <h2 className="topic-title">DNS : Domain Name System</h2>
            <h3 className="topic-subtitle" >Overview</h3>
            <ul>
                <li>GOAL : Get the IP address from a hostname</li>
                <li>DNS is a hierachical and distributed database</li>
                <li>An entry in the DNS database is called Ressource Record</li>
                <li>The format of a Ressource Record is (domain name, value, type, time-to-live)</li>
                <li>
                    Types of Ressource Record 
                    <table className="basic-table">
                        <tr>
                            <th className="basic-th dns-type-th">Type</th>
                            <th className="basic-th dns-desc-th">Description</th>
                            <th className="basic-th">Name</th>
                            <th className="basic-th">Value</th>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">SOA</td>
                            <td className="basic-td">Start of authority</td>
                            <td className="basic-td">Domain name</td>
                            <td className="basic-td">Zone parameters</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">A</td>
                            <td className="basic-td">Address</td>
                            <td className="basic-td">Hostname</td>
                            <td className="basic-td">IPv4 address</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">AAAA</td>
                            <td className="basic-td">Address</td>
                            <td className="basic-td">Hostname</td>
                            <td className="basic-td">IPv6 address</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">MX</td>
                            <td className="basic-td">Mail eXchange</td>
                            <td className="basic-td">Domain name</td>
                            <td className="basic-td">Priority + hostname</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">NS</td>
                            <td className="basic-td">Name server</td>
                            <td className="basic-td">Domain name</td>
                            <td className="basic-td">Hostname of authoritative name server</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">CNAME</td>
                            <td className="basic-td">Canonical name</td>
                            <td className="basic-td">Hostname (alias)</td>
                            <td className="basic-td">Primary hostname</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">HINFO</td>
                            <td className="basic-td">Host information</td>
                            <td className="basic-td">Hostname</td>
                            <td className="basic-td">CPU, OS</td>
                        </tr>

                        <tr className="basic-tr">
                            <td className="basic-td">TXT</td>
                            <td className="basic-td">Text</td>
                            <td className="basic-td">Domain name</td>
                            <td className="basic-td">Descriptive text</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
    );
}

export default Dns