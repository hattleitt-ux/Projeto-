import React, { useState } from 'react';
import { Cross } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  aspectClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel = 'Clínica Fisiomedi',
  aspectClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F4C3A] via-[#15654D] to-[#0B3528] text-white p-8 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
          <Cross className="w-7 h-7 text-[#A7E8CE]" />
        </div>
        <p className="font-display text-lg font-medium text-white">
          {fallbackLabel}
        </p>
        <p className="text-xs text-emerald-100/80 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
