export const deleteJob = async (id) => {
  try {
    const response = await fetch(`https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete job. Status: ${response.statusText}`);
    }

    const task = await response.json();
    //console.log(task);
    return {
      success: true,
      message: 'Job deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting job:', error.message);
    throw error;
  }
};