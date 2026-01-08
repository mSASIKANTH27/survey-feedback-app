import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateSurvey from "./pages/CreateSurvey";
import ViewSurveys from "./pages/ViewSurveys";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateSurvey />} />
        <Route path="/surveys" element={<ViewSurveys />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
