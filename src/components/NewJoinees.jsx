import React, { useState, useEffect } from 'react';

// Sample JSON data for new joinees
const sampleNewJoineesData = {
  count: 20,
  title: "New Comers of The Month",
  employees: [
    {
      id: 1,
      name: "Sithara Pramodini",
      department: "Fentons",
      branch: "Fentons IT",
      image: "sithara.jpeg"
    },
    {
      id: 2,
      name: "Pawani Maheshika",
      department: "fentons",
      branch: "Solar division",
      image: "pawani.jpeg"
    },
    {
      id: 3,
      name: "Thisath Padmin",
      department: "fentons",
      branch: "Solar division",
      image: "thisath.jpeg"
    },
    {
      id: 4,
      name: "Ridmi Jayasekara",
      department: "fentonst",
      branch: "Fentons IT",
      image: "ridmi.jpeg"
    }
  ]
};

const NewJoinees = () => {
  const [newJoineesData, setNewJoineesData] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For example:
    // fetch('/api/new-joinees')
    //   .then(response => response.json())
    //   .then(data => setNewJoineesData(data));

    // For now, we'll use our sample data with a slight delay to simulate API fetch
    setTimeout(() => {
      setNewJoineesData(sampleNewJoineesData);
    }, 300);
  }, []);

  // Show loading state while data is being fetched
  if (!newJoineesData) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-[11rem] relative pt-4 px-6 bg-white border border-gray-200 rounded-lg shadow-sm gridwidth">
        <div className="flex justify-center mb-2 items-center">
          <h5 className="text-xl font-normal leading-none text-gray-400 pt-[0.35rem] h-8 border-r-2 border-gray-300 pr-6">20</h5>
          <h5 className="text-xl font-normal leading-none text-[#ff6000] pl-6">New Comers of The Month</h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 pb-4 h-[8rem] overflow-y-auto custom-scrollbar"
          >
            {newJoineesData.employees.map((employee) => (
              <li key={employee.id} className="py-2 sm:py-3">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img src={employee.image} className="w-10 h-10 rounded-full object-cover"
                      alt={`${employee.name}`} />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {employee.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {employee.department}
                    </p>
                  </div>
                  <button className="inline-flex mr-4 items-center px-4 py-1 bg-orange-100 hover:bg-[#ff6000] hover:text-white rounded-full text-orange-500 text-xs font-medium transition-colors duration-200">
                    {employee.branch}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default NewJoinees;