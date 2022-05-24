import axios from 'axios'

export const addInscriptions = async(data:any, token:any) =>{
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/inscriptions`, {
      mode:'cors',
      method: 'POST',
      headers: { 
        'Content-type': 'application/json',
        'Authorization': token},
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
  } catch (error) {
    return {message: 'Error to response information', error} 
  }
}