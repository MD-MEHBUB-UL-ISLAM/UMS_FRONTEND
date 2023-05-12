import MyLayout from "./component/layout"
import Footer from "./component/footer"
import { useState } from "react";

export default function About() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to your server or do any other action with it
        console.log(formData);
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      };
    return (
      
      <>
  
  <MyLayout title="About Us" />

      <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tellus nisl, vel posuere purus venenatis sit amet. Sed ullamcorper nibh in nulla dignissim, vel blandit nisi bibendum.
      </p>

      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tellus nisl, vel posuere purus venenatis sit amet.
          </p>
          <p className="mb-4">
            Sed ullamcorper nibh in nulla dignissim, vel blandit nisi bibendum. Duis ultrices posuere dolor vel rhoncus. Proin ut orci vitae magna consequat commodo.
          </p>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tellus nisl, vel posuere purus venenatis sit amet.
          </p>
          <p className="mb-4">
            Sed ullamcorper nibh in nulla dignissim, vel blandit nisi bibendum. Duis ultrices posuere dolor vel rhoncus. Proin ut orci vitae magna consequat commodo.
          </p>
        </div>
      </div>


        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
value={formData.email}
onChange={handleChange}
required
/>
</div>
<div className="mb-4">
<label htmlFor="message" className="block text-gray-700 font-bold mb-2">
Message
</label>
<textarea
         name="message"
         id="message"
         className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         value={formData.message}
         onChange={handleChange}
         required
       ></textarea>
</div>
<div className="flex justify-end">
<button
         type="submit"
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       >
Submit
</button>
</div>
</form>
</div>


        <Footer />

        </>
          
      

  )
    }