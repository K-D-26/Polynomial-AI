export const updateJob = async (id) => {
  try {
    console.log(id);
    const response = await fetch(`https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job/${id}`, {
      method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify({completed: true})
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        }).then(task => {
        // Do something with updated task
        }).catch(error => {
        // handle error
    })
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
