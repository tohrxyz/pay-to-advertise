import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch(`http://localhost:3000/open-url?url=${input}`, {
      // method: 'POST',
      // body: JSON.stringify({ url: input }),
      mode: 'no-cors',
    })

    // const data = await res.json();

    // if (!res.ok) {
    //   alert.error(data.error);
    // }
  }

  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <>
      <div>
        <label htmlFor="input-url">Enter URL: </label>
        <input type="url" name='input-url' onChange={(e) => setInput(e.target.value)}/>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>

      <form method="POST" action="https://ticket.ppke.sk/">
        <input type="hidden" name="email" value="customer@example.com" />
        <input type="hidden" name="orderId" value="CustomOrderId" />
        <input type="hidden" name="notificationUrl" value="https://0b0b-146-70-189-56.ngrok-free.app/paid" />
        <input type="hidden" name="redirectUrl" value="http://localhost:5173" />
        <button type="submit" name="choiceKey" value="key">Buy now</button>
      </form>

    </>
  )
}

export default App
