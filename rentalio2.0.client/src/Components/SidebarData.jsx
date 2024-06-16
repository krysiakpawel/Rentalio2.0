import { FaHome } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { BiSolidCarMechanic } from "react-icons/bi";

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <FaHome />,
        link: "/"
    },
    {
        title: "Bookings",
        icon: <FaWpforms />,
        link: "/bookings"
    },
    {
        title: "Fleet Management",
        icon: <FaCarSide />,
        link: "/fleetManagement"
    },
    {
        title: "Deliveries",
        icon: <CiBoxList />,
        link: "/deliveries"
    },
    {
        title: "Fleet",
        icon: <BiSolidCarGarage />,
        link: "/fleet"
    },
    {
        title: "Maintenance",
        icon: <BiSolidCarMechanic />,
        link: "/maintenance"
    },
]