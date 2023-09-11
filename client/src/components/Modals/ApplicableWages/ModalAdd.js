import React ,{ useState , useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import axios from 'axios'
const ModalAdd = ({closeModal}) => {

  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [staffNr, setStaffNr] = useState('');
  const [gender, setGender] = useState('');
  const [data, setData] = useState([]);
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/applicable-wages', {
        staffNr,
        gender,
        year,
      })
      .then((res) => {
        alert('Applicable wages created');
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/employee-information').then((response) => {
      setData(response); // Assuming the response is an array
    });
  });

  const handleEmployeeChange = (e) => {
    const selectedEmployeeData = data.find((employee) => employee.staffNr === e.target.value);

    if (selectedEmployeeData) {
      setSelectedEmployee(selectedEmployeeData.staffNr);
      setStaffNr(selectedEmployeeData.staffNr); 
      setGender(selectedEmployeeData.gender); 
    } else {
      setSelectedEmployee('');
      setStaffNr('');
      setGender('');
    }
  };
  return (
    <div className='absolute flex w-full max-w-[350px] md:max-w-[600px] p-[10px] md:ml-[20%] mt-[10%] h-[500px] bg-gray-200 rounded-[7px] '>
      <div className='flex flex-col md:p-[10px] items-center'>

        <div className='w-full items-center justify-end mt-[5px]'>
          <button onClick={() => closeModal(false)}>
            <GrClose size={20}/>
          </button>
        </div>


          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full ml-[15px] md:ml-[80%]'>
            <h1>Add Applicable Wages</h1>
            <div className='w-72 mt-[20px]'>
            <label htmlFor='employeeSelect' className='block text-sm font-medium text-gray-700'>
              Select Employee:
            </label>
            <select
              id='employeeSelect'
              className='mt-1 p-2 border rounded-md w-full'
              value={selectedEmployee}
              onChange={handleEmployeeChange} // Call the new handler
              required>
              <option value=''>Select an Employee</option>
              {data.map((employee) => (
                <option key={employee.staffNr} value={employee.staffNr}>
                  {`${employee.staffNr} - ${employee.gender}`} {/* Display both staffNr and gender */}
                </option>
              ))}
            </select>
          </div>

          <div className="w-72 mt-[20px]">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    type='text'
                    name='gender'
                    className="peer h-full w-full rounded-[7px] border border-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={(e) => setGender(e.target.value)}
                    required
                    />
                    <label htmlFor='gender' className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Gender
                    </label>
                </div>
            </div>
          
          <div className="w-72 mt-[20px]">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    type='text'
                    name='year'
                    className="peer h-full w-full rounded-[7px] border border-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={(e) => setYear(e.target.value)}
                    required
                    />
                    <label htmlFor='year' className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Year
                    </label>
                </div>
            </div>




                <button className='px-[18px] py-[6px] md:py-[10px] md:px-[22px]  rounded-sm bg-green-500 mt-[20px] font-bold text-[14px] md:text-[15px] hover:bg-green-400'>Add</button>

            </form>

      </div>
    </div>
  )
}

export default ModalAdd