import axios from 'axios'

export const getAllUsers = async () => {
  return axios.get('https://api.randomuser.me/').then(response => {
    const { data } = response
    return data
  })
}
