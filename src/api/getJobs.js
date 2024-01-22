import axios from 'axios';

export const getJobs = async () => {
  try {
    const response = await axios.get('https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job', {
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