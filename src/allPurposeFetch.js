export const allPurposeFetch = async url => {
  try {
    const response = await fetch(url);
  const data = await response.json();
  return data;
  } catch (error) {
  //this is where we would dispatch an action that would set the
  //error message in the store
    throw new Error('Fetch failed.')
  }
}

export default allPurposeFetch;
