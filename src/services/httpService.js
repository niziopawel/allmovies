import { url, api_key } from '../config/api'
import axios from 'axios'

function client(endpoint, data, params) {
  const config = {
    method: data ? 'POST' : 'GET',
    url: `${url}/${endpoint}?api_key=${api_key}${params ? `&${params}` : ''}`
  }

  if (data) {
    config.data = JSON.stringify(data)
  }

  try {
    const response = axios(config)
    return response
  } catch (error) {
    console.log(error)
  }
}

export { client }
