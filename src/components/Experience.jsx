import { useState } from 'react';
//import './styles/Experience.css';

const Experience = () => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    responsibilities: '',
    fromDate: '',
    toDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setEditing(false);
    alert(`Company: ${formData.company}, Position: ${formData.position}, Responsibilities: ${formData.responsibilities}, From: ${formData.fromDate}, To: ${formData.toDate}`);
  };

  return (
    <div className="experience">
      {editing ? (
        <>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder="Responsibilities"
          />
          <input
            type="text"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            placeholder="From Date"
          />
          <input
            type="text"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            placeholder="To Date"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>Company: {formData.company}</p>
          <p>Position: {formData.position}</p>
          <p>Responsibilities: {formData.responsibilities}</p>
          <p>From: {formData.fromDate} To: {formData.toDate}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Experience;
