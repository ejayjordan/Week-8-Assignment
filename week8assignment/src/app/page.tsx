'use client'
import React from 'react'
import { useState, useEffect } from 'react'
 
function dataCollection() {
  const [data, setData] = useState<any[]>([]);
 
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
 
  if (!data) return <p>No data</p>

   return (
    <>
      {data.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
      </>
  );

  function Item({item} : {item:any}) {
    const [showInfo, setShowInfo] = useState();
  
    const onClickHandle = () => {
      console.log("click")
      setShowInfo(showInfo);
    };
  
    return (
      <div>
        <button onClick={onClickHandle}> {item.name} </button>
        {showInfo && <div>{item.additionalInfo}</div>}
      </div>
    );
  }
 

}
export default dataCollection
