import { Code2, Palette, Database, Terminal } from 'lucide-react';

const skills = {
  'Frontend Development': {
    icon: Code2,
    skills: ['React', 'Tailwind CSS', 'Next.js']
  },
  'Backend Development': {
    icon: Terminal,
    skills: ['Node.js', 'Python', 'Java', 'Django',]
  },
  'Database': {
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase']
  },
  'Design': {
    icon: Palette,
    skills: ['Figma', 'UI/UX', 'Responsive Design', 'Wireframing']
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, skills }]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}