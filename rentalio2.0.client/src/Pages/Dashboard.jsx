import { DeliveryOverview } from "../Components/DeliveryOverview.jsx";
import { FleetUtilizationDiag } from "../Components/FleetUtilizationDiag.jsx";
import { DashboardShortcuts } from "../Components/DashboardShortcuts.jsx";
import { LiveFeed } from "../Components/LiveFeed.jsx";
import { SearchBooking } from "../Components/SearchBooking.jsx";
import { CheckAvailability } from "../Components/CheckAvailability.jsx";
import { NewBookings } from "../Components/NewBookings.jsx";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export const Dashboard = () => {

    return (
        <Container fluid className="dashboard">
            
            <Col>
                <Row><DeliveryOverview /> </Row>
                <Row><FleetUtilizationDiag /> </Row> 
            </Col>
            <Col>
                <Row><DashboardShortcuts /></Row>
                <Row><LiveFeed /></Row>
            </Col>
            <Col>
                <Row><SearchBooking /></Row>
                <Row><CheckAvailability /></Row>
                <Row><NewBookings/></Row>
            </Col>
        </Container>
    )
}