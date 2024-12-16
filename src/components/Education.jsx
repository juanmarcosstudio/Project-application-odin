import { useState } from 'react';
//import './styles/Education.css';

const Education = () => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    school: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setEditing(false);
    alert(`School: ${formData.school}, Title of Study: ${formData.titleOfStudy}, Date: ${formData.dateOfStudy}`);
  };

  return (
    <div className="education">
      {editing ? (
        <>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            type="text"
            name="titleOfStudy"
            value={formData.titleOfStudy}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            type="text"
            name="dateOfStudy"
            value={formData.dateOfStudy}
            onChange={handleChange}
            placeholder="Date of Study"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>School: {formData.school}</p>
          <p>Title of Study: {formData.titleOfStudy}</p>
          <p>Date: {formData.dateOfStudy}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Education;
