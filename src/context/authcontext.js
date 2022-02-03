import React, { useState, useEffect } from 'react'

export const AuthContext = React.createContext(null)

const AuthProvider = ({ children }) => {
    
  const [userDetails, setUserDetails] = useState({})
  const [authenticated, setAuthenticated] = useState(false);
  const [authorizations, setAuthorizations] = useState({});

  useEffect(() => {
    if (userDetails.username === "admin" && userDetails.password === "admin"){
      setAuthenticated(true)
    } else {      
      setAuthenticated(false)
    }
  },[userDetails])

  const setUsernamePassword = (username, password)  => {
    setUserDetails({username, password })
  }

  const signup = (params) => {
    setAuthenticated(true)
  }

  const authStore = {
    authenticated : authenticated,
    setUsernamePassword,signup,
    authorizations: [authorizations, setAuthorizations]
  }

  return (<AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>)
}

export default AuthProvider;