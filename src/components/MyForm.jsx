import React, { useState } from 'react';
import MyButton from './Mybutton';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />

      <label>
        Gender:
        <label>
          <input type="radio" name="gender" value="male" onChange={handleChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={handleChange} />
          Female
        </label>
      </label>
      <br />

      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="mx">Mexico</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
        </select>
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      <br />

      {/* ✅ Botón reutilizable como submit */}
      <MyButton type="submit" label="Submit Form" />
    </form>
  );
}

export default MyForm;
