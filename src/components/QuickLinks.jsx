import React, { useState } from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { GoFileDirectoryFill } from "react-icons/go";
import { TbBulbFilled } from "react-icons/tb";
import { GiConversation } from "react-icons/gi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { LuMonitorCheck } from "react-icons/lu";
import { SlOrganization } from "react-icons/sl";
import { GrResources } from "react-icons/gr";
import { MdOutlineMiscellaneousServices, MdClose } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { FaHandsHelping } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { RiBankLine } from "react-icons/ri";

const QuickLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const links = [
    { 
      icon: <FaHandHoldingDollar className="mx-auto"/>, 
      label: "Finance",
      badge: 1,
      content: "Access all services provided by our organization."
    },
    { 
      icon: <FaUsers className="mx-auto"/>, 
      label: "HR",
      content: "Find contact information for all employees and departments within the organization."
    },
    { 
      icon: <GrAnnounce className="mx-auto"/>, 
      label: "Marketing",
      content: "Submit your ideas and suggestions to help improve our workplace and processes."
    },
    { 
      icon: <MdOutlineInventory2 className="mx-auto"/>, 
      label: "My Inventory",
      content: "Find answers to commonly asked questions about policies, procedures, and company resources."
    },
    { 
      icon: <RiCalendarTodoFill className="mx-auto"/>, 
      label: "Bookings", 
      badge: 5,
      content: "Schedule meetings, book conference rooms, and manage your calendar appointments."
    },
    { 
      icon: <GrDeliver className="mx-auto"/>, 
      label: "Supply chain", 
      badge: 2,
      content: "View internal job postings, refer candidates, and track your job applications."
    },
    { 
      icon: <IoDocumentAttach className="mx-auto"/>, 
      label: "Documents",
      content: "Access important documents including policies, procedures, forms, and templates."
    },
    { 
      icon: <FaHandsHelping className="mx-auto"/>, 
      label: "Help Desk",
      content: "Find learning resources, training materials, and tools to help you succeed in your role."
    },
  ];

  const openModal = (link) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset selected link after animation completes
    setTimeout(() => {
      setSelectedLink(null);
    }, 300);
  };

  return (
    <div className="w-full relative md:mt-0 mt-4">
      <h5 className="text-xl font-normal leading-none mb-4 text-orange-500 w-full">
        Quick Links
      </h5>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            onClick={() => openModal(link)}
            className="relative text-center bg-white shadow-lg rounded-lg p-4 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out group cursor-pointer"
          >
            {/* Notification Badge */}
            {link.badge && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-orange-100 text-orange-500 text-xs font-bold px-2 py-1 rounded-full group-hover:bg-white">
                {link.badge}
              </span>
            )}

            <div className="text-orange-500 text-4xl mx-auto transition-transform duration-300 ease-out group-hover:rotate-[-15deg] group-hover:scale-125 group-hover:text-white">
              {link.icon}
            </div>
            <p className="text-xs mt-2">{link.label}</p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className={`bg-white rounded-lg shadow-xl w-[60%] overflow-hidden transform transition-all duration-300 animate-modal-pop ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedLink && (
              <>
                {/* Modal Header */}
                <div className="bg-orange-500 text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">
                      {selectedLink.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {selectedLink.label}
                    </h3>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-white hover:bg-orange-600 rounded-full p-2 transition-colors"
                  >
                    <MdClose className="text-xl" />
                  </button>
                </div>
                
                {/* Modal Body */}
                <div className="p-6">
                  {/* <p className="text-gray-700 mb-4">{selectedLink.content}</p> */}
                  
                  {/* Cards Grid in the style from the image */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <MdCardTravel className="text-2xl" />,
                        title: "Job Opening",
                        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                      },
                      {
                        icon: <MdFlight className="text-2xl" />,
                        title: "travel document",
                        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                      },
                      {
                        icon: <RiBankLine className="text-2xl" />,
                        title: "bank garantee",
                        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                      },
                      {
                        icon: <LuBadgeCheck className="text-2xl" />,
                        title: "warranty",
                        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                      },
                      {
                        icon: <MdFlight className="text-2xl" />,
                        title: "travel document",
                        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                      },
                      {
                        icon: <MdCardTravel className="text-2xl" />,
                        title: "Job Opening",
                        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                      }
                    ].map((card, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg p-5 relative hover:shadow-md transition-shadow border-2 border-gray-200">
                        {/* orange 5ccent bar */}
                        <div className="absolute left-0 top-5 h-[40%] ml-[-7px] w-[0.4rem] bg-orange-500 rounded-l-lg"></div>
                        
                        {/* Card content */}
                        <div className="pl-3">
                          <div className="bg-white p-3 rounded-full inline-block">
                            <div className="text-orange-500 ">{card.icon}</div>
                          </div>
                          <h3 className="text-sm font-medium">{card.title}</h3>
                          <a className="inline-flex items-center text-xs text-gray-600 hover:text-gray-800">
                            Learn more 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 ml-1 text-orange-500 " viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Notifications Section */}
                  {selectedLink.badge && (
                    <div className="bg-orange-50 p-3 rounded-lg mt-6">
                      <p className="text-sm font-medium text-orange-600">
                        You have {selectedLink.badge} pending {selectedLink.badge === 1 ? 'notification' : 'notifications'}
                      </p>
                    </div>
                  )}
                </div>
                
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickLinks;