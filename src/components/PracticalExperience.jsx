import { useState } from 'react';

function Practical() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Add anything else you think is helpful');

  function handleEdit() {
    setIsSent(false);
  }

  if (isSent) {
    return (
        <>
            <div>{message}</div>
            <button onClick={handleEdit}>Edit</button>
        </>
    )

  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        // alert(`Sending: "${message}"`);
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