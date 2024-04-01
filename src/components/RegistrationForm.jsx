/* eslint-disable no-unused-vars */
import { useState } from 'react';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    checkbox: false,
    dateOfBirth: undefined
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Reset the form fields after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      checkbox: false,
      dateOfBirth: ""
    });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, checkbox: !formData.checkbox });
  };

  return (
    <form onSubmit={handleSubmit} className='registration-form'>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <br />
      {formData.checkbox ? (
        <>
          <label>
            Date of Birth:
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            />
          </label>
          <br />
        </>
      ) : null}
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={formData.checkbox}
          onChange={handleCheckboxChange}
        />
        <span style={{ marginLeft: '5px' }}>I agree to terms and conditions</span>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
