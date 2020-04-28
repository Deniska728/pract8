import React, { useState } from 'react'

const Editor = () => {
  const [value, setValue] = useState('Practic 8');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div id="main" className="editor-container">
      {isOpen && (
        <div className="tooltip">
          <input value={value} onChange={handleChange} />
        </div>
      )}
      <p onClick={handleClick}>{value}</p>
    </div>
  )
};

export default Editor;
