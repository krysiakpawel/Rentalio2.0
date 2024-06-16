import '../App.css';
import ReactSearchBox from "react-search-box";
import { IoMdSearch } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

export function SearchBooking() {
    return (
        <div className="searchBooking">
            <div className="dashboardTitle"> Search</div>
            <Container fluid className="search-bar">
                <ReactSearchBox style={{ width: '400px' }} placeholder="Search booking..." />
                <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./booking" }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <FaSearch style={{ marginRight: '5px' }} /> Search
                    </span>
                </Button>
            </Container>
        </div>
    )
}






                