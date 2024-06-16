import '../App.css';
import Container from 'react-bootstrap/Container';
import { MdAssignment } from "react-icons/md";

export function NewBookings() {
    return (
        <div className="newBookings">
            <div className="dashboardTitle"> New Bookings </div>
            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Container fluid style={{
                    display: 'flex', flexDirection: 'row', backgroundColor: '#4d4d4d', height: '50px', width: '90%', borderRadius: '7px', marginBottom: '5px',
                    justifyContent: 'space-around', alignItems: 'center', 
                }}>
                    <MdAssignment style={{ height: '20px', width: '20px', color: '#E98A26', marginRight: '5px' }} />
                    <text style={{ marginRight: '5px', color: 'white' }}>Booking #54242</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>Toyota Yaris or similar</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>24.06.2024 03:15 PM</text>
                </Container>
                <Container fluid style={{
                    display: 'flex', flexDirection: 'row', backgroundColor: '#4d4d4d', height: '50px', width: '90%', borderRadius: '7px', marginBottom: '5px',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <MdAssignment style={{ height: '20px', width: '20px', color: '#E98A26', marginRight: '5px' }} />
                    <text style={{ marginRight: '5px', color: 'white' }}>Booking #54243</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>Toyota Yaris or similar</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>25.06.2024 01:00 PM</text>
                </Container>
                <Container fluid style={{
                    display: 'flex', flexDirection: 'row', backgroundColor: '#4d4d4d', height: '50px', width: '90%', borderRadius: '7px', marginBottom: '5px',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <MdAssignment style={{ height: '20px', width: '20px', color: '#E98A26', marginRight: '5px' }} />
                    <text style={{ marginRight: '5px', color: 'white' }}>Booking #54244</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>Toyota RAV4 or similar</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>19.06.2024 09:45 AM</text>
                </Container>
                <Container fluid style={{
                    display: 'flex', flexDirection: 'row', backgroundColor: '#4d4d4d', height: '50px', width: '90%', borderRadius: '7px', marginBottom: '5px',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <MdAssignment style={{ height: '20px', width: '20px', color: '#E98A26', marginRight: '5px' }} />
                    <text style={{ marginRight: '5px', color: 'white' }}>Booking #54245</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>Toyota Aygo or similar</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>22.06.2024 05:00 PM</text>
                </Container>
                <Container fluid style={{
                    display: 'flex', flexDirection: 'row', backgroundColor: '#4d4d4d', height: '50px', width: '90%', borderRadius: '7px', marginBottom: '5px',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <MdAssignment style={{ height: '20px', width: '20px', color: '#E98A26', marginRight: '5px' }} />
                    <text style={{ marginRight: '5px', color: 'white' }}>Booking #54246</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>Kia Rio or similar</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>21.06.2024 04:30 PM</text>
                </Container>
                <Container fluid style={{
                    display: 'flex', flexDirection: 'row', backgroundColor: '#4d4d4d', height: '50px', width: '90%', borderRadius: '7px', marginBottom: '5px',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <MdAssignment style={{ height: '20px', width: '20px', color: '#E98A26', marginRight: '5px' }} />
                    <text style={{ marginRight: '5px', color: 'white' }}>Booking #54246</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>Kia Rio or similar</text>
                    <text style={{ marginRight: '5px', color: 'white' }}>21.06.2024 04:30 PM</text>
                </Container>
                

            </Container>
        </div>
    )
}