import React from 'react';

export function Skills() {
  const skills = [
    { category: 'Backend', items: ['Ruby on Rails', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'MySQL'] },
    { category: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5/CSS3', 'TailwindCSS', 'Bootstrap'] },
    { category: 'DevOps', items: ['Git', 'AWS EC2', 'Heroku', 'Server Setup', 'Deployment'] },
    { category: 'Methodologies', items: ['Agile', 'Scrum', 'TDD/BDD', 'RSpec', 'Capybara'] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#14a800]">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-[#14a800] rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}