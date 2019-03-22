export const cleanUser = (userData) => {
  const cleanedUser = {email: userData.data.email, id: userData.data.id, name: userData.data.name}
  return cleanedUser;
}