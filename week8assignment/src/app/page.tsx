'use client'
import React from 'react'
import { useState, useEffect } from 'react'
 
function dataCollection() {
  const [data, setData] = useState(null)
 
  useEffect(() => {
    fetch('public\data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
 
  if (!data) return <p>No data</p>
 
  return (
    <div>
      {data}
    </div>
  )
}
export default dataCollection;
