import React, { useState } from 'react';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GrTrophy } from "react-icons/gr";
import { MdOutlineFestival } from "react-icons/md";
import EmpOfMonths from './EmpOfMonths';
import { IoPricetagsOutline } from "react-icons/io5";

const birthdayList = [
    { name: "Sithara Pramodini", department: "Fentons IT", branch: "Fentons IT", img:"sithara.jpeg" },
    { name: "Pawani Maheshika", department: "Solar division", branch: "Solar", img:"pawani.jpeg" },
    { name: "Sachini Ranaweera", department: "Fentons IT", branch: "Fentons IT", img:"sachini.jpeg" }
];

const anniversaryList = [
    { name: "Sithara Pramodini", department: "Fentons IT", branch: "2 Years", img:"sithara.jpeg" },
    { name: "Pawani Maheshika", department: "Solar division", branch: "5 Years", img:"pawani.jpeg" },
    { name: "Sachini Ranaweera", department: "Fentons IT", branch: "3 Years", img:"sachini.jpeg" }
];

const internationalDays = [
    { name: "Women's Day", img: "day1.jpg", branch: "7th March"},
];

const festGreetingList = [
    { name: "Sinhala and Tamil New Year", department: "Happy sinhala and tamil new year ✨🎉", branch: "Reply", img: "fest.jpg"},
];

const eventData = [
    { id: 1, icon: <LiaBirthdayCakeSolid className="icon text-3xl text-[#ff6000]" />, title: "Today Birthdays", count: 3, list: birthdayList },
    { id: 2, icon: <GrTrophy className="icon text-2xl ml-2 text-[#ff6000]" />, title: "Work Anniversary", count: 3, list: anniversaryList },
    { id: 3, icon: <IoPricetagsOutline className="icon text-2xl ml-2 text-[#ff6000]" />, title: "International Days", count: 2, list: internationalDays },
    { id: 4, icon: <MdOutlineFestival className="icon text-2xl ml-2 text-[#ff6000]" />, title: "Festival Greetings", count: 2, list: festGreetingList }
];


const SpecialEvents = () => {
    const [activeEvent, setActiveEvent] = useState(null);

    const toggleEvent = (id) => {
        setActiveEvent(activeEvent === id ? null : id);
    };

    return (
        <div className="w-full gridwidth max-w-sm bg-transparent ">
            <h5 className="text-xl font-normal leading-none text-[#ff6000] mb-4">Celebrations</h5>
            <EmpOfMonths />
            <ul className="space-y-3 relative mt-3">
                {eventData.map(event => (
                    <li key={event.id} className="relative">
                        <button 
                            onClick={() => toggleEvent(event.id)} 
                            className="card flex items-center p-4 text-base font-semibold text-gray-900 rounded-lg bg-white hover:shadow-xl w-full"
                        >
                            {event.icon}
                            <span className="flex-1 ms-8 whitespace-nowrap text-left">{event.title}</span>
                            <span className="px-4 py-[4px] bg-orange-100 hover:bg-[#ff6000] hover:text-white rounded-full text-orange-500 text-xs font-medium transition-colors duration-200">
                                {event.count}
                            </span>
                        </button>
                        <div 
                            className={`absolute left-0 w-full mt-2 bg-white p-4 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out overflow-hidden ${activeEvent === event.id ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}`}
                        >
                            {/* <h5 className="text-lg font-semibold mb-2">Event Details</h5> */}
                            <ul role="list" className="divide-y divide-gray-200">
                                {event.list.map((emp, index) => (
                                    <li key={index} className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="shrink-0">
                                                <img src={emp.img} className="w-10 h-10 rounded-full object-cover" alt="Profile" />
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate">{emp.name}</p>
                                                <p className="text-xs text-gray-500 truncate">{emp.department}</p>
                                            </div>
                                            <button className="inline-flex items-center px-4 py-1 bg-orange-100 hover:bg-[#ff6000] hover:text-white rounded-full text-orange-500 text-xs font-medium transition-colors duration-200">
                                                {emp.branch}
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpecialEvents;
