const API_URL = 'http://localhost:5001/api/tours';

export const getTours = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tours');
    return await response.json();
  } catch (error) {
    console.error('Error fetching tours:', error);
    return [];
  }
};
