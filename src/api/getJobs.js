import axios from 'axios';

export const getJobs = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  
  try {
    const response = await axios.get(`${apiUrl}/test/job`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch jobs');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};