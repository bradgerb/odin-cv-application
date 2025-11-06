import { useState } from "react";

export default function Education() {
    const [schoolName, setSchoolName] = useState('');
    const [degree, setDegree] = useState('');
    const [gpa, setGpa] = useState('');

    function handleSetSchoolName(e) {
      setSchoolName(e.target.value);
    }

    function handleSetDegree(e) {
      setDegree(e.target.value);
    }

    function handleSetGpa(e) {
      setGpa(e.target.value);
    }

    return (<>
        <form>
            <label>Where did you attend school?</label>
            <input
            type="text"
            value={schoolName}
            onChange={handleSetSchoolName}
            />
          </form>
          <div>{schoolName}</div>

        <br />
        
          <form>
            <label>What was your degree?</label>
            <input
            type="text"
            value={degree}
            onChange={handleSetDegree}
            />
          </form>
          <div>{degree}</div>

          <br />

          <form>
            <label>What was your gpa?</label>
            <input
            type="number"
            value={gpa}
            onChange={handleSetGpa}
            />
          </form>
          <div>{gpa}</div>
      </>
    )
}