export const deleteJob = async (id) => {
  try {
    const response = await fetch(`https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      // Check if the response is not OK, throw an error with the status text
      throw new Error(`Failed to delete job. Status: ${response.statusText}`);
    }

    const task = await response.json();
    console.log(task);
  } catch (error) {
    console.error('Error deleting job:', error.message);
    throw error;
  }
};
