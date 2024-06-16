import  { useState, useEffect, useRef } from "react";

export const DropdownUnits = () => {
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
        { id: 1, label: "DM121" },
        { id: 2, label: "RJ534" },
        { id: 3, label: "GOG45" },
        { id: 4, label: "ARR58" },
        { id: 5, label: "GEU55" },
        { id: 6, label: "JOU59" },
        { id: 7, label: "TUP34" },
        { id: 8, label: "BRD31" },
        { id: 9, label: "EXZ32" },
        { id: 10, label: "YPP83" },
        { id: 11, label: "ESP14" },
        { id: 12, label: "NZR45" },
    ];

    return (
        <div className='dropdown' ref={dropdownRef}>
            <button className='toggle'
                onClick={() => {
                    setDropDownToggled(!dropDownToggled);
                }}>
                {selectedOption ? selectedOption.label : "Select Unit"}
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