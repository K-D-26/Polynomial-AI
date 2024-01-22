import axios from 'axios';

export const createJob = async (formData) => {
  try {
    const response = await axios.post('https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job', formData, {
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