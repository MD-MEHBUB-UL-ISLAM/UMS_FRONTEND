import { useState } from 'react';

export default function AddUserForm() {
 
  const [bookname, setbookname] = useState('');
  const [takeinfo, settakeinfo] = useState('');
  const [authorname, setauthorname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        bookname,
        takeinfo,
        authorname
 
    };

    try {
     
      const response = await fetch('https://umsbackendteo-production.up.railway.app/reg/insertbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Book added successfully!');
      } else {
        console.error('Error adding Book.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="bookname" className="mt-4">
        BookName:
        <input
          type="text"
          id="bookname"
          value={bookname}
          onChange={(e) => setbookname(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label htmlFor="takeinfo" className="mt-4">
        Takeinfo:
        <input
          type="text"
          id="takeinfo"
          value={takeinfo}
          onChange={(e) => settakeinfo(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <label htmlFor="authorname" className="mt-4">
      Authorname:
        <input
          type="text"
          id="authorname"
          value={authorname}
          onChange={(e) => setauthorname(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        />
      </label>

      <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
   
    </form>
  );
}
