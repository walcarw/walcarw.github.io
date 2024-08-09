function Samba(){
    return(
        <div>
            <h2>Samba CheatSheet</h2>
            <h3>Overview</h3>
            <p>
                Samba is a linux software that allows to share files with Windows and macOS computer.
            </p>

            <h3>Installation (Ubuntu)</h3>
            <ol>
                <li>To install Samba, use the command 
                    <div className="command-line">$ sudo apt install samba</div>
                </li>
                <li>Create the directory that will contain the files to be shared:
                    <div className="command-line">$ mkdir /home/&lt;username&gt;/sambashare/</div>
                </li>
                <li>
                    Edit the samba configuration file located in 
                    <div className="command-line">/etc/samba/smb.conf</div>
                    Add the following to the file
                    <div className="code">
                        <p>
                            [sambashare]<br/>
                            &emsp;comment = Samba on Ubuntu<br/>
                            &emsp;path = home/&lt;username&gt;/sambashare<br/>
                            &emsp;read only = no <br/>
                            &emsp;browsable = yes.
                        </p>
                    </div>
                </li>
                <li>Restart the Samba service
                    <div className="command-line">$ sudo service smbd restart</div>
                </li>
                <li>Update firewall rule
                    <div className="command-line">$ sudo ufw allow samba</div>
                </li>
                <li>Set a password for users
                    <div className="command-line">$ sudo smbpasswd -a &lt;username&gt;</div>
                </li>
                <li>
                    Access the folder
                    <ul>
                        <li>
                            Linux
                            <div className="command-line">smb://&lt;ip-address&gt;/sambashare</div>
                        </li>
                        <li>
                            macOS
                            <div className="command-line">smb://&lt;ip-address&gt;/sambashare</div>
                        </li>
                        <li>
                            Windows
                            <div className="command-line">\\&lt;ip-address&gt;\sambashare</div>
                        </li>
                    </ul>
                </li>
            </ol>

            <h3>Parameters</h3>
            <table>
                <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                    <th>Description</th>
                </tr>

                <tr>
                    <td>comment</td>
                    <td>text</td>
                    <td>A brief description of the shared folder</td>
                </tr>

                <tr>
                    <td>path</td>
                    <td>path to a folder</td>
                    <td>The path to shared directory</td>
                </tr>

                <tr>
                    <td>read only</td>
                    <td>yes/no</td>
                    <td>The permission to do modification in the folder</td>
                </tr>

                <tr>
                    <td>browsable</td>
                    <td>yes/no</td>
                    <td></td>
                </tr>

            </table>
        </div>
    );
}

export default Samba