import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { AiTwotoneEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import ModalAdd from '../../Modals/ProjectedLife/ModalAdd'
import SideBar from '../SideBar/SideBar'
const ProjectedLife = () => {
  const [ modal , setModal ] = useState(false)
  const [ data , setData ] = useState([])
  const [error , setError] = useState('')
  const [success , setSuccess] = useState('')
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/projected-life')
    .then((response) => {
      setData(response.data)
    }).catch((err) =>{
      console.log(err)
    }) 
  },[])

  const handleDelete = async (age) => {
    try {
      await axios.delete(`http://localhost:5000/projected-life/${age}`)
      setSuccess("Delete successfuly")
    } catch (error) {
      setError('Something went wrong')
    }
  }

  const filteredData = data.filter((item) => {
    return `${item.gender} ${item.year}` === selectedOption;
  });
  return (
    <div className='w-full flex'>
      <SideBar />
      <div className='relative w-full flex flex-col px-[20px] bg-gray-100'>
            {modal && <ModalAdd closeModal={setModal}/>}
      <h1 className='font-bold text-xl md:text-3xl mt-[10px]'>Projected Life</h1>
      <div className='my-[100px]'>
        <button className='bg-green-500 px-[20px] py-[7px] rounded-sm font-bold hover:bg-green-400' onClick={() => setModal(true)}>Add</button>
      </div>

      <div className="flex flex-col overflow-x-auto md:overflow-x-hidden">

        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto md:overflow-x-hidden">
            <select
                  value={selectedOption}
                  onChange={(e) => {
                    setSelectedOption(e.target.value);
                  }}
                >
                  {data.map((item) => (
                    <option key={`${item.gender} ${item.year}`}>
                      {item.gender} {item.year}
                    </option>
                  ))}
                </select>
                <p className='error'>{error}</p>
                <p className='succ'>{success}</p>
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">Age</th>
                    <th scope="col" className="px-6 py-4">Probability of dying between exact age x and age x+1</th>
                    <th scope="col" className="px-6 py-4">Number of survivors at exact age x</th>
                    <th scope="col" className="px-6 py-4">Number of deaths between exact age x and age x+1</th>
                    <th scope="col" className="px-6 py-4">Number of person-years lived between exact age x and age x+1</th>
                    <th scope="col" className="px-6 py-4">Total person-years lived after exact age x</th>
                    <th scope="col" className="px-6 py-4">Expectation of life at exact age x</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                      <th scope="col" className="px-6 py-4">x</th>
                      <th scope="col" className="px-6 py-4">q(x)</th>
                      <th scope="col" className="px-6 py-4">l(x)</th>
                      <th scope="col" className="px-6 py-4">d(x)</th>
                      <th scope="col" className="px-6 py-4">L(x)</th>
                      <th scope="col" className="px-6 py-4">T(x)</th>
                      <th scope="col" className="px-6 py-4">e(x)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    filteredData.map((item, index) => (
                      <tr className="border-b dark:border-neutral-500" key={index}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.age}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.probofDying}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.numofSuv}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.numofP}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.totalofP}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{item.expecofLife}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                      <button className='text-green-800'><AiTwotoneEdit size={20}/></button>
                      <button className='text-red-500 ml-[5px]'><MdDelete size={20} onClick={() => handleDelete(item.age)}/></button></td>
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
export default ProjectedLife