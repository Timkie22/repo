import React, { useState } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Hier können Sie die Daten des Formulars senden
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ color: '#2980b9', fontWeight: 'bold', marginRight: '5px' }}>Project Name:</span>
        <input type="text" value={projectName} onChange={handleProjectNameChange} style={{ border: '1px solid #2980b9', borderRadius: '5px', padding: '5px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ color: '#2980b9', fontWeight: 'bold', marginRight: '5px' }}>Project Description:</span>
        <textarea value={projectDescription} onChange={handleProjectDescriptionChange} style={{ border: '1px solid #2980b9', borderRadius: '5px', padding: '5px' }} />
      </label>
      <button type="submit" style={{ backgroundColor: '#2980b9', color: '#ffffff', borderRadius: '5px', padding: '10px', border: 'none', cursor: 'pointer' }}>Create Project</button>
    </form>
  );
};

export default ProjectForm;