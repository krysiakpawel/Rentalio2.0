import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Layout } from './Layout/Layout.jsx';
import { Bookings } from './Pages/Bookings.jsx';
import { FleetManagement } from './Pages/FleetManagement.jsx';
import { Deliveries } from './Pages/Deliveries.jsx';
import { Fleet } from './Pages/Fleet.jsx';
import { Prices } from './Pages/Prices.jsx';
import { Maintenance } from './Pages/Maintenance.jsx';
import { AddBooking } from './Pages/AddBooking.jsx';
import { Results } from './Pages/Results.jsx';
import { Booking } from './Pages/Booking.jsx';
import { Vehicle } from './Pages/Vehicle.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddIssue } from './Pages/AddIssue.jsx';
import { AddWorkOrder } from './Pages/AddWorkOrder.jsx';
import { Issue } from './Pages/Issue.jsx';
import { WorkOrder } from './Pages/WorkOrder.jsx';
import { Mail } from './Pages/Mail.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/bookings' element={<Layout />}>
                    <Route index element={<Bookings />} />
                </Route>
                <Route path='/fleetManagement' element={<Layout />}>
                    <Route index element={<FleetManagement />} />
                </Route>
                <Route path='/deliveries' element={<Layout />}>
                    <Route index element={<Deliveries />} />
                </Route>
                <Route path='/fleet' element={<Layout />}>
                    <Route index element={<Fleet />} />
                </Route>
                <Route path='/prices' element={<Layout />}>
                    <Route index element={<Prices />} />
                </Route>
                <Route path='/maintenance' element={<Layout />}>
                    <Route index element={<Maintenance />} />
                </Route>
                <Route path='/addBooking' element={<Layout />}>
                    <Route index element={<AddBooking />} />
                </Route>
                <Route path='/results' element={<Layout />}>
                    <Route index element={<Results />} />
                </Route>
                <Route path='/booking' element={<Layout />}>
                    <Route index element={<Booking />} />
                </Route>
                <Route path='/vehicle' element={<Layout />}>
                    <Route index element={<Vehicle />} />
                </Route>
                <Route path='/issue' element={<Layout />}>
                    <Route index element={<Issue />} />
                </Route>
                <Route path='/addIssue' element={<Layout />}>
                    <Route index element={<AddIssue />} />
                </Route>
                <Route path='/workOrder' element={<Layout />}>
                    <Route index element={<WorkOrder />} />
                </Route>
                <Route path='/addWorkOrder' element={<Layout />}>
                    <Route index element={<AddWorkOrder />} />
                </Route>
                <Route path='/mail' element={<Layout />}>
                    <Route index element={<Mail />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>,
)

