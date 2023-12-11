
import UserContextProvider from "./context/UserContextProviders"

import Profile from "./components/Profile"
import Login from "./components/Login"

function App() {
 

  return (
   <UserContextProvider>
   <Login/>
   <Profile />
   </UserContextProvider>
  )
}

export default App
