import '../App.css';
import { FaRegUserCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Logo from "../Images/logo.png";

export function Header() {
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo" />
            <div className="leftSide">
                <CiMail className="icons" onClick={() => { window.location.pathname = "./mail" }} style={{ cursor: 'pointer' }} />
            </div>
            <div className="rightSide">
                <div className="text"><h2>Welcome!</h2></div>
                <div><FaRegUserCircle className="icons" /></div> 
            </div>
        </div>
    );
}