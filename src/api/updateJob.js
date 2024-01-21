export const updateJob = async (id, formData) => {
  try {
    const response = await fetch(`https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job/${id}`, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Failed to update job. Status: ${response.statusText}`);
    }

    const task = await response.json();
    // console.log(task);
    return {
      success: true,
      message: 'Job updated successfully',
    };
  } catch (error) {
    console.error('Error updating job:', error.message);
    throw error;
  }
};