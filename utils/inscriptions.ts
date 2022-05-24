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

export const getInscriptions = async (token: string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/inscriptions?status=pending`, {
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

export const denyStudent = async (id:string, token:string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/inscriptions/${id}?status=declined`, {
      mode:'cors',
      method: 'PUT',
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

export const acceptStudent = async (id: string, token:string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/inscriptions/${id}?status=approved`, {
      mode:'cors',
      method: 'PUT',
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

export const getInscription = async (id:string, token:string) =>{
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/inscriptions/${id}`, {
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