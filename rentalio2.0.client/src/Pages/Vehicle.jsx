import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { PiEngineFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { DropdownClass } from '../Components/DropdownClass';

export const Vehicle = () => {
    return (
        <div className="vehicle">
            <Container fluid>
                <Container className="dataSection">
                    <Container>
                        <Container style={{ width: '40vw', height: '30vh', backgroundColor: '#2d2d2d', borderRadius: '5px', margin: '5px', display: 'flex', flexDirection: 'column' }}>
                            <caption style={{ fontSize: '20px', color: '#e98a26', margin: '7px' }}><MdAssignment style={{ height: '20px', width: '20px' }} /> General Info</caption>
                            <Container style={{ display: 'flex', flexDirection: 'column', padding: '25px', paddingTop: '0px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Class</Col>
                                    <Col><DropdownClass /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Make</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Hyundai" style={{ marginLeft: 'auto', borderRadius: '4px' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Model</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="i10" style={{ marginLeft: 'auto', borderRadius: '4px' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Mileage</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="25419" style={{ marginLeft: 'auto', color: 'black' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>License Number</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="DHT02" style={{ marginLeft: 'auto', borderRadius: '4px' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>VIN</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="KM8J3CA46KU720643" style={{ marginLeft: 'auto', borderRadius: '4px' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Model Year</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="2022" style={{ marginLeft: 'auto', borderRadius: '4px' }} /></Col>
                                </Row>
                            </Container>
                        </Container>
                        <Container style={{ width: '40vw', height: '30vh', backgroundColor: '#2d2d2d', borderRadius: '5px', margin: '5px', display: 'flex', flexDirection: 'column' }}>
                            <caption style={{ fontSize: '20px', color: '#e98a26', margin: '7px' }}><PiEngineFill style={{ height: '20px', width: '20px' }} /> Technical Data</caption>
                            <Container style={{display:'flex', flexDirection: 'column', padding: '25px', paddingTop: '0px'}}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Engine type</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Gasoline" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Engine displacement</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="1456" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>kW</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="75" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Cylinders</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="4" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Transmission</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Automatic" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Drive</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="FWD" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                            </Container>
                        </Container>
                    </Container>
                    <Container>
                        <Container style={{ width: '40vw', height: '30vh', backgroundColor: '#2d2d2d', borderRadius: '5px', margin: '5px', display: 'flex', flexDirection: 'column' }}>
                            <caption style={{ fontSize: '20px', color: '#e98a26', margin: '7px' }}><FaCarAlt style={{ height: '20px', width: '20px' }} /> Vehicle Information</caption>
                            <Container style={{ display: 'flex', flexDirection: 'column', padding: '25px', paddingTop: '0px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Body type</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Hatchback" style={{ marginLeft: 'auto', color: 'black' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Color</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Silver" style={{ marginLeft: 'auto', color: 'black' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Configuration</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Style" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Status</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Rented" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>First registration</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="05-04-2022" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>  
                            </Container>
                        </Container>
                        <Container style={{ width: '40vw', height: '30vh', backgroundColor: '#2d2d2d', borderRadius: '5px', margin: '5px', display: 'flex', flexDirection: 'column' }}>
                            <caption style={{ fontSize: '20px', color: '#e98a26', margin: '7px' }}><IoInformationCircle style={{ height: '20px', width: '20px' }} /> Additional Information</caption>
                            <Container style={{ display: 'flex', flexDirection: 'column', padding: '25px', paddingTop: '0px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Doors</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="4" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Seats</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="5" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Towing hook</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="No" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Roof rails</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="No" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>A/C</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="No" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>GPS</Col>
                                    <Col><Form.Control size="sm" type="number" placeholder="No" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '14px' }}>Heated seats</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Front" style={{ marginLeft: 'auto' }} /></Col>
                                </Row>
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container className="tablesSection">
                    <Container style={{ width: '40vw', height: '30vh', backgroundColor: '#2d2d2d', borderRadius: '5px', margin: '5px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <caption style={{ fontSize: '20px', color: '#e98a26' }}>Booking History</caption>
                        <div className='tableResponsive'>
                            <Table className="table-striped" onClick={() => { window.location.pathname = "./booking" }}>
                            
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date from</th>
                                    <th>Date to</th>
                                    <th>Insurance</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>15.06.2024 02:30 PM</td>
                                    <td>03.07.2024 03:45 PM</td>
                                    <td>Platinum</td>
                                    <td>145.015 ISK</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>15.06.2024 02:30 PM</td>
                                    <td>03.07.2024 03:45 PM</td>
                                    <td>Platinum</td>
                                    <td>145.015 ISK</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>15.06.2024 02:30 PM</td>
                                    <td>03.07.2024 03:45 PM</td>
                                    <td>Platinum</td>
                                    <td>145.015 ISK</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>15.06.2024 02:30 PM</td>
                                    <td>03.07.2024 03:45 PM</td>
                                    <td>Platinum</td>
                                    <td>145.015 ISK</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>15.06.2024 02:30 PM</td>
                                    <td>03.07.2024 03:45 PM</td>
                                    <td>Platinum</td>
                                    <td>145.015 ISK</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </Container>
                    <Container style={{ width: '40vw', height: '30vh', backgroundColor: '#2d2d2d', borderRadius: '5px', margin: '5px', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Table className="table-striped" onClick={() => { window.location.pathname = "./issue" }}>
                            <caption style={{ fontSize: '20px', color: '#e98a26' }}>Issues History</caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Issue</th>
                                    <th>Reported on</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Oil Change</td>
                                    <td>12.04.2024</td>
                                    <td>Resolved</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Broken Glass</td>
                                    <td>29.01.2024</td>
                                    <td>Resolved</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}