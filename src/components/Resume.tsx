import React from 'react';
import { Download, Eye, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Software Developer",
      company: "StatBricks",
      location: "Nairobi, Kenya",
      period: "2024 August - Present",
      description: "Led development of scalable web applications using React, Django, and PostgreSQL."
    },
    {
      title: "IT Intern/Attachee",
      company: "Chacleat Constructions",
      location: "Nairobi, Kenya",
      period: "May - August 2024",
      description: "Gained hands-on experience in IT infrastructure management and software development. Assisted in maintaining computer systems and developing internal tools for project management."
    },
    {
      title: "Data Analytics Intern",
      company: "Spark Analytics",
      location: "Nairobi, Kenya",
      period: "January - March 2024",
      description: "Working with data visualization tools and analytics platforms to create insights from business data. Developing skills in data processing and statistical analysis."
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Software Engineering (Year 3)",
      school: "Zetech University",
      location: "Nairobi, Kenya",
      period: "2024 - December 2026",
      honors: "Currently Enrolled - Expected Graduation December 2026"
    },
    {
      degree: "Diploma in Business Information Technology",
      school: "Zetech University",
      location: "Nairobi, Kenya",
      period: "2023 - 2024, November",
      honors: "Graduated with Credit 1st Class"
    }
  ];

  const certifications = [
    "Cisco Certification in Cybersecurity (2023)",
    "Diploma in Business Information Technology"
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            My professional journey and achievements in software development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Online
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8">
              <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {edu.honors}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8">
                <Award className="mr-3 h-6 w-6 text-blue-600" />
                Certifications
              </h3>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Skills Summary */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Key Technical Skills
              </h3>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>React / Next.js</li>
                      <li>Vue.js / Nuxt.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Django / Python</li>
                      <li>Node.js / Express</li>
                      <li>PostgreSQL</li>
                      <li>REST APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;