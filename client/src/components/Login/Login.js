import React , { useState } from 'react'
import { Link ,  useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [ email , setEmail ] = useState()
    const [ password , setPassword ] = useState()
    const navigate = useNavigate(); // Access the history object

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email,
          password,
        });
  
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <div className='main__container'>
        <form onSubmit={handleSubmit} className='form__wrapper'>

            <h1 className='mb-[40px] font-semibold text-2xl md:text-3xl'>LOGIN</h1>

            <div className="w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    type='email'
                    name='email'
                    className="peer h-full w-full rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <label htmlFor='email' className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Email
                    </label>
                </div>
            </div>

            <div className="w-72 mt-[40px]">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    type='password'
                    name='password'
                    className="peer h-full w-full rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <label htmlFor='password' className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Password
                    </label>
                </div>
            </div>
            

                <button className='px-[18px] py-[6px] md:py-[10px] md:px-[22px] bg-blue-500 mt-[20px] rounded-[5px] text-white font-bold text-[14px] md:text-[17px]'>Login</button>

            <p className='font-medium text-[12px] md:text-[14px] mt-[20px]'>Don't have an account ? Register <Link className='text-blue-400 border-b-[1px] border-b-blue-400' to='/register'>here!</Link></p>
        </form>
    </div>
  )
}

export default Login