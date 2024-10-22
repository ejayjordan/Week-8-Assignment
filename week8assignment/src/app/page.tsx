import { useState, useEffect } from 'react'
 
function dataCollection() {
  const [data, setData] = useState(null)
 
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
 
  if (!data) return <p>No data</p>
 
  return (
    <div>
      <p>{data}</p>
    </div>
  )
}
