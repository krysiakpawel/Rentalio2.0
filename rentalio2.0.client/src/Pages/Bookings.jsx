import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from "react-search-box";
import { FaSearch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { MdAssignmentAdd } from "react-icons/md";

export const Bookings = () => {
    return (
        <Container fluid className="deliveries">
            <Container fluid style={{ display: 'flex', flexDirection: 'row' }}>
                <ReactSearchBox placeholder="Search booking.." className='search-bar' />
                <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./bookings" }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <FaSearch style={{ marginRight: '5px' }} /> Search
                    </span>
                </Button>
                <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./addBooking" }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <MdAssignmentAdd style={{ marginRight: '5px' }} /> Add booking
                    </span>
                </Button>
            </Container>
            <div className="table-responsive">
                <Table bordered className="table-striped" onClick={() => { window.location.pathname = "./booking" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Booking Code</th>
                            <th>Status</th>
                            <th>Class</th>
                            <th>Unit</th>
                            <th>Date from</th>
                            <th>Pickup location</th>
                            <th>Date to</th>
                            <th>Drop off location</th>
                            <th>Insurance</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>M9X4E6L</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>ABC12</td>
                            <td>15.06.2024 02:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>03.07.2024 03:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>120,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Jónsson</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>N7H2R5K</td>
                            <td>Unpaid</td>
                            <td>Kia Rio</td>
                            <td>DEF34</td>
                            <td>20.06.2024 04:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>12.07.2024 05:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>200,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Hanna Guðmundsdóttir</td>
                            <td>+3542345678</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>L5Z8T3M</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>GHI56</td>
                            <td>25.06.2024 08:45 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>15.07.2024 09:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>150,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigurður Ólafsson</td>
                            <td>+3543456789</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>O2V5Q8B</td>
                            <td>Unpaid</td>
                            <td>Kia Rio</td>
                            <td>JKL78</td>
                            <td>30.06.2024 01:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>21.07.2024 02:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>170,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Jóna Ólafsdóttir</td>
                            <td>+3544567890</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>V8B3N6K</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>MNO90</td>
                            <td>05.07.2024 05:30 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>27.07.2024 06:45 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>250,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Björn Guðmundsson</td>
                            <td>+3545678901</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>P6M9Z2T</td>
                            <td>Unpaid</td>
                            <td>Kia Rio</td>
                            <td>PQR12</td>
                            <td>10.07.2024 10:45 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>01.08.2024 12:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>130,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Jónsdóttir</td>
                            <td>+3546789012</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>M8C1J4W</td>
                            <td>Paid</td>
                            <td>Toyota Yaris</td>
                            <td>STU34</td>
                            <td>15.07.2024 02:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>07.08.2024 03:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>200,000 ISK</td>
                            <td>test@test.is</td>
                            <td>Guðrún Ólafsdóttir</td>
                            <td>+3547890123</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>V4Z8N2Q</td>
                            <td>Paid</td>
                            <td>Jeep Compass</td>
                            <td>KYN47</td>
                            <td>06.09.2024 03:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>27.09.2024 04:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>198,500 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Jónsson</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>R3Z6T1K</td>
                            <td>Unpaid</td>
                            <td>Toyota Yaris</td>
                            <td>ABC12</td>
                            <td>25.07.2024 06:45 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>16.08.2024 08:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>161,500 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigríður Jónsdóttir</td>
                            <td>+3549012345</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>F7V4S2M</td>
                            <td>Paid</td>
                            <td>Jeep Wrangler</td>
                            <td>XZB57</td>
                            <td>30.07.2024 12:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>21.08.2024 01:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>147,800 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Guðmundsdóttir</td>
                            <td>+3540123456</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>L8Z6T3G</td>
                            <td>Unpaid</td>
                            <td>Toyota Yaris</td>
                            <td>HXB29</td>
                            <td>10.08.2024 03:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>01.09.2024 04:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>145,600 ISK</td>
                            <td>test@test.is</td>
                            <td>Hanna Guðmundsdóttir</td>
                            <td>+3547890123</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>N4H9F2R</td>
                            <td>Paid</td>
                            <td>Jeep Cherokee</td>
                            <td>PLY63</td>
                            <td>15.08.2024 07:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>06.09.2024 08:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>173,200 ISK</td>
                            <td>test@test.is</td>
                            <td>Jóna Ólafsdóttir</td>
                            <td>+3545678901</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>H6L3K9Z</td>
                            <td>Unpaid</td>
                            <td>Toyota Corolla</td>
                            <td>WVC84</td>
                            <td>20.08.2024 11:30 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>11.09.2024 12:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>199,900 ISK</td>
                            <td>test@test.is</td>
                            <td>Björn Guðmundsson</td>
                            <td>+3546789012</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>W9X5V3C</td>
                            <td>Paid</td>
                            <td>Jeep Grand Cherokee</td>
                            <td>RUT95</td>
                            <td>25.08.2024 02:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>16.09.2024 04:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>135,400 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Jónsdóttir</td>
                            <td>+3549012345</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>F8H3R6W</td>
                            <td>Unpaid</td>
                            <td>Toyota RAV4</td>
                            <td>CMX28</td>
                            <td>01.09.2024 08:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>22.09.2024 09:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>162,300 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigríður Jónsdóttir</td>
                            <td>+3540123456</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>M4Z8R2W</td>
                            <td>Unpaid</td>
                            <td>Jeep Compass</td>
                            <td>ZTP47</td>
                            <td>30.09.2024 10:15 AM</td>
                            <td>Aurora Hotel (KEF)</td>
                            <td>21.10.2024 11:30 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>217,300 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Guðmundsson</td>
                            <td>+3546789012</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>J7N4H8G</td>
                            <td>Paid</td>
                            <td>Toyota RAV4</td>
                            <td>WQD28</td>
                            <td>05.10.2024 03:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>26.10.2024 04:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>181,900 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigríður Jónsdóttir</td>
                            <td>+3547890123</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>O8M3Z6T</td>
                            <td>Unpaid</td>
                            <td>Jeep Grand Cherokee</td>
                            <td>PLM95</td>
                            <td>10.10.2024 08:45 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>31.10.2024 10:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>236,700 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Guðmundsdóttir</td>
                            <td>+3548901234</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>P9Z5V3X</td>
                            <td>Paid</td>
                            <td>Toyota Highlander</td>
                            <td>XRB36</td>
                            <td>15.10.2024 11:30 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>05.11.2024 12:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>194,500 ISK</td>
                            <td>test@test.is</td>
                            <td>Guðrún Jónsdóttir</td>
                            <td>+3540123456</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>H5L8T3M</td>
                            <td>Unpaid</td>
                            <td>Jeep Renegade</td>
                            <td>YUG59</td>
                            <td>20.10.2024 02:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>10.11.2024 03:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>209,300 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Ólafsson</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>R3Z6T1K</td>
                            <td>Paid</td>
                            <td>Toyota Corolla</td>
                            <td>ABC12</td>
                            <td>25.10.2024 06:45 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>15.11.2024 08:00 AM</td>
                            <td>Hotel Konvin (KEF)</td>
                            <td>Silver</td>
                            <td>192,100 ISK</td>
                            <td>test@test.is</td>
                            <td>Hanna Jónsdóttir</td>
                            <td>+3542345678</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>F7V4S2M</td>
                            <td>Unpaid</td>
                            <td>Jeep Wrangler</td>
                            <td>XZB57</td>
                            <td>30.10.2024 12:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>20.11.2024 01:15 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>225,800 ISK</td>
                            <td>test@test.is</td>
                            <td>Björn Jónsson</td>
                            <td>+3543456789</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>L8Z6T3G</td>
                            <td>Paid</td>
                            <td>Jeep Cherokee</td>
                            <td>TYM48</td>
                            <td>04.11.2024 03:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>24.11.2024 04:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>231,400 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigríður Guðmundsdóttir</td>
                            <td>+3544567890</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>X1B7M4V</td>
                            <td>Unpaid</td>
                            <td>Jeep Grand Wagoneer</td>
                            <td>VFD63</td>
                            <td>10.11.2024 08:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>30.11.2024 09:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>202,600 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Jónsdóttir</td>
                            <td>+3545678901</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Y4K8W2R</td>
                            <td>Paid</td>
                            <td>Jeep Liberty</td>
                            <td>GTH94</td>
                            <td>15.11.2024 11:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>05.12.2024 12:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>213,900 ISK</td>
                            <td>test@test.is</td>
                            <td>Guðrún Jónsdóttir</td>
                            <td>+3546789012</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>N7B4Z8T</td>
                            <td>Unpaid</td>
                            <td>Jeep Commander</td>
                            <td>FGH95</td>
                            <td>20.11.2024 02:30 PM</td>
                            <td>Hotel Grand (RKV)</td>
                            <td>10.12.2024 03:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>239,700 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Ólafsson</td>
                            <td>+3547890123</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>A4B7Z9M</td>
                            <td>Unpaid</td>
                            <td>Toyota Yaris</td>
                            <td>KLH23</td>
                            <td>25.11.2024 08:30 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>16.12.2024 09:45 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Gold</td>
                            <td>212,750 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Jónsson</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>C8D3R6L</td>
                            <td>Paid</td>
                            <td>Kia Rio</td>
                            <td>MPV54</td>
                            <td>01.12.2024 01:15 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>22.12.2024 02:30 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Platinum</td>
                            <td>197,880 ISK</td>
                            <td>test@test.is</td>
                            <td>Hanna Guðmundsdóttir</td>
                            <td>+3542345678</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>E5F8H2V</td>
                            <td>Unpaid</td>
                            <td>Toyota Corolla</td>
                            <td>WQR89</td>
                            <td>05.12.2024 04:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>26.12.2024 06:00 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>148,320 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigurður Ólafsson</td>
                            <td>+3543456789</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>G2J5N8H</td>
                            <td>Paid</td>
                            <td>Jeep Wrangler</td>
                            <td>YUO78</td>
                            <td>10.12.2024 08:00 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>31.12.2024 09:15 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Silver</td>
                            <td>229,550 ISK</td>
                            <td>test@test.is</td>
                            <td>Jóna Ólafsdóttir</td>
                            <td>+3544567890</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>H9K3T6F</td>
                            <td>Unpaid</td>
                            <td>Toyota Highlander</td>
                            <td>IPQ28</td>
                            <td>15.12.2024 11:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>05.01.2025 12:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>163,750 ISK</td>
                            <td>test@test.is</td>
                            <td>Björn Guðmundsson</td>
                            <td>+3545678901</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>J6L9Q2B</td>
                            <td>Paid</td>
                            <td>Jeep Compass</td>
                            <td>ROZ95</td>
                            <td>20.12.2024 02:30 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>10.01.2025 03:45 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Platinum</td>
                            <td>189,480 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Jónsdóttir</td>
                            <td>+3546789012</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>K8M3Z6T</td>
                            <td>Unpaid</td>
                            <td>Toyota RAV4</td>
                            <td>FSW48</td>
                            <td>25.12.2024 08:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>15.01.2025 09:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>177,930 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Jónsson</td>
                            <td>+3549012345</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>L5Z8T3M</td>
                            <td>Paid</td>
                            <td>Jeep Grand Cherokee</td>
                            <td>ETC37</td>
                            <td>30.12.2024 12:00 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>20.01.2025 01:15 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Gold</td>
                            <td>204,690 ISK</td>
                            <td>test@test.is</td>
                            <td>Hanna Guðmundsdóttir</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>M7B4Z8T</td>
                            <td>Unpaid</td>
                            <td>Toyota Corolla</td>
                            <td>LPW59</td>
                            <td>04.01.2025 03:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>25.01.2025 04:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>236,810 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigurður Ólafsson</td>
                            <td>+3542345678</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>N6H9T2R</td>
                            <td>Paid</td>
                            <td>Jeep Wrangler</td>
                            <td>GTH47</td>
                            <td>10.01.2025 08:00 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>31.01.2025 09:15 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Silver</td>
                            <td>158,930 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Jónsson</td>
                            <td>+3543456789</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>P8K3W6X</td>
                            <td>Unpaid</td>
                            <td>Toyota Highlander</td>
                            <td>BSZ28</td>
                            <td>15.01.2025 11:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>05.02.2025 12:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Gold</td>
                            <td>172,840 ISK</td>
                            <td>test@test.is</td>
                            <td>Hanna Guðmundsdóttir</td>
                            <td>+3544567890</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>Q9Z5T3K</td>
                            <td>Paid</td>
                            <td>Jeep Compass</td>
                            <td>XYZ95</td>
                            <td>20.01.2025 02:30 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>10.02.2025 03:45 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Platinum</td>
                            <td>194,670 ISK</td>
                            <td>test@test.is</td>
                            <td>Ólafur Ólafsson</td>
                            <td>+3545678901</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>R6H3T8Z</td>
                            <td>Unpaid</td>
                            <td>Toyota RAV4</td>
                            <td>CZX48</td>
                            <td>25.01.2025 08:00 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>15.02.2025 09:15 AM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Silver</td>
                            <td>183,790 ISK</td>
                            <td>test@test.is</td>
                            <td>Anna Jónsdóttir</td>
                            <td>+3546789012</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>S8J5N2H</td>
                            <td>Paid</td>
                            <td>Jeep Grand Cherokee</td>
                            <td>VBN37</td>
                            <td>30.01.2025 12:00 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>20.02.2025 01:15 PM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Gold</td>
                            <td>210,580 ISK</td>
                            <td>test@test.is</td>
                            <td>Björn Guðmundsson</td>
                            <td>+3548901234</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>T7K4Z8N</td>
                            <td>Unpaid</td>
                            <td>Toyota Corolla</td>
                            <td>FDS59</td>
                            <td>04.02.2025 03:30 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>25.02.2025 04:45 PM</td>
                            <td>Keflavik International Airport (KEF)</td>
                            <td>Platinum</td>
                            <td>241,690 ISK</td>
                            <td>test@test.is</td>
                            <td>Jóna Ólafsdóttir</td>
                            <td>+3541234567</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>U6B9Z2T</td>
                            <td>Paid</td>
                            <td>Jeep Wrangler</td>
                            <td>POI47</td>
                            <td>10.02.2025 08:00 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>31.02.2025 09:15 AM</td>
                            <td>Hotel Aurora (KEF)</td>
                            <td>Silver</td>
                            <td>164,870 ISK</td>
                            <td>test@test.is</td>
                            <td>Sigurður Ólafsson</td>
                            <td>+3542345678</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}       