import { useState } from 'react';

function Practical() {
    // return <div>What was your previous job</div>

  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('this is the default message');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }

}

export default Practical;