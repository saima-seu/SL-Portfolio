import React from 'react'


const projects = [
    {
        id:1,
        name:" Student Management System (Django)",
        github:"https://github.com/saima-seu/student_management_system-main"


    },

    {
        id:2,
        name:"  TodayOffer - All-in-One Deals & Discounts Aggregator App",
        github:"https://github.com/saima-seu/TodayOffer"


    },

]
const Projects = () => {

  return (
    <div className='bg-black text-white py-20' id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='txet-4xl font-bold text-center mb-12'>My Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) =>(
                <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hober:scale-105">
                   <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover"/>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-4">{project.id}</p>
                    <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            ))}
       </div>
    </div>
 </div>
  )
}

export default Projects