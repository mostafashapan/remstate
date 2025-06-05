import React from 'react';
import useFetchSkips from '../../hooks/useFetchSkips';
import SkipCard from './SkipCard';

function SkipSectionCard({ selectedSkip, setSelectedSkip }) {
  const { skipData, loading, error } = useFetchSkips();

  const handleSelectSkip = (skipId) => {
    const skip = skipData.find(s => s.id === skipId);
    setSelectedSkip(skipId === selectedSkip?.id ? null : skip);
  };

  if (loading) return <p className="text-center py-8 text-gray-400">Loading skips...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 pb-32 p-10">
      <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
      <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skipData.map((skip) => (
          <SkipCard 
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={handleSelectSkip}
          />
        ))}
      </div>
    </div>
  );
}

export default SkipSectionCard;