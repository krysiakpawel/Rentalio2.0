import React, { useState, useEffect, useRef } from "react";


export const DropdownMechanics = () => {
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
        { id: 1, label: "Sigurður Ólafsson" },
        { id: 2, label: "Ólafur Jónsson" },
    ];

    return (
        <div className='dropdown' ref={dropdownRef}>
            <button className='toggle'
                onClick={() => {
                    setDropDownToggled(!dropDownToggled);
                }}>
                {selectedOption ? selectedOption.label : "Select Mechanic"}
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