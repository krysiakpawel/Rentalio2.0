import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { RiArrowGoBackFill } from "react-icons/ri";

export const Issue = () => {
    return (
        <div className="subpage">
            <Container fluid style={{ display: 'flex', flexDirection: 'column' }}>


                <Container fluid style={{ display: 'flex', width: '80vw', justifyContent: 'center', marginTop: '50px' }}>
                    <Container fluid style={{ height: '370px', width: '600px', display: 'flex', flexDirection: 'column', backgroundColor: '#2d2d2d', borderRadius: '3px' }}>
                    <Container>
                            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '15px', marginBottom: '-15px' }}>
                            <text style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', fontFamily: 'Corbel', marginRight: '350px'}}>Issue #21</text>
                            <text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Corbel', marginRight: '10px' }}>Status</text>
                            <div style={{ backgroundColor: 'green', height: '20px', width: '80px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Corbel' }}>Unsolved</text>
                            </div>
                            </Container>
                        </Container>
                        <hr style={{ borderColor: 'white', width: '100%' }} />
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', margin: '15px' }}>
                            <Container style={{ display: 'flex', flexDirection: 'column' }}>
                                <text style={{ color: 'white', fontSize: '20px' }}>Issue</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>Reported on</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>Class</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>Unit</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>Comments</text>
                            </Container>
                            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <text style={{ color: 'white', fontSize: '20px' }}>Flat Tire</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>04.06.2024 11:32 AM</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>Toyota RAV4</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>ARR58</text>
                                <text style={{ color: 'white', fontSize: '20px' }}>FR tire leaking air</text>
                            </Container>
                        </Container>
                        <Row style={{ marginTop: '40px', marginRight: '80px' }}>
                            <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./maintenance" }}>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <RiArrowGoBackFill style={{ marginRight: '5px' }} /> Back
                                </span>
                            </Button>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}