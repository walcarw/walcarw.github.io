import SubjectPage from "../SubjectPage";
import Go from "./Go";
import Java from "./Java";
import Javascript from "./Javascript";
import Python from "./Python";
import python_img from "../../assets/python.jpg"
import java_img from "../../assets/java.png"
import javascript_img from "../../assets/javascript.png"
import go_img from "../../assets/go.png"

function Languages(){

    const data = [
        {name: "Python", desc: "Notes about the Python programming language", img: python_img, component: <Python/>},
        {name: "Java", desc: "Notes about the Java programming language", img: java_img, component: <Java/>},
        {name: "Javascipt", desc: "Notes about the Javascript programming language", img: javascript_img, component: <Javascript/>},
        {name: "Go", desc: "Notes about the Go programming language", img: go_img, component: <Go/>},
    ]
    return(
        <div>
            <SubjectPage title="Programming Languages Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Languages