import SubjectPage from "../SubjectPage";
import Go from "./Go";
import Java from "./Java";
import Javascript from "./Javascript";
import Python from "./Python";
import python_img from "../../assets/python.png"
import java_img from "../../assets/java.png"
import javascript_img from "../../assets/javascript.png"
import go_img from "../../assets/go.png"

function Languages(){

    const data = [
        {name: "Python", img: python_img, component: <Python/>},
        {name: "Java", img: java_img, component: <Java/>},
        {name: "Javascipt", img: javascript_img, component: <Javascript/>},
        {name: "Go", img: go_img, component: <Go/>},
    ]
    return(
        <div>
            <SubjectPage title="Programming Languages Cheatsheets" subjects={data}/>
        </div>
    );
}

export default Languages