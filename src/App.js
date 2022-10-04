import LogIn_Form from "./FormValidation/LogIn_Form";
import {Routes, Route} from 'react-router-dom';
import SignUp from './FormValidation/SignUp'
import { UserAuthContextProvider } from "./FormValidation/UserAuthContext";
import { ProtectedRoute } from "./FormValidation/pages/ProtectedRoute";
import Home from "./FormValidation/pages/Home";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
          <Route path="/home" element={<ProtectedRoute>{<Home/>}</ProtectedRoute>}/>
          <Route path="/" element={<LogIn_Form />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;