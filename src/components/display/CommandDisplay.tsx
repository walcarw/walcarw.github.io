interface Command{
    command: string
}

function CommandDisplay(props: Command){
    return(
        <div className="command-displayer">
            <pre>
                $ {props.command}
            </pre> 
        </div>
    );
}

export default CommandDisplay