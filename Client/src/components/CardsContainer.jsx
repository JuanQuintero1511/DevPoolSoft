import React from 'react';
import Card from './Card';

const CardsContainer = ({ selectedField }) => {
  // Lógica para obtener la lista de campos y sus títulos correspondientes
  const fields = [
    { id: 'tech-news', title: 'Tech News' },
    { id: 'community', title: 'Community' },
    { id: 'job-applications', title: 'Job Applications' },
    { id: 'settings', title: 'Settings' },
    {id: 'Principal' , title: 'Principal'},
    {id: 'Secundario' , title: 'Secundario'}
  ];

  // Filtrar la lista de campos para obtener el campo seleccionado
  const selectedFieldData = fields.find(field => field.id === selectedField);

  // Renderizar la lista de Cards correspondiente al campo seleccionado
  const renderCards = () => {
      return Array(10).fill().map((_, index) => (
        <div className="mb-4">
          <Card
            key={`${selectedFieldData.id}-${index}`}
            title={`${selectedFieldData.title} - Card ${index + 1}`}
          />
        </div>
      ));
    };

  return (
        
      <div className='mt-4'>
      {renderCards()}
    </div>
  );
};

export default CardsContainer;