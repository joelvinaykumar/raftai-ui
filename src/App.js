import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/records')
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(error => setError(error.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p className='error'>{error}</p>
        <div className='card-group'>
          {data.map(item => (
            <div className='card'>
              <p>{item.title}</p>
              <div className='card-img'></div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
