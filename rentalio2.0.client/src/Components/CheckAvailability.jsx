import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { DropdownClass } from './DropdownClass';


export function CheckAvailability() {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const handleCheckAvailability = () => {
        // Check if date2 is later than date1
        if (date2 > date1) {
            // Perform your action, e.g., redirect to another page
            window.location.pathname = "./";
        } else {
            // Handle the case where date2 is not later than date1
            alert("Return date must be after the pick up date");
        }
    };
    return (
        <div className="checkAvailability ">
            <div className="dashboardTitle"> Check Availability </div>
            <Container style={{ display: 'flex', flexDirection: 'column', marginTop: '30px', paddingRight: '20px' }}>
                <Container flex style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItem: 'center' }} >
                    <Container flex style={{ display: 'flex', flexDirection: 'row', alignItem: 'start', justifyContent: 'space-evenly' }} >
                        <text style={{marginRight: '10px'}}>From</text>
                        <div>
                            <DatePicker selected={date1} onChange={(date1) => setDate1(date1)} />
                        </div>
                    </Container>
                    <Container flex style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginRight: '20px'}} >
                        <text style={{ marginRight: '10px', color: 'white' }}>To</text>
                        <div>
                            <DatePicker selected={date2} onChange={(date2) => setDate2(date2)} onClick={handleCheckAvailability} />
                        </div>
                    </Container>
                </Container>
                <Container flex style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '30px' }} >
                    <DropdownClass/>
                    <Button variant="secondary" className='button' onClick={handleCheckAvailability} >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                             <FaSearch style={{ marginRight: '5px' }} /> Check
                        </span>
                    </Button>
                </Container>
            </Container>
            

        </div>
    )
}



