import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PatientProvider } from "context/PatientContext";
import { PatientSearchList } from 'pages/PatientSearchList';
import { PatientDetails } from 'pages/PatientDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <PatientProvider>
          <Routes>
            <Route path="/" element={<PatientSearchList />} />
            <Route path="/Patient/:patientId" element={<PatientDetails />} />
          </Routes>
        </PatientProvider>
      </div>
    </Router>
  );
}

export default App;
