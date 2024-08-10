import CommandDisplay from "../display/CommandDisplay";
import ConfigDisplay from "../display/ConfigDisplay";

function Samba(){
    return(
        <div className="topic-container">
            <h2 className="topic-title">Samba CheatSheet</h2>
            <h3 className="topic-subtitle">Overview</h3>
            <p>
                Samba is a linux software that allows to share files with Windows and macOS computer.
            </p>

            <h3 className="topic-subtitle">Installation (Ubuntu)</h3>
            <ol>
                <li>
                    To install Samba, use the command
                    <CommandDisplay command="sudo apt install samba"/>
                </li>
                <li>
                    Create the directory that will contain the files to be shared:
                    <CommandDisplay command="mkdir /home/<username>/sambashare/"/>
                </li>
                <li>
                    Edit the samba configuration file
                    <CommandDisplay command="sudo nano /etc/samba/smb.conf"/>
                    Add the following to the file
                    <ConfigDisplay config="[sambashare]
   comment = Samba on Ubuntu
   path = home/<username>/sambashare
   read only = no
   browsable = yes"/>
                </li>
                <li>Restart the Samba service
                    <CommandDisplay command="sudo service smbd restart"/>
                </li>
                <li>Update firewall rule
                    <CommandDisplay command="sudo ufw allow samba"/>
                </li>
                <li>Set a password for users
                    <CommandDisplay command="sudo smbpasswd -a <username>"/>
                </li>
                <li>
                    Access the folder
                    <ul>
                        <li>
                            Linux & macOS
                            <ConfigDisplay config="smb://<ip-address>/sambashare"/>
                        </li>
                        <li>
                            Windows
                            <ConfigDisplay config="\\<ip-address>\sambashare"/>
                        </li>
                    </ul>
                </li>
            </ol>

            <h3 className="topic-subtitle">Parameters</h3>
            <table className="basic-table">
                <tr>
                    <th className="basic-th samba-th">Parameter</th>
                    <th className="basic-th samba-th">Value</th>
                    <th className="basic-th">Description</th>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">comment</td>
                    <td className="basic-td">text</td>
                    <td className="basic-td">A brief description of the shared folder</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">path</td>
                    <td className="basic-td">path to a folder</td>
                    <td className="basic-td">The path to shared directory</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">read only</td>
                    <td className="basic-td">yes/no</td>
                    <td className="basic-td">The permission to do modification in the folder</td>
                </tr>

                <tr className="basic-tr">
                    <td className="basic-td">browsable</td>
                    <td className="basic-td">yes/no</td>
                    <td className="basic-td"></td>
                </tr>

            </table>
        </div>
    );
}

export default Samba