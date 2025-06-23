import React, { useState, useEffect, useCallback } from 'react';

const EmpOfMonths = () => {
  // Sample employee data - replace with your actual data
  const employees = [
    {
      id: 1,
      name: "Nipuni Udari",
      branch: "FIT",
      description: "Recognized for outstanding performance",
      image: "nipuni.jpeg" // Using placeholder since we don't have actual images
    },
    {
      id: 2,
      name: "Thisath Padmin",
      branch: "Solar",
      description: "Recognized for outstanding performance",
      image: "thisath.jpeg"
    },
    {
      id: 3,
      name: "Pawani Maheshika",
      branch: "Solar",
      description: "Recognized for outstanding performance",
      image: "pawani.jpeg"
    },
    {
      id: 4,
      name: "Ridmi Jayasekara",
      branch: "Solar",
      description: "Recognized for outstanding performance",
      image: "ridmi.jpeg"
    },
    {
      id: 5,
      name: "Sachini Ranaweera",
      branch: "FIT",
      description: "Recognized for outstanding performance",
      image: "sachini.jpeg"
    },
    {
      id: 6,
      name: "Sithara Pramodini",
      branch: "FIT",
      description: "Recognized for outstanding performance",
      image: "sithara.jpeg"
    }
  ];

  // State to track current card index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track if auto-sliding is paused (when user hovers)
  const [isPaused, setIsPaused] = useState(false);

  // Handler for previous button
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? employees.length - 1 : prevIndex - 1
    );
  }, [employees.length]);

  // Handler for next button
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === employees.length - 1 ? 0 : prevIndex + 1
    );
  }, [employees.length]);

  // Auto-slide functionality
  useEffect(() => {
    let intervalId;
    
    if (!isPaused) {
      intervalId = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }
    
    // Cleanup interval on component unmount or when isPaused changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, handleNext]);

  return (
    <div 
      className="relative h-40 w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-101 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button 
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 z-10 hover:bg-[#f3f4f6a1]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Card Container */}
      <div className="overflow-hidden h-full">
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {employees.map((employee) => (
            <div 
              key={employee.id} 
              className="min-w-full h-full"
            >
              <div className="flex bg-transparent rounded-lg overflow-hidden h-full">
                {/* Employee Image */}
                <img 
                  src={employee.image} 
                  alt={employee.name} 
                  className="w-1/3 h-full object-cover"
                />
                
                {/* Employee Details */}
                <div className="py-3 pl-6 text-left w-2/3">
                  <h3 className="text-base font-semibold">{employee.name}</h3>
                  <p className="py-1 pr-6 text-xs">{employee.description}</p>
                  <p className="text-gray-600">
                    <span className="text-xs font-medium">Department: {employee.branch}</span>
                  </p>
                  <div className="mb-1">
                    <span className="inline-block bg-orange-100 text-orange-500 py-0.5 px-5 rounded-full text-xs font-medium">
                      Star Performer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Arrow */}
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 z-10 hover:bg-[#f3f4f6a1]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */} 
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1.5 pb-2">
        {employees.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 w-1.5 rounded-full ${
              currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmpOfMonths;