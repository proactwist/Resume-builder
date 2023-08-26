// selection.js
"use client";
import React, { useState } from 'react';
// import { useClient } from '@react/server'; // Import useClient
import './selection.css'; // Import your CSS file

const TemplateSelector = () => {
  const templates = [
    '/assets/Template1.png',
    '/assets/Template2.jpg'
    
  ];

  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="template-selector">
      <span>Select a Template</span>
      <div className="template-list">
        {templates.map((template, index) => (
          <img
            key={index}
            src={template}
            alt={`Template ${index + 1}`}
            onClick={() => handleTemplateSelect(template)}
            className={`template-image ${selectedTemplate === template ? 'selected' : ''}`}
          />
        ))}
      </div>
      {selectedTemplate && (
        <div className="selected-template">
          <h3>Selected Template</h3>
          <img src={selectedTemplate} alt="Selected Template" />
        </div>
      )}
    </div>
  );
};

export default TemplateSelector; // Mark as a client component
