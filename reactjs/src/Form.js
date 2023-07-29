import React, { useState } from 'react';
import Modal from 'react-modal';
import './Form.css';

Modal.setAppElement('#root');
function Form() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
    calculateAge(e.target.value);
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the form data to an API or perform any other action
    console.log('Form submitted:', { name, dob, age, address });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={handleDobChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} readOnly />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Thank you for your submission!</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Form;
