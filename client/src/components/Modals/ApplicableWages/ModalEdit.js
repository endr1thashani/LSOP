import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import axios from 'axios';

const ModalEdit = ({ closeModal, staffNr }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [year23, setYear23] = useState('');
  const [year24, setYear24] = useState('');
  const [year25, setYear25] = useState('');
  const [year26, setYear26] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/employee-information/${staffNr}`)
      .then((response) => {
        setEmployeeData(response.data);
        setYear23(response.data.year23);
        setYear24(response.data.year24);
        setYear25(response.data.year25);
        setYear26(response.data.year26);
      })
      .catch((err) => {
        setError('Failed to fetch employee data.');
      });
  }, [staffNr]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/update-applicable-wages/${staffNr}`, {
        year23,
        year24,
        year25,
        year26,
      })
      .then((res) => {
        setSuccess('Applicable wages updated');
        closeModal();
      })
      .catch((err) => {
        setError('Failed to update applicable wages');
      });
  };

  return (
    <div className="absolute flex w-full max-w-[350px] md:max-w-[600px] p-[10px] md:ml-[20%] mt-[10%] h-[630px] bg-gray-200 rounded-[7px]">
      <div className="flex flex-col md:p-[10px] items-center">
        <div className="w-full items-center justify-end mt-[5px]">
          <button onClick={() => closeModal(false)}>
            <GrClose size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full ml-[15px] md:ml-[80%]">
          <h1>Edit Applicable Wages</h1>
          <p className="error">{error}</p>
          <p className="succ">{success}</p>

          <div className="w-72 mt-[20px]">
            <label htmlFor="employeeSelect" className="block text-sm font-medium text-gray-700">
              Employee ID:
            </label>
            <input
              type="text"
              id="employeeSelect"
              value={employeeData.employeeId}
              className="mt-1 p-2 border rounded-md w-full"
              readOnly
            />
          </div>

          <div className="w-72 mt-[20px]">
            <label htmlFor="year23" className="block text-sm font-medium text-gray-700">
              Year 2023:
            </label>
            <input
              type="text"
              id="year23"
              name="year23"
              value={year23}
              onChange={(e) => setYear23(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="w-72 mt-[20px]">
            <label htmlFor="year24" className="block text-sm font-medium text-gray-700">
              Year 2024:
            </label>
            <input
              type="text"
              id="year24"
              name="year24"
              value={year24}
              onChange={(e) => setYear24(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="w-72 mt-[20px]">
            <label htmlFor="year25" className="block text-sm font-medium text-gray-700">
              Year 2025:
            </label>
            <input
              type="text"
              id="year25"
              name="year25"
              value={year25}
              onChange={(e) => setYear25(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="w-72 mt-[20px]">
            <label htmlFor="year26" className="block text-sm font-medium text-gray-700">
              Year 2026:
            </label>
            <input
              type="text"
              id="year26"
              name="year26"
              value={year26}
              onChange={(e) => setYear26(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <button className="px-[18px] py-[6px] md:py-[10px] md:px-[22px] rounded-sm bg-green-500 mt-[20px] font-bold text-[14px] md:text-[15px] hover:bg-green-400">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
