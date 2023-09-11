import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { AiTwotoneEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import ModalAdd from '../../Modals/ApplicableWages/ModalAdd'
import SideBar from '../SideBar/SideBar'

const ApplicableWages = () => {
  const [ modal , setModal ] = useState(false)
  const [ data , setData ] = useState([])

  useEffect(() => {
    axios.post('http://localhost:5000/applicable-wages')
    .then((response) => {
      setData(response)
    }).catch((err) =>{
      console.log(err)
    }) 
  })
  return (
    <div className='w-full flex'>
      <SideBar />
      <div className='relative w-full flex flex-col px-[20px] bg-gray-100'>
            {modal && <ModalAdd closeModal={setModal}/>}
      <h1 className='font-bold text-xl md:text-3xl mt-[10px]'>Applicable Wages</h1>
      <div className='my-[100px]'>
        <button className='bg-green-500 px-[20px] py-[7px] rounded-sm font-bold hover:bg-green-400' onClick={() => setModal(true)}>Add</button>
      </div>

      <div className="flex flex-col overflow-x-auto md:overflow-x-hidden">

        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto md:overflow-x-hidden">

              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">Staff No.</th>
                    <th scope="col" className="px-6 py-4">Gender</th>
                    <th scope="col" className="px-6 py-4">2023</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item) => (
                      <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.staffNr}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.gender}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.year}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                      <button className='text-green-800'><AiTwotoneEdit size={20}/></button>
                      <button className='text-red-500 ml-[5px]'><MdDelete size={20}/></button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default ApplicableWages