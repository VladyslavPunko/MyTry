import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm/SignInForm.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/tracker" element={<div>Tracker Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
