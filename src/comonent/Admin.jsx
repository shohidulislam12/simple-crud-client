
import axios from "axios";
import { useEffect, useState } from "react";

import { Link, Navigate, NavLink } from "react-router-dom";


const Admin = () => {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);
  useEffect(() => {
    fetchRecords();
  }, []);

  // Fetch records from the backend
  const fetchRecords = async () => {
    try {
      // Replace with your actual backend API endpoint
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/records`);
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };
console.log(records)
  const handleEdit = (record) => {

  };

  // Delete a record
  const handleDelete = async (id) => {
    try {

        console.log(id)
      // Replace with your actual backend API endpoint
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/records/${id}`);
      // Update UI
      setRecords(records.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };


  return (
    <div className="max-w-screen-lg dark:bg-[#420878] dark:text-white   mx-auto p-5 bg-purple-300 min-h-screen">
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Admin Dashbord </h2>  <NavLink to='/adddata'
               
               className="bg-blue-500 text-white px-4 py-2 rounded"
             >
              Add Data
             </NavLink>
        </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="dark:text-white">
              <th>Name</th>
              <th>NID/Birth Certificate</th>
              <th>Date of Birth</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>Roll Number</th>
              <th>Program</th>
              <th>Session</th>
              <th>Passing Year</th>
              <th>CGPA</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {records.map((record) => (
              <tr key={record._id}>
                <td>{record.name}</td>
                <td>{record.nid}</td>
                <td>{record.dob}</td>
                <td>{record.fatherName}</td>
                <td>{record.motherName}</td>
                <td>{record.rollNumber}</td>
                <td>{record.program}</td>
                <td>{record.session}</td>
                <td>{record.passingYear}</td>
                <td>{record.cgpa}</td>
                <td >
                  <Link to={`/edit/${record._id}`}
                    className="bg-blue-500 text-white px-4  rounded"
                    onClick={() => handleEdit(record)}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-blue-500 text-white px-4    rounded"
                    onClick={() => handleDelete(record._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {records.length === 0 && (
              <tr>
                <td colSpan="11" className="text-center py-4">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
