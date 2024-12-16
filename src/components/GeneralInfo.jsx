import { useState } from 'react';
//import './styles/GeneralInfo.css';

function GeneralInfo () {
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setEditing(false);
        alert(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`);
    };

    return (
        <div className="general-info">
          {editing ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <button onClick={handleSubmit}>Submit</button>
            </>
          ) : (
            <>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
              <button onClick={() => setEditing(true)}>Edit</button>
            </>
          )}
        </div>
      );
    };

    export default GeneralInfo;
  