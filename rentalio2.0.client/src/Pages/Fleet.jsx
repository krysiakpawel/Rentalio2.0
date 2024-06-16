import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from "react-search-box";
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

export const Fleet = () => {

    return (
        <Container fluid className="fleet">

            <Container fluid style={{ display: 'flex', flexDirection: 'row' }}>
                <ReactSearchBox placeholder="Search vehicle.." className='search-bar' />
                <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./vehicle" }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <FaSearch style={{ marginRight: '5px' }} /> Search
                    </span>
                </Button>
            </Container>
            <caption style={{ fontSize: '20px', color: '#e98a26' }}>Units</caption>
            <Container fluid className="tableSection">
                
                <div className='table-responsive'>
                    <Table className="table-striped"  onClick={() => { window.location.pathname = "./vehicle" }}>
                        
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Unit</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Toyota Yaris</td>
                                <td>DM121</td>
                                <td>Rented</td>
                            </tr>  
                            <tr>
                                <td>2</td>
                                <td>Toyota RAV4</td>
                                <td>SKW93</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Kia Rio</td>
                                <td>CRF57</td>
                                <td>Workshop</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Toyota Yaris</td>
                                <td>NFT62</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Kia Picanto</td>
                                <td>UGT24</td>
                                <td>Onsite</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Kia Ceed SW</td>
                                <td>DLV49</td>
                                <td>Workshop</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Toyota RAV4</td>
                                <td>NFW81</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Kia Rio</td>
                                <td>HYU39</td>
                                <td>Onsite</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Toyota Yaris</td>
                                <td>MKJ17</td>
                                <td>Workshop</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Kia Picanto</td>
                                <td>PLR28</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Kia Ceed SW</td>
                                <td>XYZ86</td>
                                <td>Onsite</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Toyota RAV4</td>
                                <td>QWE45</td>
                                <td>Workshop</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Kia Rio</td>
                                <td>LMO72</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Toyota Yaris</td>
                                <td>BJH36</td>
                                <td>Onsite</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Kia Picanto</td>
                                <td>GDF59</td>
                                <td>Workshop</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Kia Ceed SW</td>
                                <td>PTR28</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Toyota RAV4</td>
                                <td>OPS21</td>
                                <td>Onsite</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Kia Rio</td>
                                <td>ZXC39</td>
                                <td>Workshop</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Toyota Yaris</td>
                                <td>VBN48</td>
                                <td>Rented</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Kia Picanto</td>
                                <td>KLM87</td>
                                <td>Onsite</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Container>
    )
}