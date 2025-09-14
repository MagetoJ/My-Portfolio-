import React from 'react';
import { 
  Code2, FileCode, Atom, Zap, Triangle, Palette, Layout,
  Server, Code, Cpu, Database, Globe, GitBranch, Package, Cloud, GitCommit
} from 'lucide-react';
import { skills } from '../utils/constants';
import { getSkillColor, getSkillWidth } from '../utils/helpers';

const iconMap = {
  Code2, FileCode, Atom, Zap, Triangle, Palette, Layout,
  Server, Code, Cpu, Database, Globe, GitBranch, Package, Cloud, GitCommit
};

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools', 'Other'] as const;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Grid */}
          <div className="space-y-8">
            {categories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <div className="grid gap-4">
                    {categorySkills.map((skill) => {
                      const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                      
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            skill.level === 'Expert' 
                              ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300'
                              : skill.level === 'Proficient'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              : skill.level === 'Learning'
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                              : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Proficiency Levels
            </h3>
            
            <div className="space-y-4">
              {skills.slice(0, 8).map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)} ${getSkillWidth(skill.level)}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Cisco Certification in Cybersecurity (2023)</li>
                <li>• Diploma in Business Information Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;