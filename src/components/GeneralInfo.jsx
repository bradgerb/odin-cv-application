// import { useState } from "react";

const generalInfoArray = [{
    id: 0,
    question: 'What is your name?',
    tag: 'name'
}, {
    id: 1,
    question: 'What is your email address?',
    tag: 'email'
}, {
    id: 2,
    question: 'What is your phone number?',
    tag: 'phone'
}];

export default function GeneralInfo() {

    // const [nameState, setNameState] = useState('')
    // const [emailState, setEmailState] = useState('')
    // const [phoneState, setPhoneState] = useState('')

    function handleSubmit(e) {
        // e.preventDefault();
        console.log(e.target.value)
    }

    const listItems = generalInfoArray.map(array =>
    <li key={array.id}>
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <label>
                {array.question}
            </label>
            <input type="text" />
            <button onClick={e => handleSubmit(e.target.value)}>
                Submit
            </button>
        </form>
        <br></br>
    </li>);
    return <ul>{listItems}</ul>
}