import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropdownLocation } from '../Components/DropdownLocation';
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { DropdownClass } from '../Components/DropdownClass';
import { MdAssignmentAdd } from "react-icons/md";


export const AddBooking = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        drivingLicense: "",
        dob: "",
        passport: "",
        address: "",
        postalCode: "",
        phone: "",
        email: "",
        city: "",
        country: ""
    });





    const [days, setDaysDifference] = useState(0);
    const [vehicleTotal, setVehicleTotal] = useState(0);
    const [amount, setAmount] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const [insuranceTotal, setInsuranceTotal] = useState(0);
    const insurancePrices = {
        platinumAssistance: 2490,
        platinum: 2099,
        gold: 1699,
        silver: 1199,
        bronze: 599,
        declineAll: 0
    };
    const pricePerDay = 2595;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleInsuranceChange = (event) => {
        const selectedInsurance = insurancePrices[event.target.value];
        setInsurance(event.target.checked ? selectedInsurance : 0);
    };

    useEffect(() => {
        const daysDifference = calculateDays();
        setDaysDifference(daysDifference);

        const newInsuranceTotal = insurance * daysDifference || 0;
        setInsuranceTotal(newInsuranceTotal);

        const newVehicleTotal = pricePerDay * daysDifference;
        setVehicleTotal(newVehicleTotal);

        setAmount(newInsuranceTotal + vehicleTotal);
    }, [date1, date2, insurance]);

    const handleDate1Change = (date) => {
        setDate1(date);
    };

    const handleDate2Change = (date) => {
        setDate2(date);
    };

    const calculateDays = () => {
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);
        const days = Math.ceil(diffInDays);
        return days;
    };

    const addBooking = (event) => {
        event.preventDefault();


        const allFieldsFilled = Object.values(formData).every(value => value !== "");

        if (allFieldsFilled && date2 > date1) {
            window.location.pathname = "./addBooking";
            alert("New booking has been created successfully.")
        } else {
            alert("Please fill in all required fields and ensure return date is after pick up date.");
        }
    };

    return (
        <div className="booking">
            <Container fluid style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100px', backgroundColor: '#2d2d2d', justifyContent: 'space-between', padding:'15px' }} >
                <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'start' }} >
                    <text style={{ fontSize: '20px', color: 'lightblue' }}> Vehicle</text>
                    <text><DropdownClass /> </text>
                </Container>
                <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center' }} >
                    <Button variant="secondary" className='button' onClick = { addBooking }>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <MdAssignmentAdd style={{ marginRight: '5px' }} /> Add Booking
                        </span>
                    </Button>
                </Container>
            </Container>
            <Container fluid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Container>
                    <Container className="fieldContainerPickups">
                        <Container className="pickupField">
                            <Row><text className="text" style={{ fontSize: '15px' }}> Pick up</text></Row>
                            <Row style={{ margin: '5px' }}><DatePicker selected={date1} onChange={handleDate1Change} /></Row>
                            <DropdownLocation/>
                        </Container>
                        <FaArrowAltCircleRight className="icon" />
                        <Container className="pickupField">
                            <Row><text className="text" style={{ fontSize: '15px' }}> Return</text></Row>
                            <Row style={{ margin: '5px' }}><DatePicker selected={date2} onChange={handleDate2Change} /></Row>
                            <DropdownLocation/>
                        </Container>
                    </Container>
                </Container>
                <Container className='paymentField' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Container style={{ display: 'flex', flexDirection: 'column' }}>
                        <text style={{ color: 'white', fontSize: '25px' }}>Total amount</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Paid</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Remaining</text>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <text style={{ color: 'white', fontSize: '25px' }}>0 ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>0 ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>0 ISK</text>
                        
                    </Container>
                </Container>
            </Container>
            <div style={{ marginTop: '60px', color: '#e98a26' }}>Customer Info</div>
            <Container className="customerInfo">
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Name</Form.Label>
                        <Form.Control placeholder=" " name="name" value={formData.name} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '45px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Driving License</Form.Label>
                        <Form.Control placeholder=" " type="text" name="drivingLicense" value={formData.drivingLicense} onChange={handleInputChange} required />
                    </Form.Group>

                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Lastname</Form.Label>
                        <Form.Control placeholder=" " type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Date of Birth</Form.Label>
                        <Form.Control placeholder=" " type="text" name="dob" value={formData.dob} onChange={handleInputChange} required />
                    </Form.Group>

                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '55px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Passport</Form.Label>
                        <Form.Control placeholder=" " type="text" name="passport" value={formData.passport} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Adress</Form.Label>
                        <Form.Control placeholder=" " type="text" name="address" value={formData.address} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '5px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Postal code</Form.Label>
                        <Form.Control placeholder=" " type="number" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
                    </Form.Group>

                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                    <Form.Group className="mb-5" style={{ marginBottom: '5px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Phone</Form.Label>
                        <Form.Control placeholder=" " type="number" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '25px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>E-Mail</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>City</Form.Label>
                        <Form.Control type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-5" style={{ marginBottom: '8px' }}>
                        <Form.Label style={{ color: 'white', marginRight: '5px' }}>Country</Form.Label>
                        <Form.Control type="text" name="country" value={formData.country} onChange={handleInputChange} required />
                    </Form.Group>

                </Container>
            </Container>
            <div style={{ marginTop: '60px' }}><text style={{ color: '#e98a26' }} >Insurance</text><text style={{ marginLeft: '25%', color: '#e98a26' }}>Extras</text><text style={{ marginLeft: '41%', color: '#e98a26' }}>Price</text></div>

            <Container fluid className="fieldContainer">

                <Container className="insurance">
                    <Container value={insurance} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form.Check
                            type="radio"
                            value="platinumAssistance"
                            name="insurance"
                            style={{ marginBottom: '8px' }}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type="radio"
                            value="platinum"
                            name="insurance"
                            style={{ marginBottom: '8px' }}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type="radio"
                            value="gold"
                            name="insurance"
                            style={{ marginBottom: '8px' }}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type="radio"
                            value="platinumAssistance"
                            name="silver"
                            style={{ marginBottom: '8px' }}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type="radio"
                            value="bronze"
                            name="insurance"
                            style={{ marginBottom: '8px' }}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type="radio"
                            value="declineAll"
                            name="insurance"
                            style={{ marginBottom: '8px' }}
                            onChange={handleInsuranceChange}
                        />
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', justifyItem: 'left', marginLeft: '10px' }}>
                        <text style={{ marginBottom: '8px', color: 'white' }}>Platinum + Assistance</text>
                        <text style={{ marginBottom: '8px', color: 'white' }}>Platinum</text>
                        <text style={{ marginBottom: '8px', color: 'white' }}>Gold</text>
                        <text style={{ marginBottom: '8px', color: 'white' }}>Silver</text>
                        <text style={{ marginBottom: '8px', color: 'white' }}>Bronze</text>
                        <text style={{ marginBottom: '8px', color: 'white' }}>Decline all insurance</text>
                    </Container>
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
                        <Container style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
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
                    </Container>
                </Container>
                <Container className="price">
                    <Container style={{
                        display: 'flex', flexDirection: 'column', marginRight: '90px', alignItems: 'flex-start'
                    }}>
                        <text style={{ color: 'white', fontSize: '20px' }}>Total amount: </text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Number of days:</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Vehicle:</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>Insurance: </text>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <text style={{ color: 'white', fontSize: '20px' }}>{amount} ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>{days} ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>{vehicleTotal} ISK</text>
                        <text style={{ color: 'white', fontSize: '20px' }}>{insuranceTotal} ISK</text>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}


