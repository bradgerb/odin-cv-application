import GeneralInfo from './components/GeneralInfo.jsx'
import Education from './components/EducationExperience.jsx'
import Practical from './components/PracticalExperience.jsx'
import Display from './components/Display.jsx'

export default function App() {
    return (
        <>
            <div className="generalInfo">
                <h1>General Information</h1>
                <div>section broken</div>
                <GeneralInfo />  
            </div>
            <div className="educationExp">
                <h1>Education Information</h1>
                <Education />
            </div>
            <div className="practicalExp">
                <h1>Practical Information</h1>
                <Practical />
            </div>
            <div className="displayContainer">
                section not functional
                <Display />
            </div>
        </>
    );
}
