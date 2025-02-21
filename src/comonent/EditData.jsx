import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom"; // For getting the ID from the URL
import { toast } from "react-toastify";

const EditData = () => {
  const { id } = useParams(); // Get the record ID from the URL
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    nid: "",
    dob: "",
    fatherName: "",
    motherName: "",
    rollNumber: "",
    program: "",
    session: "",
    passingYear: "",
    cgpa: "",
  });

  // Fetch the record data when the component mounts
  useEffect(() => {
    const fetchRecord = async () => {
      
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/records/${id}`);
        setFormData(response.data); // Set the fetched data as default values
      } catch (error) {
        console.error("Error fetching record:", error);
        toast("Failed to fetch record. Please try again.");
      }
    };

    fetchRecord();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (update operation)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/records/${id}`, formData);
      console.log("Record updated successfully:", response.data);
      toast("Record updated successfully!");
      navigate('/admindashbord')
    } catch (error) {
      console.error("Error updating record:", error);
      alert("Failed to update record. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-lg dark:bg-[#420878] dark:text-gray-500  mx-auto p-5 bg-purple-300 min-h-screen">
   <div className="flex justify-between items-center">
   <h2 className="text-2xl font-bold dark:text-white mb-4">Edit Record</h2>  <NavLink to='/admindashbord'
          
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
         Dashbord
        </NavLink>
   </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields for each property */}
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">NID:</label>
          <input
            type="text"
            name="nid"
            value={formData.nid}
            onChange={handleChange}
            className="input  input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block  dark:text-white text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white text-sm font-medium text-gray-700">Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            className="input  input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Program:</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white text-sm font-medium text-gray-700">Session:</label>
          <input
            type="text"
            name="session"
            value={formData.session}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white text-sm font-medium text-gray-700">Passing Year:</label>
          <input
            type="text"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white text-sm font-medium text-gray-700">CGPA:</label>
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditData;