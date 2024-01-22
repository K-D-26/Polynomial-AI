import axios from 'axios';

export const updateJob = async (id, formData) => {
  try {
    const response = await axios.put(`https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job/${id}`, formData, {
      headers: {'Content-Type': 'application/json'},
    });

    if (response.status !== 200) {
      throw new Error(`Failed to update job. Status: ${response.statusText}`);
    }

    return {
      success: true,
      message: 'Job updated successfully',
    };
  } catch (error) {
    console.error('Error updating job:', error.message);
    throw error;
  }
};