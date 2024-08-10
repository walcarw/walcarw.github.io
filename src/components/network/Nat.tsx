function Nat(){
    return(
        <div className="topic-container">
            <h2 className="topic-title">NAT : Network Address Translation</h2>
            <h3 className="topic-subtitle">Overview</h3>
            <ul>
                <li>Goal : gives one IPv4 address to a local network. Devices in the local network have private IPv4 addresses and the router of the local network have one public IPv4 address.</li>
                <li>
                    Advantages
                    <ul>
                        <li>ISP need to give less IP addresses</li>
                        <li>Can change addresses of devices in local network without notifying the outside world</li>
                        <li>Can change ISP without changing addresses of devices in local network</li>
                        <li>Devices in local network are not visible from outside (security)</li>    
                    </ul>    
                </li>
            </ul>
        </div>
    );
}

export default Nat