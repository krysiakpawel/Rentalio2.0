import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from "react-search-box";
import { FaSearch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

export const Deliveries = () => {
    const [date1, setDate1] = useState(new Date());
    return (
        <Container fluid className="deliveries">
            <Container fluid style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', justifyContent: 'space-between'}}>
                <Container fluid style={{ display: 'flex', flexDirection: 'row' }}>
                    <ReactSearchBox placeholder="Search booking.." className='search-bar' />
                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./deliveries" }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <FaSearch style={{ marginRight: '5px' }} /> Search
                        </span>
                    </Button>
                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'row', marginRight: '30px', alignItems: 'center' }}>
                    <text style={{ marginRight: '10px' }}>Choose date</text>
                    <div>
                        <DatePicker selected={date1} onChange={(date1) => setDate1(date1)} />
                    </div>
                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./deliveries" }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <FaSearch style={{ marginRight: '5px' }} /> Search
                        </span>
                    </Button>
                </Container>
            </Container>










            <div className="table-responsive-xl">
                <Table className="table-striped" onClick={() => { window.location.pathname = "./booking" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Booking Code </th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Class</th>
                            <th>Unit</th>
                            <th>Date from</th>
                            <th>Date to</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>L9H3M7</td>
                            <td>Pick up</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>DM121</td>
                            <td>21.05.2024 09:30 AM</td>
                            <td>29.05.2024 09:30 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>64.245 ISK</td>
                            <td>test@test.is</td>
                            <td>Katrín Ásgeirsdóttir</td>
                            <td>+3548642019</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>A2G8K4</td>
                            <td>Pick up</td>
                            <td>Paid</td>
                            <td>Nissan X-Trail</td>
                            <td>NZP67</td>
                            <td>21.05.2024 1:45 PM</td>
                            <td>29.05.2024 3:50 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>124.515 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigríður Pétursdóttir</td>
                            <td>+3545378402</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>R5P1X9</td>
                            <td>Drop off</td>
                            <td>Paid</td>
                            <td>Mercedes-Benz Vito</td>
                            <td>GRF34</td>
                            <td>02.05.2024 03:00 PM</td>
                            <td>21.05.2024 02:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>458.510 ISK</td>
                            <td>test@test.is</td>
                            <td>Jón Þórsson</td>
                            <td>+3549123765</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>B6F2Y8</td>
                            <td>Pick up</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>ESP14</td>
                            <td>21.05.2024 02:30 PM</td>
                            <td>28.05.2024 02:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>55.489 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Einarsson</td>
                            <td>+3546485091</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>T7Z3Q1</td>
                            <td>Pick up</td>
                            <td>Unpaid</td>
                            <td>Kia Ceed SW</td>
                            <td>NPX87</td>
                            <td>21.05.2024 02:30 PM</td>
                            <td>12.06.2024 08:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>358.156 ISK</td>
                            <td>test@test.is</td>
                            <td>Freyja Sigurðardóttir</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>U4J6N9</td>
                            <td>Drop off</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>YPP84</td>
                            <td>16.05.2024 07:00 PM</td>
                            <td>21.05.2024 2:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>49.198 ISK</td>
                            <td>test@test.is</td>
                            <td>Hafdís Jóhannesdóttir</td>
                            <td>+3549876543</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>C8W2V5</td>
                            <td>Pick up</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>GFU73</td>
                            <td>21.05.2024 3:00 PM</td>
                            <td>02.06.2024 06:15 PM</td>
                            <td>Aurora Hotel Keflavik</td>
                            <td>114.374 ISK</td>
                            <td>test@test.is</td>
                            <td>Ragnhildur Ólafsdóttir</td>
                            <td>+3542468013</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>H9L4O2</td>
                            <td>Drop off</td>
                            <td>Paid</td>
                            <td>Toyota Aygo</td>
                            <td>JET16</td>
                            <td>18.05.2024 07:00 AM</td>
                            <td>21.05.2024 9:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>25.489 ISK</td>
                            <td>test@test.is</td>
                            <td>Þorsteinn Gunnarsson</td>
                            <td>+3547530912</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>I6R8M3</td>
                            <td>Drop off</td>
                            <td>Paid</td>
                            <td>Kia Rio</td>
                            <td>BGP21</td>
                            <td>08.04.2024 11:20 AM</td>
                            <td>21.05.2024 09:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>194.437 ISK</td>
                            <td>test@test.is</td>
                            <td>Arnar Bjarnason</td>
                            <td>+3546058172</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>V5X1T9</td>
                            <td>Pick up</td>
                            <td>Unpaid</td>
                            <td>Toyota Yaris</td>
                            <td>DRF23</td>
                            <td>21.05.2024 09:45 PM</td>
                            <td>30.05.2024 05:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>74.153 ISK</td>
                            <td>test@test.is</td>
                            <td>Leifur Einarsson</td>
                            <td>+3543198206</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Q2N6Y4</td>
                            <td>Drop off</td>
                            <td>paid</td>
                            <td>Kia Ceed SW</td>
                            <td>GEU55</td>
                            <td>11.05.2024 11:45 AM</td>
                            <td>21.05.2024 10:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>58.654 ISK</td>
                            <td>test@test.is</td>
                            <td>Ásta Pétursdóttir</td>
                            <td>+3544827301</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}