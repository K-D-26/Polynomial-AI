import axios from 'axios';

export const deleteJob = async (id) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await axios.delete(`${apiUrl}/test/job/${id}`);

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