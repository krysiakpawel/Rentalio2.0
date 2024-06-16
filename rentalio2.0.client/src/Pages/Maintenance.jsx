import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from "react-search-box";
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";

export const Maintenance = () => {

    return (
        <Container fluid className="maintenance">
            <Container fluid style={{ display: 'flex', flexDirection: 'row' }}>
                <ReactSearchBox placeholder="Search..." className='search-bar' />
                <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./maintenance" }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                             <FaSearch style={{ marginRight: '5px' }} /> Search
                        </span>
                    </Button>
            </Container>

            <Container fluid style={{ display: 'flex', flexDirection: 'column', marginTop:'20px'}}>
                <Container fluid style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'  }}>
                    <div style={{ backgroundColor: '#2D2D2D' }} className="shortcutItem" onClick={() => { window.location.pathname = "./addWorkOrder" }}>
                        <MdAssignmentAdd  className="shortcutIcon" />
                        <text style={{ fontSize: '14px', fontFamily: 'Corbel', fontWeight: 'bold' }}>Add Work Order</text>
                    </div>
                    <div style={{ backgroundColor: '#2D2D2D' }} className="shortcutItem" onClick={() => { window.location.pathname = "./addIssue" }}>
                        <FaWrench className="shortcutIcon" />
                        <text style={{ fontSize: '14px', fontFamily: 'Corbel', fontWeight: 'bold' }}>Report Issue</text>
                    </div>
                    {/*
                    <div style={{ backgroundColor: '#2D2D2D' }} className="shortcutItem" onClick={() => { window.location.pathname = "./maintenance" }}>
                        <GiMechanicGarage className="shortcutIcon" />
                        <text style={{ fontSize: '14px', fontFamily: 'Corbel', fontWeight: 'bold' }}>Send to Workshop</text>
                    </div>
                    */}
                </Container>
         
                 <Container fluid className="tableSection">
                     <Container>
                        <Table className="table-striped" onClick={() => { window.location.pathname = "./workOrder" }}>
                         <caption style={{ fontSize: '20px', color: '#e98a26' }}>Work Orders</caption>
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>Class</th>
                                 <th>Unit</th>
                                 <th>Status</th>
                                 <th>Issues</th>
                                 <th>Mechanic</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>1</td>
                                 <td>Toyota Yaris</td>
                                 <td>DM121</td>
                                 <td>Scheduled</td>
                                 <td>Oil change</td>
                                 <td>Sigurður Ólafsson</td> 
                             </tr>
                             <tr>
                                 <td>2</td>
                                 <td>Kia Rio</td>
                                 <td>FBS34</td>
                                 <td>In progress</td>
                                 <td>Tires</td>
                                 <td>Sigurður Ólafsson</td>
                             </tr>
                             <tr>
                                 <td>3</td>
                                 <td>Kia Ceed SW</td>
                                 <td>JDI54</td>
                                 <td>Completed</td>
                                 <td>Oil change</td>
                                 <td>Ólafur Jónsson</td>
                             </tr>
                             <tr>
                                 <td>4</td>
                                 <td>Toyota Yaris</td>
                                 <td>ESP14</td>
                                 <td>Scheduled</td>
                                 <td>Front glass replace</td>
                                 <td>Sigurður Ólafsson</td>
                             </tr>
                             <tr>
                                 <td>5</td>
                                 <td>Toyota RAV4</td>
                                 <td>GID34</td>
                                 <td>Completed</td>
                                 <td>Oil change</td>
                                 <td>Ólafur Jónsson</td>
                             </tr>
                         </tbody>
                         </Table>
                     </Container>
                     <Container>
                        <Table className="table-striped" onClick={() => { window.location.pathname = "./issue" }}>
                         <caption style={{ fontSize: '20px', color: '#e98a26' }}>Issues</caption>
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>Class</th>
                                 <th>Unit</th>
                                 <th>Issue</th>
                                 <th>Reported on</th>
                                 <th>Status</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>1</td>
                                 <td>Toyota RAV4</td>
                                 <td>ARR58</td>
                                 <td>Flat tire</td>
                                 <td>14.05.2024 11:49 AM</td>
                                 <td>Unsolved</td>
                             </tr>
                             <tr>
                                 <td>2</td>
                                 <td>Toyota LandCruiser</td>
                                 <td>BOD49</td>
                                 <td>Wrong fuel</td>
                                 <td>16.05.2024 07:24 AM</td>
                                 <td>Unsolved</td>
                             </tr>
                             <tr>
                                 <td>3</td>
                                 <td>Toyota RAV4</td>
                                 <td>FVT40</td>
                                 <td>Dented door FR</td>
                                 <td>21.05.2024 03:16 PM</td>
                                 <td>Resolved</td>
                              </tr>
                              <tr>
                                  <td>4</td>
                                  <td>Kia Rio</td>
                                  <td>BGP43</td>
                                  <td>Oil change</td>
                                  <td>14.05.2024 09:31 PM</td>
                                  <td>Resolved</td>
                              </tr>
                         </tbody>
                         </Table>
                     </Container>
                 </Container>
            </Container>
        </Container>
    )
}