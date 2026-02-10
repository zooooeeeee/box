import './App.css';
import Header from './Header';
import Box from './Box';

function App() {

  const studentData = {
    name: "LORAINE ESCRITOR",
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