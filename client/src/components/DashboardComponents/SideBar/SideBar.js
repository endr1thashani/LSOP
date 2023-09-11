import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { BsFillPersonPlusFill , BsFillPersonFill , BsFillPersonLinesFill} from 'react-icons/bs'
import { FaMoneyBillAlt , FaPercentage } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineClose , AiOutlineMenu } from 'react-icons/ai'
const SideBar = () => {
    const [sidebar , setSideBar ] = useState(false)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    const handleSidebar = () => {
        setSideBar(!sidebar)
    }

  return (
    <div className='w-[400px] bg-gray-800 h-full text-white '>

        <div className='h-screen hidden  justify-center md:flex flex-col'>
            <div className='flex w-full items-center justify-between px-[15px] mb-[20px]'>

                <h1 className='text-xl md:text-3xl font-bold'>
                    LSOP
                </h1>

                    <button onClick={logout}>
                        <FiLogOut size={20}/>
                    </button>
            </div>
            <div className='hidden md:block'>
                <Link className='sidebar__icon-wrapper' to="/dashboard">
                    <BsFillPersonPlusFill size={25} className='mr-[15px]'/>
                    Employee Information
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/applicable-wages">
                    <FaMoneyBillAlt size={25} className='mr-[15px]'/>
                    Applicable Wages
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/probabilities">
                    <FaPercentage size={25} className='mr-[15px]'/>
                    Probabilities
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/probabilities-staying">
                    <FaPercentage size={25} className='mr-[15px]'/>
                    Probabilities Staying
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/longservice-payment">
                    <FaMoneyBillAlt size={25} className='mr-[15px]'/>
                    Long Service Payment
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/employers-mpf">
                    <BsFillPersonLinesFill size={25} className='mr-[15px]'/>
                    Employer's MPF
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/projected-life">
                    <BsFillPersonFill size={25} className='mr-[15px]'/>
                    Projected Life
                </Link>
            </div>
        </div>

        <div onClick={handleSidebar} className='block h-screen md:hidden cursor-pointer min-w-[100px]'>
                          {sidebar ? <AiOutlineClose className='mx-auto mt-[10px]' size={20} /> : <AiOutlineMenu className='mx-auto mt-[10px]' size={20} />}
            <div    
            className={
                sidebar
                      ? 'w-[250px] h-screen bg-gray-800  items-center flex flex-col text-white overflow-hidden'
                      : 'ease-in-out duration-500 fixed left-[-100%]'
                }
            >
                <div className='flex w-full items-center justify-between mt-[20px] px-[15px] mb-[20px]'>

                <h1 className='text-xl md:text-3xl font-bold'>
                    LSOP
                </h1>

                    <button onClick={logout}>
                        <FiLogOut size={20}/>
                    </button>
                </div>
             <Link className='sidebar__icon-wrapper' to="/dashboard">
                    <BsFillPersonPlusFill size={25} className='mr-[15px]'/>
                    Employee Information
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/applicable-wages">
                    <FaMoneyBillAlt size={25} className='mr-[15px]'/>
                    Applicable Wages
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/probabilities">
                    <FaPercentage size={25} className='mr-[15px]'/>
                    Probabilities
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/probabilities-staying">
                    <FaPercentage size={25} className='mr-[15px]'/>
                    Probabilities Staying
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/longservice-payment">
                    <FaMoneyBillAlt size={25} className='mr-[15px]'/>
                    Long Service Payment
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/employers-mpf">
                    <BsFillPersonLinesFill size={25} className='mr-[15px]'/>
                    Employer's MPF
                </Link>
                <Link className='sidebar__icon-wrapper' to="/dashboard/projected-life">
                    <BsFillPersonFill size={25} className='mr-[15px]'/>
                    Projected Life
                </Link>
            </div>
        </div>
    
        
    </div>
  )
}

export default SideBar