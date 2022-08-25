import logo from './logo.svg';
import './App.css';
import Table from './Components/TableData/Table';
import LeftSide from './Components/LeftSide';
import { HashRouter, Routes, Route,BrowserRouter } from 'react-router-dom';
import Stratus from './Components/TableData/GVG_Stratus';
import GVG from './Components/TableData/Image GVG workflow';
import Header from './Components/Header';
import File_Xml from './Components/TableData/FileXml';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
        <LeftSide />
        <Routes>
          <Route path='/' element={<Table />} />
          <Route exact path="/Table" element={<Table />} />
          <Route exact path="/GVG_Stratus" element={<Stratus/>} />
          <Route exact path="/GvgWorkflow" element={<GVG />} />
          <Route exact path="/File_Xml" element={<File_Xml />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
