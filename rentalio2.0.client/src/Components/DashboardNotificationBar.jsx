import '../App.css';

export function DashboardNotificationBar() {
    return (
        <div className="notificationBar">
            <h5 className="notificationItem">Notifications</h5>
            <h5 className="notificationItem">New e-mails</h5>
            <h5 className="notificationItem">New bookings</h5>
        </div>
    )
}