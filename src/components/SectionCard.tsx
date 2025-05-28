
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const SectionCard = ({ title, icon: Icon, children, className = '' }: SectionCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in ${className}`}>
      <div className="flex items-center mb-4">
        <div className="p-2 bg-rwanda-blue/10 rounded-lg mr-3">
          <Icon className="w-6 h-6 text-rwanda-blue" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default SectionCard;
