import Card from './Card';
import CardDetail from './CardDetail';

const CardsContainer = ({ selectedField, setSelectedField }) => {
  const fields = [
    { id: 'tech-news', title: 'Tech News' },
    { id: 'community', title: 'Community' },
    { id: 'job-applications', title: 'Job Applications' },
    { id: 'settings', title: 'Settings' },
    {id: 'Principal' , title: 'Principal'},
    {id: 'Secundario' , title: 'Secundario'}
  ];

  const handleToggleDetail = (fieldId) => {
    setSelectedField(fieldId);
  };

  const renderCards = () => {
    return fields.map((field) => (
      <div className="mb-4" key={field.id}>
        <Card
          title={field.title}
          isSelected={selectedField === field.id}
          onToggleDetail={() => handleToggleDetail(field.id)}
        />
        {selectedField === field.id && <CardDetail onCloseDetail={() => handleToggleDetail(null)} />}
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
