import '../App.css';
import { MdAssignmentAdd } from "react-icons/md";
import { FaWrench } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';


export function DashboardShortcuts() {
    return (
        <div className="dashboardShortcuts">
            <div className="dashboardTitle"> Shortcuts</div>
            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} >
                <div className="shortcutItem" onClick={() => { window.location.pathname = "./AddBooking" }}>
                    <MdAssignmentAdd className="shortcutIcon" />
                    <text style={{ fontSize: '14px', fontFamily: 'Corbel', fontWeight: 'bold' }}>Add Booking</text>
                </div>
                <div className="shortcutItem" onClick={() => { window.location.pathname = "./addIssue" }}>
                    <FaWrench className="shortcutIcon" />
                    <text style={{ fontSize: '14px', fontFamily: 'Corbel', fontWeight: 'bold' }}>Report Issue</text>
                </div>
            </Container>
        </div>
    )
}


