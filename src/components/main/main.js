import "./main.css"
import {Section} from "./mcomps/section/section";
import {Article} from "./mcomps/article/article";
import {Aside} from "./mcomps/aside/aside";
export default function Main(){
    return (
        <div className="main">
            <Section></Section>
            <div className="divider1"></div>
            <Article></Article>
            <div className="divider2"></div>
            <Aside></Aside>
        </div>
    )
}