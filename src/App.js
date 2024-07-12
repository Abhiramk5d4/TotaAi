import { BrowserRouter, Routes,Route} from 'react-router-dom'

import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Header from "./components/Header";
import Assistants from "./components/Assistants";
import PhoneNumber from "./components/PhoneNumber";
import Files from "./components/Files";
import Tools from "./components/Tools";
import Squads from "./components/Squads";
import VoiceLibrary from "./components/VoiceLibrary";
import CallLogs from "./components/CallLogs";
import Profile from "./components/Profile";
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="main-body-container">
        <Sidebar />
        
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/overview" element={<Content />} />
            <Route path="/assistants" element={<Assistants />} />
            <Route path="/phone-number" element={<PhoneNumber />} />
            <Route path="/files" element={<Files />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/squads" element={<Squads />} />
            <Route path="/voice-library" element={<VoiceLibrary />} />
            <Route path="/call-logs" element={<CallLogs />} />
            <Route path="/account" element={<Profile />} />
          </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
