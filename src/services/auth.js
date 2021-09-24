import server from '../config/http'

export const getToken = (email, password) => {
  return server.post(
    '/auth/token/',
    { email, password }, 
    { headers: 
      { 'moises': 'goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H' } 
    }
  )
}

export default { getToken }