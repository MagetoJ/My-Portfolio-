import React from 'react';
import { Code, Users, Coffee, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '5+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '10+' },
    { icon: Award, label: 'Years Experience', value: '2+' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Full-Stack Developer with a Passion for Innovation
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                With over 2 years of experience in software development, I specialize in building 
                scalable web applications using modern JavaScript frameworks and Django. My journey 
                started with a Computer Science degree from Stanford University, where I developed 
                a strong foundation in algorithms and software engineering principles.
              </p>
              
              <p>
                I have extensive experience working with startups and established companies, helping 
                them transform ideas into robust, user-friendly applications. My expertise spans the 
                entire development stack, from creating responsive frontends with React and Vue.js 
                to building secure, performant APIs with Django and PostgreSQL.
              </p>
              
              <p>
                When I'm not coding, you can find me contributing to open-source projects, exploring the latest trends in web development. I believe in 
                continuous learning and staying up-to-date with the ever-evolving tech landscape.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                'Clean Code', 'Agile Methodology', 'Team Leadership', 
                'Problem Solving', 'User Experience', 'Performance Optimization'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;