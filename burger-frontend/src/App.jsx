import { useEffect, useState } from 'react'

function App() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/burger')
      .then(res => res.json())
      .then(data => setBurgers(data))
      .catch(err => console.error("Veri çekilemedi:", err))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>🍔 Burger Listesi</h1>
      <hr />
      {burgers.length === 0 ? <p>Henüz burger eklenmemiş.</p> : (
        <ul>
          {burgers.map(burger => (
            <li key={burger.id}>
              <strong>{burger.name}</strong> - {burger.price} TL
              <br /> <em>{burger.breadType} - {burger.contents}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App