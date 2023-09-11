import React from 'react'
import SideBar from '../components/DashboardComponents/SideBar/SideBar'
import EmployeeInformation from '../components/DashboardComponents/dashboardPages/EmployeeInformation'

const Dashboard = () => {
  return (
    <div className='flex w-full h-full'>
        <SideBar/>
        <EmployeeInformation/>
    </div>
  )
}

export default Dashboard