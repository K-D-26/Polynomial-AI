export const createJob = async (formData) => {
  try {
    await fetch('https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(formData)
    }).then(res => {
      if (res.ok) {
      return { success: true };
    } else {
      throw new Error('Failed to create job');
    }
      // handle error
    }).then(task => {
      // do something with the new task
    }).catch(error => {
      // handle error
    })
  } catch (error) {
    console.error('Error searching GIFs:', error);
    throw error;
  }
}