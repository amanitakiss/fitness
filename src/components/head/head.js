import {Link} from "react-router-dom";
import "./head.css"

export default function Head(){
    return (
        <div className="head">
            <center>
                <img src="https://cdn.culture.ru/images/8cc4649d-ed0f-5230-bbfe-bc3e76a55c27" height="100px" width="100px"
                     align="center"/>
            </center>
            <center>
                <Link to='/news'> Новости</Link>
                <Link to='/contacts'> Контакты</Link>
                <Link to='/about'> О проекте</Link>
            </center>
        </div>
)
}