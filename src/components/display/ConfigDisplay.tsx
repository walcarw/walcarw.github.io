interface Config{
    config: string
}

function ConfigDisplay(props: Config){
    return(
        <div className="config-displayer">
            <pre>
                {props.config}
            </pre>
        </div>
    );
}

export default ConfigDisplay