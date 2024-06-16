import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { DropdownClass } from '../Components/DropdownClass';
import { DropdownUnits } from '../Components/DropdownUnits';
import { DropdownMechanics } from '../Components/DropdownMechanics'
import { DropdownReportedIssues } from '../Components/DropdownReportedIssues';    
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { MdAssignmentAdd } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const AddWorkOrder = () => {
    const [date1, setDate1] = useState(new Date());

    return (
        <div className="addWorkOrder">
            <Container fluid style={{ display: 'flex', flexDirection: 'column' }}>


                <Container fluid style={{ display: 'flex', width: '80vw', justifyContent: 'center', marginTop: '50px' }}>
                    <Container fluid style={{ height: '450px', width: '600px', display: 'flex', flexDirection: 'column', backgroundColor: '#2d2d2d', borderRadius: '3px' }}>
                        <Container>
                            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '15px', marginBottom: '-15px' }}>
                                <text style={{ color: 'white', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Corbel', marginRight: '10px' }}>Add Work Order</text>

                                
                                <div style={{ backgroundColor: 'green', height: '20px', width: '80px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Corbel' }}>In progress</text>
                                </div>
                            </Container>
                        </Container>
                        <hr style={{ borderColor: 'white', width: '100%' }} />
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px' }}>
                            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '600px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '20px', }}>Class</Col>
                                    <Col><DropdownClass /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '20px' }}>Unit</Col>
                                    <Col><DropdownUnits /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '20px' }}>Start Date</Col>
                                    <Col><DatePicker selected={date1} onChange={(date1) => setDate1(date1)} /></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '20px' }}>Assign To</Col>
                                    <Col><DropdownMechanics/></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '20px' }}>Select issue</Col>
                                    <Col><DropdownReportedIssues/></Col>
                                </Row>
                                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', width: '100%' }}>
                                    <Col style={{ color: 'white', fontSize: '20px' }}>Comments</Col>
                                    <Col><Form.Control size="sm" type="text" placeholder="Comments.." style={{ marginLeft: 'auto' }} /></Col>
                                </Row>







                                <Row style={{ marginTop: '40px', marginRight:'80px' }}>
                                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./maintenance" }}>
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <RiArrowGoBackFill style={{ marginRight: '5px' }} /> Back
                                        </span>
                                    </Button>
                                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./addWorkOrder" }}>
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <MdAssignmentAdd style={{ marginRight: '5px' }} /> Add Work Order
                                        </span>
                                    </Button>
                                </Row>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}