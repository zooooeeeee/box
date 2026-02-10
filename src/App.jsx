// src/App.jsx
import './App.css'; // Import your styles
import Header from './Header';
import Box from './Box';

function App() {
  // Requirement: Isolation - all data injected via Props
  const studentData = {
    name: "Juan Dela Cruz",
    code: "CPEITEL"
  };

  return (
    <div className="container">
      <Header surname={studentData.name} />
      <Box subjectCode={studentData.code} />
    </div>
  );
}

export default App;