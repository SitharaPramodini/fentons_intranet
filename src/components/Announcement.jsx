import React, { useState, useEffect } from 'react';

const Announcement = () => {
    // Sample announcement data - replace with your actual data
    const announcements = [
        {
            id: 1,
            title: "Hayleys Fentons Celebrates Excellence at CNCI Awards 2024",
            // description: "Join us for the exclusive event featuring special discounts on all premium appliances.",
            imageUrl: "announcement2.jpg"
        },
        {
            id: 2,
            title: "ARE YOU WEARING YOUR SAFETY HELMET CORRECTLY?",
            description: "Safety helmets are a critical safeguard against severe head injuries, and their protective function is fully realised only when worn properly.",
            // imageUrl: "announcement.jpg"
        },
        {
            id: 3,
            title: "Hayleys Family Fun Day - Don't Miss Out!",
            // description: "Celebrate the season with up to 40% off on selected Fentons products. Limited time offer.",
            // imageUrl: "announcement.jpg"
        },
        {
            id: 4,
            title: "Hayleys Family Shop I Pre-order Your Fresh Veggie Pack Now - Reminder!",
            // description: "We've expanded our service network. Find the nearest Fentons service center in your area.",
            imageUrl: "announcement1.jpg"
        },
        {
            id: 2,
            title: "Introducing Smart Body Scales",
            description: "Introducing Smart Body Scales – 30% Off | Exclusive Offer for Hayleys Staff",
            // imageUrl: "announcement.jpg"
        },
        {
            id: 3,
            title: "Hayleys Sports Awards & Music Night 2025 - Registrations are Closing Tomorrow!",
            // description: "Celebrate the season with up to 40% off on selected Fentons products. Limited time offer.",
            // imageUrl: "announcement.jpg"
        },
        // {
        //     id: 5,
        //     title: "Customer Appreciation Day",
        //     description: "Thank you for your loyalty! Join us for special in-store events and exclusive member offers.",
        //     // imageUrl: "announcement.jpg"
        // },
        // {
        //     id: 3,
        //     title: "Holiday Season Sale",
        //     description: "Celebrate the season with up to 40% off on selected Fentons products. Limited time offer.",
        //     // imageUrl: "announcement.jpg"
        // },
        {
            id: 4,
            title: "Workplace Safety & Fire Protection Awareness Program ",
            // description: "We've expanded our service network. Find the nearest Fentons service center in your area.",
            imageUrl: "announcement3.jpg"
        },
    ];

    return (
        <div className='h-full pb-5'>
            
            {/* Red button at the top with text */}
            <h5 class="text-xl font-normal leading-none text-[#ff6000] mb-4">Announcements</h5>

            {/* Scrollable area for notification cards */}
            <div className="bg-white scrollable w-full overflow-hidden">
                {announcements.map((announcement) => (
                    <div
                        key={announcement.id}
                        className={`border-b border-gray-200 last:border-b-0 last:mb-0 bg-white ${announcement.imageUrl ? '' : 'py-4'
                            }`}
                    >
                        {/* Image and Description Overlay */}
                        {announcement.imageUrl ? (
                            <div className="relative">
                                <img
                                    src={announcement.imageUrl}
                                    alt={announcement.title}
                                    className="w-full object-cover rounded-b-xl"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                                    <h3 className="text-md font-semibold">{announcement.title}</h3>
                                    <p className='text-sm'>{announcement.description}</p>
                                </div>
                            </div>
                        ) : (
                            // Description when no image is present
                            <div className="px-4">
                                <div className='flex justify-between items-center'>
                                    <h3 className="w-3/5 text-sm font-semibold mb-2">{announcement.title}</h3>
                                    <button className="px-4 py-[4px] bg-[#31c48d29] hover:bg-[#ff6000] hover:text-white rounded-full text-orange-500 text-xs font-medium transition-colors duration-200">
                                        Read More
                                    </button>
                                </div>
                                <p className="text-gray-600 text-xs">{announcement.description}</p>
                            </div>
                        )}
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Announcement;