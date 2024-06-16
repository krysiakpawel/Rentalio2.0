import '../App.css';
import { DeliveryOverviewData } from "./DeliveryOverviewData";

export function DeliveryOverview() {
    return (
        <div className="deliveryOverview">
            <div className="dashboardTitle"> Upcoming deliveries</div>
            <ul>
                {DeliveryOverviewData.map((val, key) => {
                    return (
                        <li key={key} className="bookingItem" onClick={() => { window.location.pathname = "./booking" }}>
                            <div className="icons">{val.icon}</div>
                            <div className="title">{val.title}</div>
                            <div className="time"> {val.time}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}