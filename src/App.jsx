import './App.css';
import Header from './Header.jsx'; // Add .jsx here
import Box from './Box.jsx';       // Add .jsx here

function App() {
  const data = {
    name: "LORAINE ESCRITOR",
    subject: "CPEITEL"
  };

  return (
    <div className="app-container">
      <Header surname={data.name} />
      <Box subjectCode={data.subject} />
    </div>
  );
}

export default App;