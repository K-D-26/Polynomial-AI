import axios from 'axios';

export const deleteJob = async (id) => {
  try {
    const response = await axios.delete(`https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job/${id}`);

    if (response.status !== 200) {
      throw new Error(`Failed to delete job. Status: ${response.statusText}`);
    }

    return {
      success: true,
      message: 'Job deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting job:', error.message);
    throw error;
  }
};