// import CarForm from '../../../components/carForm'
import CarForm  from '@/components/CarForm'
import React from 'react'

const getCarDataById = async (id) => {
  const res = await fetch(process.env.API_URL + `Cars/${id}`, {
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
