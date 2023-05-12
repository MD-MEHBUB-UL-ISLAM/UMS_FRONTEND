import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateDataForm = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [fullname, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [CGPA, setCGPA]= useState('');
  const [isActive, setIsActive] = useState('');
  const [myfile, setMyfile] = useState('');



  useEffect(() => {
    axios.get('http://localhost:3000/student/index')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = e => {
    const id = parseInt(e.target.value);
    const selected = data.find(d => d.id === id);
    setSelectedData(selected);
    setName(selected.fullname);
    setEmail(selected.email);
    setIsActive(selected.isActive);
    setPassword(selected.password);
    setMyfile(selected.myfile);
    setCGPA(selected.CGPA);
    setInfo(selected.info);
    setPhone(selected.phone)

  
  };

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePhoneChange = e => setPhone(e.target.value);
  const handleCGPAChange = e => setCGPA(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    axios.put(`http://localhost:3000/student/updatestudent/${selectedData.id}`, {
      ...selectedData,
      fullname,
      email,
      phone,
      CGPA
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Update Student Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Student Data:</label>
          <select onChange={handleSelectChange}>
            <option value="">-- Select --</option>
            {data.map(d => (
              <option key={d.id} value={d.id}>{d.fullname}</option>
            ))}
          </select>
        </div>
        {selectedData && (
          <>
            <div>
              <label>Name:</label>
              <input type="text" value={fullname} onChange={handleNameChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Phone:</label>
              <input type="text" value={phone} onChange={handlePhoneChange} />
            </div>
            <div>
              <label>CGPA:</label>
              <input type="text" value={CGPA} onChange={handleCGPAChange} />
            </div>
            <button type="submit">Save Changes</button>
          </>
        )}
      </form>
    </div>
    
  );
};

export default UpdateDataForm;
