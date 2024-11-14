import React from 'react';

const ContactUs = () => {
    const teamMembers = [
        {
            name: 'Muskan Goenka',
            phone: '7014784854',
            email: 'muskangoenka44@gmail.com'
        },
        {
            name: 'Najmus Seher',
            phone: '9019782323',
            email: 'najmuseher03@gmail.com'
        },
        {
            name: 'Nidhi C R',
            phone: '6360369921',
            email: 'nidhicr.187@gmail.com'
        }
    ];

    return (
        <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center justify-center font-sans text-gray-800">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center shadow-md">Contact Us</h1>
            <div className="flex flex-col space-y-8 max-w-2xl w-full">
                {teamMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-pink-100 via-blue-100 to-teal-100 rounded-xl shadow-lg hover:transform hover:translate-y-2 transition duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{member.name}</h2>
                        
                        {/* Phone Number */}
                        <div className="mb-2">
                            <p className="text-lg text-gray-700">{member.phone}</p>
                        </div>

                        {/* Email with no underline and mailto functionality */}
                        <div className="mb-2">
                            <p className="text-lg text-blue-600">
                                <a href={`mailto:${member.email}`} className="hover:underline">
                                    {member.email}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;
