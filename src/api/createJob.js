export const createJob = async (formData) => {
  try {
    const response = await fetch('https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to add job');
    }

    const jobsData = await response.json();

    return {
      success: true,
      message: 'Job added successfully',
    };
  } catch (error) {
    console.error('Error adding job:', error);
    throw error;
  }
};