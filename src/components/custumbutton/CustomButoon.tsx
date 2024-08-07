// components/CustomButton.jsx
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface CustomButtonProps {
  size?: 'small' | 'medium' | 'large';
  icon?: IconType;
  iconSize?: number;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}


const CustomButton: React.FC<CustomButtonProps> = ({ size = 'medium', icon: Icon, iconSize = 20, children, className, onClick }) => {
    const sizeClasses = {
      small: 'py-1 px-2 text-sm',
      medium: 'py-2 px-4 text-md',
      large: 'px-6 py-2',
    };
  
    return (
      <button
        className={`flex gap-1 text-white items-center bg-purpleLight rounded-lg boxShadow${sizeClasses[size]} ${className}`}
        onClick={onClick}
      >
        {Icon && <Icon size={iconSize} color="#fff" />}
        {children}
      </button>
    );
  };
  
  export default CustomButton;