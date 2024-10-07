import React from 'react'
import { useData } from '../services/DataProvider'

const DropDownCategory = ({filterClick}) => {
    const {categories} = useData()
    const handleChange = (e)=>{
        filterClick(e.target.value)
    }
  return (
    <div className='float-right mx-5'>
        <select className='border outline-none py-1 px-2 rounded shadow-sm w-full' onChange={handleChange}>
            <option value="">Select Category</option>
            {
                categories?.length >  0 &&   categories?.map(data => (
                    <option key={data.id} value={data.id}>{data.categoryTitle}</option>
                ))
            }
        </select>
    </div>
  )
}

export default DropDownCategory