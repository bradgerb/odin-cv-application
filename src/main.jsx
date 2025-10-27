import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main.css'
import GeneralInfo from './components/GeneralInfo.jsx'
import Education from './components/EducationExperience.jsx'
import Practical from './components/PracticalExperience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <div className="generalInfo">
    <GeneralInfo />
  </div>
  <div className="educationExp">
    <Education />
  </div>
  <div className="practicalExp">
    <Practical />
  </div>
  <div className="displayContainer">
    <div className="display">
        <div className='generalInfoDisplay'>
          <h1>General Information:</h1>
        </div>
        <div className="educationDisplay">
          <h1>Education Information:</h1>
        </div>
        <div className="practicalDisplay">
          <h1>Practical Information:</h1>
        </div>
    </div>
  </div>

  </StrictMode>,
)
