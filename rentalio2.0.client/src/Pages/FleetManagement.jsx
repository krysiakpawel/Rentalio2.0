import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";


export const FleetManagement = () => {
    return (

        <div className='fleetManagement'>
            <DayPilotScheduler onClick={() => { window.location.pathname = "./booking" }}
                resources={[
                    { name: "Toyota Yaris", license: "DM121", id: "A" },   
                    { name: "Toyota Yaris", license: "ESP14", id: "B" }, 
                    { name: "Toyota Yaris", license: "YPP84", id: "C" }, 
                    { name: "Kia Ceed SW", license: "GEU55", id: "D" }, 
                    { name: "Kia Ceed SW", license: "NPX87", id: "E" }, 
                    { name: "Kia Ceed SW", license: "JOU59", id: "F" }, 
                    { name: "Kia Rio", license: "RXF67", id: "G" }, 
                    { name: "Kia Rio", license: "BPG21", id: "H" }, 
                    { name: "Toyota Aygo", license: "JET16", id: "I" }, 
                    { name: "Toyota Aygo", license: "OHF00", id: "J" }, 
                    { name: "Toyota Aygo", license: "FPK82", id: "K" }, 
                    { name: "Toyota Aygo", license: "TUP34", id: "L" }, 
                    { name: "Mercedes Vito", license: "GRF34", id: "M" }, 
                    { name: "Mercedes Vito", license: "YXR45", id: "N" }, 
                    { name: "Toyota Land Cruiser", license: "EXZ32", id: "O" }, 
                    { name: "Toyota Land Cruiser", license: "BRD31", id: "P" }, 
                    { name: "Toyota Land Cruiser", license: "HFY73", id: "Q" }, 
                    { name: "Nissan X-Trail", license: "NZR45", id: "R" }, 
                    { name: "Nissan X-Trail", license: "PTU76", id: "S" }, 
                    { name: "Nissan X-Trail", license: "DSR98", id: "T" }, 
                    { name: "Volvo V50", license: "RJ534", id: "U" }, 
                ]}
                events={[
                    {
                        id: 1,
                        text: "Booking #43293",
                        start: "2024-06-02T00:00:00",
                        end: "2024-06-08T00:00:00",
                        resource: "E",
                        backColor: "lightgreen",
                        plus: false
                    },
                    {
                        id: 2,
                        text: "Booking #43294",
                        start: "2024-06-06T09:00:00",
                        end: "2024-06-12T14:00:00",
                        resource: "H",
                        backColor: "lightgreen",
                        plus: true
                    },
                    {
                        id: 3,
                        text: "Booking #43295",
                        start: "2024-06-02T00:00:00",
                        end: "2024-07-08T00:00:00",
                        resource: "C",
                        backColor: "lightpink",
                        plus: true
                    },
                    {
                        id: 4,
                        text: "Booking #43296",
                        start: "2024-06-15T00:00:00",
                        end: "2024-06-22T00:00:00",
                        resource: "A",
                        backColor: "lightgreen",
                        plus: true
                    },
                    {
                        id: 5,
                        text: "Booking #43297",
                        start: "2024-06-11T00:00:00",
                        end: "2024-06-27T00:00:00",
                        resource: "D",
                        backColor: "lightpink",
                        plus: true
                    },
                    {
                        id: 6,
                        text: "Booking #43298",
                        start: "2024-06-01T00:00:00",
                        end: "2024-06-03T00:00:00",
                        resource: "J",
                        backColor: "lightpink",
                        plus: true
                    },
                    {
                        id: 7,
                        text: "Booking #43299",
                        start: "2024-06-09T00:00:00",
                        end: "2024-07-14T00:00:00",
                        resource: "I",
                        backColor: "lightgreen",
                        plus: true
                    },
                    {
                        id: 8,
                        text: "Booking #43300",
                        start: "2024-06-02T00:00:00",
                        end: "2024-06-15T00:00:00",
                        resource: "P",
                        backColor: "lightgreen",
                        plus: true
                    },
                    
                ]}

                rowHeaderColumns={[
                    { name: "Model" },
                    { name: "License Number", display: "license", width: 80 },

                ]}
                cellWidth={60}
                eventHeight={40}
                height='auto'
                startDate={DayPilot.Date.today().firstDayOfMonth()}
                days = {DayPilot.Date.today().daysInMonth()}
                scale = { "Day"}
                timeHeaders = {
                        [
                        { groupBy: "Month" },
                        { groupBy: "Day", format: "d" }
                     ]}/>
        </div>
    );
};