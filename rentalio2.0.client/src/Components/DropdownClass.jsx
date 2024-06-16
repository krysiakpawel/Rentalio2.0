import  { useState , useEffect, useRef} from "react";


export const DropdownClass = () => {
    const [dropDownToggled, setDropDownToggled] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        function handler(e) {
            if (dropdownRef.current) {
                if (!dropdownRef.current.contains(e.target)) {
                    setDropDownToggled(false);
                }
            }
        }
        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    });

    const dropDownOptions = [
        {
            id: 1,
            label: "Toyota Aygo or similar",
        },
        {
            id: 2,
            label: "Toyota Yaris or similar",
        },
        {
            id: 3,
            label: "Toyota Rav4 or similar",
        },
        {
            id: 4,
            label: "Kia Picanto or similar",
        },
        {
            id: 5,
            label: "Kia Rio or similar",
        },
        {
            id: 6,
            label: "Kia Ceed SW or similar",
        },
        {
            id: 7,
            label: "Toyota Land-Cruiser or similar",
        },
        {
            id: 8,
            label: "Mercedes-Benz Vito or similar",
        },
    ];
    return (
        <div className='dropdown' ref={dropdownRef}>
            <button className='toggle'
                onClick={() => {
                    setDropDownToggled(!dropDownToggled);
                }}>
                {selectedOption ? selectedOption.label : "Select Class"}
            </button>
            <div className={`options ${dropDownToggled ? "visible" : ""}`}>
                {dropDownOptions.map((option) => (
                    <button
                        key={option.id}
                        className={selectedOption === option ? "selected" : ""}
                        onClick={() => {
                            setSelectedOption(option);
                            setDropDownToggled(false);
                        }}>
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};