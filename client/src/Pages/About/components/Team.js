import React, { useState, useEffect } from 'react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Kimani",
      role: "Co-Founder & Chief Data Scientist",
      primaryImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      alternateImages: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
      ]
    },
    {
      id: 2,
      name: "Michael Ochieng",
      role: "Co-Founder & AI Engineering Lead",
      primaryImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      alternateImages: [
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
      ]
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      role: "Business Intelligence Analyst",
      primaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      alternateImages: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
      ]
    },
    {
      id: 4,
      name: "David Mwangi",
      role: "Machine Learning Engineer",
      primaryImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      alternateImages: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
      ]
    }
  ];

  // Image cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        teamMembers.forEach(member => {
          if (hoveredMember === member.id) {
            newIndex[member.id] = ((newIndex[member.id] || 0) + 1) % member.alternateImages.length;
          }
        });
        return newIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hoveredMember]);

  const handleMouseEnter = (memberId) => {
    setHoveredMember(memberId);
    setCurrentImageIndex(prev => ({ ...prev, [memberId]: 0 }));
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-25 pb-25 px-5 sm:px-8 xl:px-20 2xl:px-20 3xl:px-40 4xl:px-60 max-w-screen-2xl relative">
      
      {/* Header */}
      <div className="text-center w-full xl:w-3/5 mx-auto mb-20">
        <p className="font-bold uppercase text-red-500 mb-4">
          MEET THE TEAM
        </p>
        <h2 className="text-3xl font-semibold my-4 uppercase text-gray-900">
          The InfoBridge Collective
        </h2>
        <div className="prose max-w-none text-gray-600 leading-relaxed">
          <p>
            InfoBridge's strength lies in our collective of data experts, where each member brings an extra dimension to the company.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:h-[400px]">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative overflow-hidden rounded-md cursor-pointer w-full h-[400px] group"
            onMouseEnter={() => handleMouseEnter(member.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Primary Image */}
            <img
              src={member.primaryImage}
              alt={member.name}
              className={`absolute w-full h-full object-cover z-10 transition-opacity duration-500 ${
                hoveredMember === member.id ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Alternate Images Container */}
            <div className="absolute w-full h-full">
              {member.alternateImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${member.name} ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredMember === member.id && currentImageIndex[member.id] === index
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Name and Role Overlay */}
            <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-lg z-20 transform transition-transform duration-300 group-hover:translate-y-0">
              <p className="font-semibold mb-0 text-gray-900 text-sm">
                {member.name}
              </p>
              <p className="text-xs mb-1 text-gray-600">
                {member.role}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
              hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;