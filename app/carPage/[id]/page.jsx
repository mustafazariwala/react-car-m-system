import CarForm from '../../\(components\)/carForm'
import React from 'react'

const getCarDataById = async (id) => {
  const res = await fetch('http://localhost:3000/api/Cars/' + id, {
    cache: "no-store"
  })
  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const CarPage = async ({params}) => {
  const EDITMODE = params.id === 'new' ? false : true
  let updatedCarData = {_id: "new"};
  if(EDITMODE) {
    updatedCarData = await getCarDataById(params.id);
  }
  return (
    <div>
      <CarForm car={updatedCarData}/>
    </div>
  )
}

export default CarPage
