import React, { useEffect, useState } from 'react';
import { teamData } from '../data/team';

export const OurTeams = () => {
  // State to track the selected team member
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    if (teamData.length > 0) {
      setSelectedTeam(teamData[0]); // Set the first team as default
    }
  }, []);

  // Function to handle option click
  const handleOptionClick = (team) => {
    setSelectedTeam(team);
  };

  return (
   <div className='flex-col space-y-4 bg-white  rounded-2xl'>
    <h2 className="text-3xl md:text-5xl font-semibold text-center">Our Teams</h2>
    <div className="flex p-4">
      <div className="w-1/3 p-4 text-lg text-center font-semibold">
        <ul className="space-y-4">
          {teamData.map((team) => (
            <li
              key={team.id}
              className={`cursor-pointer ${
                selectedTeam?.id === team.id
                  ? 'text-rblack-400'
                  : 'text-black'
              } hover:text-rblack-400`} 
              onClick={() => handleOptionClick(team)}
            >
              {team.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 relative">
        <div className='pt-4 md:pt-6 lg:pt-8 pl-4'>
            <div class=" absolute top-0 left-0  text-4xl md:text-6xl lg:text-8xl text-rblack-400/60 transform rotate-[1deg]">
                “
            </div>  
            <div>
                {selectedTeam ? (
                <div className='flex-col text-center'>
                    <p className="mb-4 text-gray-600 text-xs lg:text-sm ">{selectedTeam.description}</p>
                    <div className=' flex justify-center h-56 w-full'>
                        <img src={selectedTeam.imageUrl} alt={selectedTeam.name} className="object-contain" />
                    </div>
                </div>
                ) : (
                <p>Select a team member to see their details.</p>
                )}
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};
