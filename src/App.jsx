import GeneralInfo from './components/GeneralInfo.jsx'
import Education from './components/EducationExperience.jsx'
import Practical from './components/PracticalExperience.jsx'
import Display from './components/Display.jsx'

export default function App() {
    return (
        <>
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
                <Display />
            </div>
        </>
    );
}
