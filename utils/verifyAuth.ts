export const verifyAuth = async(token:string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/users/me`, {
      mode:'cors',
      method: 'GET',
      headers: { 
        'Content-type': 'application/json',
        "Authorization": token
    },
    })
    const result = await response.json()
    return result
  } catch (error) {
    return {message: 'Error to response information', error} 
  }
}