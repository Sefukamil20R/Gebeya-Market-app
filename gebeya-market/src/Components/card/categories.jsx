import React from 'react';

const Categories = ({ text, active }) => {
  const styles = {
    padding: '10px 52px',
    borderRadius: '15px',
    fontSize: '12px',
    fontweight: 'bold',

    color: active ? '#FFFFFF' : '#000000',
    backgroundColor: active ? '#FEA301' : '#FFFFFF',
    border: `1px solid ${active ? '#FEA301' : '#555555'}`,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div style={styles}>
      {text}
    </div>
  );
};

export default Categories;
