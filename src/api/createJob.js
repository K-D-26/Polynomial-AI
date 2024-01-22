import axios from 'axios';

export const createJob = async (formData) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await axios.post(`${apiUrl}/test/job`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 201) {
      throw new Error('Failed to add job');
    }

    return {
      success: true,
      message: 'Job added successfully',
    };
  } catch (error) {
    console.error('Error adding job:', error);
    throw error;
  }
};