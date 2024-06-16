import '../App.css';
import { FleetUtlizationData } from "./FleetUtilizationData";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export function FleetUtilizationDiag() {
    return (
        <div className="fleetUtilizationDiag">
            <div className="dashboardTitle"> Fleet Utilization</div>
        <LineChart width={520} height={200} data={FleetUtlizationData}>
                <Line type="monotone" dataKey="fleetUtilization" stroke="#e98a26" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}
