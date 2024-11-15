import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Pyhton ATM Project ',
    description: 'A full-featured ATM System Using Python',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['Python'],
    github: 'https://github.com/OmJejurkar/Main-ATM-Project',
    live: 'https://example.com'
  },
  {
    title: 'Parent Teacher Conectia Web Application',
    description: 'This project Connects Parent, Teacher and Student for Student Hostile Development',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['HTML5', 'JavaScript', 'MySQL', 'PHP','Tailwind CSS'],
    github: 'https://github.com/OmJejurkar/PTConnectia.git',
    live: 'https://example.com'
  },
  {
    title: 'Galaxy Store Website',
    description: 'This website was created under the Subject Digital Marketing for the Galaxy Store',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['React JS'],
    github: 'https://github.com/OmJejurkar/GalaxyComputers.git',
    live: 'https://example.com'
  },
  {
    title: 'Shraddha Honda Showroom Website',
    description: 'This website was created under the Subject Minor Project  for the Shraddha Honda ',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['React JS'],
    github: '#',
    live: 'https://example.com'
  },
  {
    title: 'Tech Mantra Website',
    description: 'This website was created for taking registration for National Level Hackathon Tech Mantra ',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['React JS'],
    github: 'https://github.com/SanjivaniDeveloperStudentClub/Techmantra.git',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}