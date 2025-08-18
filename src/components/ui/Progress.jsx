import { motion } from 'framer-motion';

export default function Progress({ 
  value = 0, 
  max = 100, 
  type = 'bar',
  size = 'md',
  showLabel = true,
  className = '',
  animated = true
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4'
  };

  const renderBar = () => (
    <div className={`w-full bg-primary-200/30 rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ 
          duration: animated ? 0.8 : 0,
          ease: "easeOut"
        }}
        data-testid="progress-bar"
      />
    </div>
  );

  const renderCircular = () => {
    const radius = size === 'sm' ? 16 : size === 'md' ? 24 : size === 'lg' ? 32 : 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`relative ${className}`}>
        <svg
          className="transform -rotate-90"
          width={radius * 2 + 8}
          height={radius * 2 + 8}
        >
          {/* Background circle */}
          <circle
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-primary-200/30"
          />
          {/* Progress circle */}
          <motion.circle
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-primary-500"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ 
              duration: animated ? 1 : 0,
              ease: "easeOut"
            }}
            data-testid="progress-circle"
          />
        </svg>
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-primary-700">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
    );
  };

  const renderSteps = () => {
    const steps = Array.from({ length: max }, (_, i) => i + 1);
    
    return (
      <div className={`flex space-x-1 ${className}`}>
        {steps.map((step) => (
          <motion.div
            key={step}
            className={`flex-1 h-2 rounded-full ${
              step <= value ? 'bg-primary-500' : 'bg-primary-200/30'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: step * 0.1,
              duration: 0.3
            }}
            data-testid={`progress-step-${step}`}
          />
        ))}
      </div>
    );
  };

  const renderLoader = () => {
    switch (type) {
      case 'circular':
        return renderCircular();
      case 'steps':
        return renderSteps();
      default:
        return renderBar();
    }
  };

  return (
    <div className="w-full" data-testid="progress">
      {renderLoader()}
      {showLabel && type !== 'circular' && (
        <div className="flex justify-between items-center mt-2 text-sm text-primary-600">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
}
