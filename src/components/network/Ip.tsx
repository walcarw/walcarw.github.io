import class_img from "../../assets/ip_class.png"
import subnet_ex_img from "../../assets/ip_subnetting.png"
import subnet_ex_mask_img from "../../assets/ip_subnet_mask.png"

function Ip(){
    return(
        <div className="topic-container">
            <h2 className="topic-title">IP : Internet Protocol</h2>
            <h3 className="topic-subtitle">IPv4</h3>
            <ul>
                <li>IPv4 addresses are encoded on 32 bits</li>
                <li>The dot-decimal notation of an IPv4 addresse is composed of 4 numbers separated by dots. Each number is between 0 and 255. Example : 192.168.1.2</li>
                <li>
                    An IPv4 address is composed of a network part and a host part. To determine the two parts, we need to add an additional information to the address. This can be done in two ways:
                    <ul>
                        <li>Using a number which is the number of bits used in the network part. This number is called the prefix lenght and the notation of the address with the prefix lenght is the classic notation followed by a "/" and the prefix lenght. An example of an address with the prefix lenght is in 192.168.0.2/16</li>
                        <li>Using a mask which is encoded on 32 bits like IPv4 addresses. If the number of bits used for the network parts is X, the mask is a sequence of X bits set to 1 followed by 32-X bits set to 0.</li>
                    </ul>
                </li>
            </ul>

            <h4 className="topic-subsubtitle">Classefull addressing</h4>
            <img src={class_img} className="max-width-img"></img>


            <h4 className="topic-subsubtitle">Subnetting</h4>
            <ul>
                <li>GOAL : break large network in smaller parts</li>
                <li>Some bits of the host part are borrowed</li>
            </ul>

            <h4>Special Subnets</h4>
            <table className="basic-table">
                <tr>
                    <th className="basic-th ip-subnets-th">Subnet</th>
                    <th className="basic-th ip-subnets-th">Addresses</th>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Private addresses of class A</td>
                    <td className="basic-td">10.0.0.0/8</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Private addresses of class B</td>
                    <td className="basic-td">172.16.0/12</td>
                </tr>

                <tr  className="basic-tr">
                    <td className="basic-td">Private addresses of class C</td>
                    <td className="basic-td">192.168.0.0/16</td>
                </tr>

                <tr  className="basic-tr">
                    <td className="basic-td">Localhost/Loopback addresses</td>
                    <td className="basic-td">127.0.0.0/8</td>
                </tr>

                <tr  className="basic-tr">
                    <td className="basic-td">Link-Local addresses</td>
                    <td className="basic-td">169.254.0.0/16</td>
                </tr>

                <tr  className="basic-tr">
                    <td className="basic-td">Multicast</td>
                    <td className="basic-td">224.0.0.0/8</td>
                </tr>

                <tr  className="basic-tr">
                    <td className="basic-td">Reserved</td>
                    <td className="basic-td">240.0.0.0/8</td>
                </tr>
            </table>

            <h4>Example</h4>
            <ul>
                <li> We want to create 6 subnet on the network 171.18.0.0. We need to borrow 3 bits from the host part</li>
            </ul>
            <img src={subnet_ex_img} className="max-width-img"></img>
            <ul>
                <li>
                    We obtain the following 8 subnets:
                    <ul>
                        <li>171.18.0.0/19</li>
                        <li>171.18.32.0/19</li>
                        <li>171.18.64.0/19</li>
                        <li>171.18.96.0/19</li>
                        <li>171.18.128.0/19</li>
                        <li>171.18.160.0/19</li>
                        <li>171.18.192.0/19</li>
                        <li>171.18.224.0/19</li>
                    </ul>
                </li>
                <li>
                    The subnet mask is
                </li>
            </ul>
            <img src={subnet_ex_mask_img} className="max-width-img"></img>


            <h4 className="topic-subsubtitle">IP Addressing</h4>
            <ul>
                <li>
                    Fixed-Length Subnet Mask (FLSM)
                    <ol>
                        <li>Identify the size of the largest subnet : n</li>
                        <li>Deduce the size of block : k such as 2k &gt;= n</li>
                        <li>Allocates</li>
                    </ol>
                </li>
                <li>
                    Variable-Length Subnet Mask (VLSM)
                    <ol>
                        <li>Identify block size (2k) for each subnet</li>
                        <li>Sort by descending order of size</li>
                        <li>Allocate</li>
                    </ol>
                </li>
            </ul>


            <h3 className="topic-subtitle">IPv6</h3>
            <ul>
                <li>IPv6 addresses are encoded on 128 bits</li>
                <li>The human notation of IPv6 addresses is composed of 8 blocks of 4 hexadecimals caracter. The blocks are separated by ":". Example : fe80:0000:0000:0000:5d89:e38f:78a0:0a90</li>
                <li>An IPv6 address is composed of a network part and a host part. The network part is only determined by the prefix lenght number. IPv6 addresses doesn't use a subnet mask.</li>
            </ul>

            <h4 className="topic-subsubtitle">Address Compression</h4>
            <ul>
                <li>Leading zeros each block can be omited. For example, the block 0042 will be noted 42. If a block contains only zeros, we need to keep one 0. Example : 0000 is converted to 0</li>
                <li>Consecutive blocks that contains only zeros can be replace by "::". For example, the address fe00:cafe:0:0:0:0:0:42 is converted to fe00:cafe::42. This can be only done once.</li>
            </ul>

            <h4 className="topic-subsubtitle">Special subnets</h4>
            <table className="basic-table">
                <tr>
                    <th className="basic-th ip-subnets-th">Subnet</th>
                    <th className="basic-th ip-subnets-th">Addresses</th>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Loopback address</td>
                    <td className="basic-td">::1/128</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Global unicast addresses</td>
                    <td className="basic-td">2000::/3</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Unique local addresses</td>
                    <td className="basic-td">fc00::/7</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Link local addresses</td>
                    <td className="basic-td">fe80::/10</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">Multicast addresses</td>
                    <td className="basic-td">ff00:/8</td>
                </tr>
            </table>
        </div>
    );
}

export default Ip