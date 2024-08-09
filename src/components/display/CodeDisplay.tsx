
interface Code{
    code: string
}

function CodeDisplay(props: Code){
    return(
        <div className="code-displayer">
            <pre>
                {props.code}
            </pre>
        </div>
    );
}

export default CodeDisplay