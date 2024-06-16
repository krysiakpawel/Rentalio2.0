import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Booking = () => {

    return (
        <div className="booking">
            <div className="title" >
                <Row >
                    <text className="text" style={{ fontSize: '17px' }}> Booking summary</text>
                    <text className="right" style={{ fontSize: '17px' }}> Vehicle</text>
                </Row>
                <Row>
                    <text className="text" style={{ fontSize: '23px', color: 'whitesmoke' }}> #QRFGO</text>
                    <text className="right" style={{ fontSize: '23px', color: 'whitesmoke' }}> Toyota Yaris</text>
                </Row>  
            </div>
            <Container fluid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Container>
                    <Container className="fieldContainerPickups">
                        <Container className="pickupField">
                            <Row><text className="text" style={{ fontSize: '15px' }}> Pick up</text></Row>
                            <Row><text className="text" style={{ color: 'white', fontSize: '18px' }}> Monday, May 06, 2024</text></Row>
                            <Row><text className="text" style={{ color: 'white', fontSize: '18px' }}> 09:45 AM</text></Row>
                            <Row><text className="text" style={{ color: 'gray', fontSize: '12px' }}> Keflavik International Airport (KEF) </text></Row>
                        </Container>
                        <FaArrowAltCircleRight className="icon" />
                        <Container className="pickupField">
                            <Row><text className="text" style={{ fontSize: '15px' }}> Return</text></Row>
                            <Row><text className="text" style={{ color: 'white', fontSize: '18px' }}> Sunday, May 12, 2024</text></Row>
                            <Row><text className="text" style={{ color: 'white', fontSize: '18px' }}> 02:30 PM</text></Row>
                            <Row><text className="text" style={{ color: 'gray', fontSize: '12px' }}> Keflavik International Airport (KEF) </text></Row>
                        </Container> 
                    </Container>
                </Container>
                <Container className='paymentField' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Container style={{display:'flex', flexDirection: 'column'} }>
                        <text style={{ color: 'white', fontSize: '25px' }}>Total amount</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Paid</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Remaining</text>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } }>
                        <text style={{ color: 'white', fontSize: '25px' }}>136.350 ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>0 ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>136.350 ISK</text>
                        
                    </Container>
                </Container>
            </Container>
            <div style={{ marginTop: '60px', color:'#e98a26'}}>Customer Info</div>
            <Container className="customerInfo">
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{color:'white', marginRight: '5px'}}>Name</Form.Label>
                        <Form.Control placeholder="Anna"/>
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '45px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Driving License</Form.Label>
                        <Form.Control placeholder="GCWR3542-734B" />
                    </Form.Group>

                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./" }}>Save</Button>

                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Lastname</Form.Label>
                        <Form.Control placeholder="Jonsdottir" />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Date of Birth</Form.Label>
                        <Form.Control placeholder="15.04.1975" />
                    </Form.Group>

                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '55px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Passport</Form.Label>
                        <Form.Control placeholder="BDHE1234981" />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Adress</Form.Label>
                        <Form.Control placeholder="Gonholl 15" />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '5px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Postal code</Form.Label>
                        <Form.Control placeholder="260" />
                    </Form.Group>

                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '55px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Phone</Form.Label>
                        <Form.Control placeholder="+354 7691234" />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>City</Form.Label>
                        <Form.Control placeholder="Keflavik" />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Country</Form.Label>
                        <Form.Control placeholder="Iceland" />
                    </Form.Group>

                </Container>
            </Container>
            <div style={{ marginTop: '60px' }}><text style={{ color: '#e98a26' }} >Insurance</text><text style={{ marginLeft: '25%', color: '#e98a26' }}>Extras</text><text style={{ marginLeft: '41%', color: '#e98a26' }}>Price</text></div>

            <Container fluid className="fieldContainer">
                
                <Container className="insurance">
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form.Check aria-label="option 1" style={{ marginBottom: '8px' }}/>
                        <Form.Check aria-label="option 2" style={{ marginBottom: '8px' }} />
                        <Form.Check aria-label="option 3" style={{ marginBottom: '8px' }} />
                        <Form.Check aria-label="option 4" style={{ marginBottom: '8px' }} />
                        <Form.Check aria-label="option 5" style={{ marginBottom: '8px' }} />
                        <Form.Check aria-label="option 6" style={{ marginBottom: '8px' }} />
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyItem:'left', marginLeft:'10px' }}>
                        <text style={{ marginBottom: '8px' , color:'white'}}>Platinum + Assistance</text>
                        <text style={{ marginBottom: '8px' , color:'white'}}>Platinum</text>
                        <text style={{ marginBottom: '8px' , color:'white'}}>Gold</text>
                        <text style={{ marginBottom: '8px' , color:'white'}}>Silver</text>
                        <text style={{ marginBottom: '8px' , color:'white'}}>Bronze</text>
                        <text style={{ marginBottom: '8px' , color: 'white'}}>Decline all insurance</text>
                    </Container>
                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./results" }}>Save</Button>
                </Container>


                <Container className="extras">
                    <Container style={{ display: 'flex', flexDirection: 'row' }} >
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Form.Check aria-label="option 1" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 2" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 3" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 4" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 5" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 6" style={{ marginBottom: '8px' }} />
                        </Container>
                        <Container style={{ display: 'flex', flexDirection: 'column', justifyItem: 'left', marginLeft: '10px' }}>
                            <text style={{ marginBottom: '8px', color: 'white' }}>GPS</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Wi-Fi</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Iceland Road Map</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Fuel discount</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Roof box</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Bike roof rack</text>
                        </Container>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px', alignItems: 'flex-start' }} >
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                    }}>
                            <Form.Check aria-label="option 1" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 2" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 3" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 4" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 5" style={{ marginBottom: '8px' }} />
                            <Form.Check aria-label="option 6" style={{ marginBottom: '8px' }} />
                        </Container>
                        <Container style={{ display: 'flex', flexDirection: 'column', justifyItem: 'left', marginLeft: '10px' }}>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Extra driver</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Booster seat</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Child seat 9-18kg</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Child seat 15-36kg</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Roof tent</text>
                            <text style={{ marginBottom: '8px', color: 'white' }}>Kitchen box</text>
                            
                        </Container>
                        <Button variant="secondary" className='button' style={{ marginTop: '54px' }} onClick={() => { window.location.pathname = "./results" }}>Save</Button>
                    </Container>
                </Container>
                <Container className="price">
                    <Container style={{
                        display: 'flex', flexDirection: 'column', marginRight: '90px', alignItems:'flex-start'
                }}>
                        <text style={{ color: 'white', fontSize: '30px' }}>Total amount</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>Toyota Yaris</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>Platinum Insurance</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>Fuel discount</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>1 x Extra driver</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>1 x Booster seat</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>10% discount</text>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <text style={{ color: 'white', fontSize: '30px' }}>136.350ISK</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>72.000 ISK</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>36.000 ISK</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>Gratis</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>24.000 ISK</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>19.500 ISK</text>
                        <text style={{ color: 'white', fontSize: '15px' }}>-15.150 ISK</text>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}


