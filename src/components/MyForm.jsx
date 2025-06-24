import { useState } from 'react';

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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      </div>

      <div>
        <label>Country</label>
        <select name="country" onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Mexico">Mexico</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <div>
        <label>
          <input type="checkbox" name="newsletter" onChange={handleChange} />
          Subscribe to Newsletter
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
