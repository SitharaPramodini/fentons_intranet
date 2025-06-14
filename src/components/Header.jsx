import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevent closing when clicking the button
        setIsOpen(!isOpen);
    };

    const closeMenu = (e) => {
        if (!e.target.closest('#sidebar') && !e.target.closest('#menu-button')) {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative w-full" onClick={closeMenu}>
            <nav className="absolute top-0 left-0 w-full bg-transparent z-10 mt-2">
                <div className=" flex flex-wrap items-center justify-between mx-auto px-3">
                    <a href="https://www.hayleysfentons.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="md:flex hidden items-center text-sm bg-[#ecedef7a] shadow-lg rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <p className='px-4 font-semibold'>Sithara Pramodini</p>
                            <img className="w-8 h-8 rounded-full object-cover" src="sithara.jpeg" alt="user photo" />
                        </button>
                        <button data-collapse-toggle="navbar-user" id="menu-button" onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white font-bold rounded-lg md:hidden hover:bg-[#e784477e] focus:outline-none ">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li><a href="#" className="block py-2 px-3 font-medium text-base text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-gray-200 md:p-0">Home</a></li>
                            <li className="relative">
  <button
    onClick={() => setDropDownIsOpen(prev => !prev)}
    className="block py-2 px-3 font-medium text-base text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-gray-200 md:p-0"
  >
    Services
  </button>
  {dropDownIsOpen && (
    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Documents</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Directory</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Suggestions</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">FAQ center</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Appointments</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Job portal</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Org chart</a></li>
      <li><a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#ff6000] hover:bg-orange-200 hover:rounded-lg">Resources</a></li>
    </ul>
  )}
</li>
                            <button type="button" class=" px-6 rounded-full shadow-md bg-white hover:shadow-xl font-medium text-base transition-colors duration-200 z-10">

                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`fixed z-10 top-0 left-0 h-full w-60 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} id="sidebar">
                <ul className="p-6 space-y-4">
                    <li><img className='w-28 mx-auto' src='logo.png' /></li>
                    <li><button type="button" className="flex mx-auto items-center text-sm bg-[#ecedef7a] shadow-lg rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <p className='px-4 font-semibold'>Sithara Pramodini</p>
                        <img className="w-8 h-8 rounded-full" src="emp.jpg" alt="user photo" />
                    </button></li>
                    <li><a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Home</a></li>
                    <li className="relative group">
                        <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Services</a>
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                            <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sub Service 1</a></li>
                            <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sub Service 2</a></li>
                            <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sub Service 3</a></li>
                        </ul>
                    </li>

                </ul>
            </div>

            <img src="banner.png" className="w-full" alt="banner" />
        </div>
    );
};

export default Header;
