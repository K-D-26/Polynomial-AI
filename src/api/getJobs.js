export const getJobs = async () => {
  try {
    const response = await fetch('https://65ac0e21fcd1c9dcffc7852c.mockapi.io/test/job', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const jobsData = await response.json();
    //console.log(jobsData);
    return jobsData;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};