import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import Name from './components/GeneralInfo.jsx'
import Education from './components/EducationExperience.jsx'
import Practical from './components/PracticalExperience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <div className="generalInfo">
    <Name />
  </div>
  <div className="educationExp">
    <Education />
  </div>
  <div className="practicalExp">
    <Practical />
  </div>
  <div className="displayContainer">
    <div className="display">
      display
    </div>
  </div>

  </StrictMode>,
)
