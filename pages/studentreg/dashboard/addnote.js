import { useState } from 'react';

export default function AddUserForm() {
    
 
  const [Notename, setNotename] = useState('');
  const [teachername, setteachername] = useState('');
  const [Noteinfo, setNoteinfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        Notename,
        teachername,
        Noteinfo

 
    };

    try {
     
      const response = await fetch('http://localhost:3000/reg/insertnote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Note added successfully!');
      } else {
        console.error('Error adding Book.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="Notename" className="mt-4">
      Notename:
        <input
          type="text"
          id="Notename"
          value={Notename}
          onChange={(e) => setNotename(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label htmlFor="teachername" className="mt-4">
        Teachername:
        <input
          type="text"
          id="teachername"
          value={teachername}
          onChange={(e) => setteachername(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label htmlFor="Noteinfo" className="mt-4">
      Noteinfo:
        <input
          type="text"
          id="Noteinfo"
          value={Noteinfo}
          onChange={(e) => setNoteinfo(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
   
    </form>
  );
}
