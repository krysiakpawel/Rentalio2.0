import '../App.css';
import { SidebarData } from "./SidebarData";

export function Sidebar() {
    return (
            <div className="sidebar">
                <ul className="sidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li key={key}
                                className="row"
                                onClick={() => { window.location.pathname = val.link }}>
                                {" "}
                                <div id="icon">{val.icon}</div>{""}
                                <div id="title">{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
    )
}


