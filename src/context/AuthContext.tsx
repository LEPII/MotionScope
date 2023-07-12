import React, {useContext, useState} from "react"

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  currentUser: any;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState(undefined)

  const value: AuthContextValue = { currentUser };

  return (
<AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
  }

