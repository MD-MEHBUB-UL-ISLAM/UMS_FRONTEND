import { useState } from 'react';

export default function AddUserForm() {

  const [Coursename, setCoursename] = useState('');
  const [Courseid, setCourseid] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        Coursename,
        Courseid
 
    };

    try {
     
      const response = await fetch('https://umsbackendteo-production.up.railway.app/reg/insertcourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Course added successfully!');
      } else {
        console.error('Error adding Book.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="Coursename" className="mt-4">
      Coursename:
        <input
          type="text"
          id="Coursename"
          value={Coursename}
          onChange={(e) => setCoursename(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label htmlFor="Courseid" className="mt-4">
        CourseId:
        <input
          type="text"
          id="Courseid"
          value={Courseid}
          onChange={(e) => setCourseid(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

 

      <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
   
    </form>
  );
}
