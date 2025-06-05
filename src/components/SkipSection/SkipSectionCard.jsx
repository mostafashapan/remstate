// SkipSectionCard.jsx - Premium layout container
import React from 'react';
import useFetchSkips from '../../hooks/useFetchSkips';
import SkipCard from './SkipCard';

function SkipSectionCard({ selectedSkip, setSelectedSkip }) {
  const { skipData, loading, error } = useFetchSkips();

  const handleSelectSkip = (skipId) => {
    const skip = skipData.find(s => s.id === skipId);
    setSelectedSkip(skipId === selectedSkip?.id ? null : skip);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-12 text-red-400">
      <p className="text-lg font-medium">Failed to load skips</p>
      <p className="text-sm text-gray-400 mt-1">{error}</p>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Choose Your Skip Size</h2>
        <p className="text-white max-w-2xl mx-auto text-lg md:text-xl font-semibold text-center">
  Select the perfect skip for your project from our premium range
</p>

      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipData.map((skip) => (
          <SkipCard 
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={handleSelectSkip}
          />
        ))}
      </div>
    </section>
  );
}

export default SkipSectionCard;