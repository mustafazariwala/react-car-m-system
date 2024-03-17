"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function CarForm({car}) {
  console.log('Hi')
  const EDITMODE = car._id === "new" ? false : true; 
  
  const router = useRouter();
  let initialValue = {
    title: "",
    description: "",
    category: "Hardware Problem",
    priority: 1,
    progress: 0,
    status: "Not Started",
  };
  if(EDITMODE) initialValue = {
    title: car.title || '',
    description: car.title || '',
    category: car.category || '',
    priority: car.priority || '',
    progress: car.progress || '',
    status: car.status || '',
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = "/api/Cars";
    if(EDITMODE) url += "/" + car._id;
    console.log(EDITMODE)
    console.log(url)
    const res = await fetch(url, {
      method: EDITMODE ? "PUT" :"POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!res.ok) {
      throw new Error(`Failed to ${EDITMODE ? 'Edit': 'Create'} a Car`)
    }
    router.push("/")
    router.refresh();
  }
  const [formData, setFormData] = useState(initialValue);
  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
        <h3>{EDITMODE ? 'Edit' : 'Add'} your Car</h3>
        <label> Title</label>
        <input type="text" id='title' name='title' onChange={handleChange} required={true} value={formData.title} />
        <label>Description</label>
        <textarea type="text" id='description' name='description' onChange={handleChange} required={true} value={formData.description} />
        <label>Category</label>
        <select id='category' name='category' onChange={handleChange} required={true} value={formData.category} >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project Problem">Project Problem</option>
        </select>
        <label>Priority</label>
        <div>
          <input type="radio" id="priority-1" name="priority" onChange={handleChange} value={1} checked={formData.priority == 1} />
          <label>1</label>
          <input type="radio" id="priority-2" name="priority" onChange={handleChange} value={2} checked={formData.priority == 2} />
          <label>2</label>
          <input type="radio" id="priority-3" name="priority" onChange={handleChange} value={3} checked={formData.priority == 3} />
          <label>3</label>
          <input type="radio" id="priority-4" name="priority" onChange={handleChange} value={4} checked={formData.priority == 4} />
          <label>4</label>
        </div>
        <label> Progress</label>
        <input type="range" id="progress" name='progress' onChange={handleChange} value={formData.progress} min="0" max="100" />
        <label>Status</label>
        <select id='status' name='status' onChange={handleChange} required={true} value={formData.status} >
          <option value="Not Started">Not Started</option>
          <option value="Already Started">Already Started</option>
          <option value="Almost Done">Almost Done</option>
        </select>
        <input type="submit" value={EDITMODE ? 'Update your Car' : 'Add your Car'} className='btn max-w-xs' />
      </form>
    </div>
  )
}

export default CarForm
