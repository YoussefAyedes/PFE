// src/pages/Applications.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Applications = () => {
  const { user } = useSelector((state) => state.user);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await apiRequest({
          url: `/api-v1/applications?userId=${user.id}&search=${searchQuery}`,
          method: 'GET',
        });
        setApplications(res.data || []);
      } catch (err) {
        setError('Failed to fetch applications. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user.id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Applications</h1>
      {applications.length === 0 ? (
        <p>You have not applied for any jobs yet.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app.id} className="mb-2 border p-4 rounded">
              <h2 className="text-lg font-semibold">{app.jobTitle}</h2>
              <p className="text-sm">Company: {app.company}</p>
              <p className="text-sm">Status: {app.status}</p>
              <button 
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(app.id)} // Function to handle deletion
              >
                Delete Application
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Function to handle deletion (you can implement it as per your API)
const handleDelete = async (applicationId) => {
  // Make an API call to delete the application
  try {
    const response = await fetch(`/jobs/upload-job/${applicationId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete application');
    }

    // Optionally, update the state to remove the deleted application
    setApplications((prevApps) => prevApps.filter(app => app.id !== applicationId));
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

export default Applications;
