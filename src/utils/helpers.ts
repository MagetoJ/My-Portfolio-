export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getSkillColor = (level: string): string => {
  switch (level) {
    case 'Expert':
      return 'bg-emerald-500';
    case 'Proficient':
      return 'bg-blue-500';
    case 'Beginner':
      return 'bg-amber-500';
    default:
      return 'bg-gray-500';
  }
};

export const getSkillWidth = (level: string): string => {
  switch (level) {
    case 'Expert':
      return 'w-full';
    case 'Proficient':
      return 'w-4/5';
    case 'Beginner':
      return 'w-3/5';
    default:
      return 'w-1/2';
  }
};