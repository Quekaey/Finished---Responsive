import { motion } from 'framer-motion';

export default function Loading({ 
  type = 'spinner', 
  size = 'md', 
  text = 'Loading...',
  className = '',
  fullScreen = false 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-primary-200 border-t-primary-500 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-primary-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} bg-primary-500 rounded-full`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  const renderSkeleton = () => (
    <div className="space-y-3">
      <div className="h-4 bg-primary-200 rounded animate-pulse"></div>
      <div className="h-4 bg-primary-200 rounded animate-pulse w-5/6"></div>
      <div className="h-4 bg-primary-200 rounded animate-pulse w-4/6"></div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-primary-1500/90 backdrop-blur-sm flex items-center justify-center z-50"
        data-testid="fullscreen-loading"
      >
        <div className="text-center">
          {renderLoader()}
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-primary-100 text-lg"
            >
              {text}
            </motion.p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} data-testid="loading">
      {renderLoader()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-primary-100 text-sm"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
