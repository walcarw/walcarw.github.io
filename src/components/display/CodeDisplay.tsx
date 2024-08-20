
interface Code{
    code: string
}

const keywords = ["const","var"]
const datatypes = ["int", "float32"]

function isPlaceHolder(word: string): boolean{
    return word.charAt(0) === "<" && word.charAt(word.length-1) === ">";
}

function CodeDisplay(props: Code){
    return(
        <div className="code-displayer">
            {
                props.code.split("\n")
                .map(line => <div>
                    {line.split(" ").map(word => {
                        if (keywords.includes(word)){return <span className="keyword">{word + " "}</span>}
                        else if (datatypes.includes(word)){return <span className="datatype">{word + " "}</span>}
                        else if (isPlaceHolder(word)){return <span className="placeholder">{word + " "}</span>}
                        return <span>{word + " "}</span>
                    })}
                </div>)
            }
        </div>
    );
}

export default CodeDisplay