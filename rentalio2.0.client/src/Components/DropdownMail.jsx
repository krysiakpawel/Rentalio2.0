import React, { useState, useEffect, useRef } from "react";


export const DropdownMail = () => {
    const [dropDownToggled, setDropDownToggled] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        function handler(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropDownToggled(false);
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const dropDownOptions = [
        { id: 1, label: "Ongoing bookings" },
        { id: 2, label: "Bookings starting in 7 days" },
        { id: 3, label: "Bookings ended 7 days ago" },
    ];

    return (
        <div className='dropdown' ref={dropdownRef}>
            <button className='toggle'
                onClick={() => {
                    setDropDownToggled(!dropDownToggled);
                }}>
                {selectedOption ? selectedOption.label : "Select bookings"}
            </button>
            <div className={`options ${dropDownToggled ? "visible" : ""}`}>
                {dropDownOptions.map((option, index) => (
                    <button
                        key={option.id}
                        className={selectedOption === option ? "selected" : ""}
                        onClick={() => {
                            setSelectedOption(option);
                            setDropDownToggled(false);
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};