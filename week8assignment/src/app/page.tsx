'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
let dataDisplay = [" ", " ", " "]
let Names: any[] = [" "]

function dataCollection() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter()
 
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  if(data != null){
    Names = Object.getOwnPropertyNames(data)
  }

  const [displayData, setDisplayData] = React.useState([" ", " ", " ",]);

  function returnData(num: number){
    if(data != null){
    dataDisplay[0] = data[Names [num] ]["media"]
    dataDisplay[1] = data[Names [num] ]["genre"]
    dataDisplay[2] = data[Names [num] ]["year"]

    setDisplayData(dataDisplay)
    router.refresh()
  }}

  
    return (
      <>
      <div>
        <button onClick={() => returnData(0)}>{Names[0]}</button>
        <button onClick={() => returnData(1)}>{Names[1]}</button>
        <button onClick={() => returnData(2)}>{Names[2]}</button>
        <button onClick={() => returnData(3)}>{Names[3]}</button>
        <button onClick={() => returnData(4)}>{Names[4]}</button>
      </div>

      <div>
      <p>Media: {displayData[0]}</p>
      <p>Genre: {displayData[1]}</p>
      <p>Year: {displayData[2]}</p>
      </div>
      </>
    );
}
export default dataCollection
