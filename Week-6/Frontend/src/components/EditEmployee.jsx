import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { useContext } from 'react';
import { counterContextObj } from '../contexts/ContextProvider';
function EditEmployee() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { counter, changeCounter, changeCounterDecrement } = useContext(counterContextObj);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },  
  } = useForm({ defaultValues: state });

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  //form submit
  const onFormSubmit = async (data) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/employees/update/${state._id}`, data);
      if (res.status === 200) {
        navigate('/list');
      }
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
       <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Increment</button>
      <button onClick={changeCounterDecrement } className='bg-red-500 p-5'>Decrement</button>
      
      <h1 className="text-5xl text-center text-gray-600">EDIT Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4">
           SAVE
        </button>
      </form>
    </div>
  )
}

export default EditEmployee