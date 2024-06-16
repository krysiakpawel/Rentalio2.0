import '../App.css';
import { Sidebar } from "../Components/Sidebar.jsx";
import { Header } from "../Components/Header.jsx";
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
    return (
        <div className="layout">
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
}


