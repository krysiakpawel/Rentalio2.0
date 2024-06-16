import Container from 'react-bootstrap/Container';
import { DropdownMail } from '../Components/DropdownMail';
import { FaSearch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";

export const Mail = () => {
    return (
        <Container fluid className="subpage">
            <Container fluid style={{ display: 'flex', flexDirection: 'column', heigth: '90vh', width: '86vw', backgroundColor: '#2d2d2d', justifyContent: 'flex-start' }}>
                <Container fluid style={{ display: 'flex', flexDirection: 'row', heigth: '100px', width: '86vw', justifyContent: 'center', margin: '20px' }}>
                    <text style={{ fontSize: '17px', color: 'white', margin: '5px' }}>Send e-mail to: </text>
                    <DropdownMail/>
                </Container>
                <Container fluid style={{ marginTop: '60px', marginBottom: '80px', marginRight: '150px', marginLeft: '150px', display: 'flex', flexDirection: 'column', heigth: '90vh', width: 'auto', justifyContent: 'flex-start', alignItem: 'flex-start'}}>
                    <text style={{ fontSize: '17px', color: 'white', margin: '5px' }} defaultValue="Important Weather Warning: Storm Alert">Subject </text>
                    <textarea style={{ height: '40px', marginBottom: '50px', backgroundColor: 'grey', color:'white', paddingLeft: '30px', paddingRight: '30px', padding: '7px'}}></textarea>
                    <text style={{ fontSize: '17px', color: 'white', margin: '5px' }}>Email </text>
                    <textarea style={{ height: '400px', backgroundColor: 'grey', color: 'white', padding: '50px' }} defaultValue="Dear Valued Customer,

                    We hope this message finds you well. We are writing to inform you of an important weather warning for our region. A severe storm is expected to impact the area over the coming days, bringing strong winds, heavy rain, and potentially hazardous driving conditions.
                    
                    For your safety and convenience, we urge all customers to take the following precautions:
                    
                        Check Weather Updates Regularly: Stay informed about the latest weather conditions and forecasts. Local authorities and weather services will provide timely updates.
                        Avoid Non-Essential Travel: If possible, delay any non-essential travel plans until the storm has passed.
                        Drive with Caution: If you must travel, please drive with extreme caution. Ensure your vehicle is in good condition, and keep a safe distance from other vehicles.
                        Prepare for Emergencies: Make sure your vehicle is equipped with emergency supplies, such as a flashlight, blankets, food, water, and a fully charged mobile phone.
                    
                    For more detailed information and updates, we recommend visiting the following websites:
                    
                        Road Conditions and Safety: www.road.is
                        Travel Safety Information: www.safetravel.is
                    
                    We understand that this may cause some inconvenience, but your safety is our top priority. Please do not hesitate to contact our office if you have any questions or require assistance.
                    
                    Stay safe and take care,
                    
                    Best regards,"></textarea>
                </Container>
                <Container fluid style={{ display: 'flex', flexDirection: 'row', marginRight: '180px', justifyContent: 'flex-end' }}>
                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./" }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <RiArrowGoBackFill style={{ marginRight: '5px' }} /> Dashboard
                        </span>
                    </Button>
                    <Button variant="secondary" className='button' onClick={() => { window.location.pathname = "./mail" }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <RiMailSendLine style={{ marginRight: '5px' }} /> Send
                        </span>
                    </Button>
                </Container>
                


            </Container>
        </Container>
    )
}