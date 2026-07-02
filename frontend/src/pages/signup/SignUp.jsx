import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const {signup, loading} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({
            ...inputs,
            gender: gender
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

  return (
    <div className='flex flex-col items-center justify-center w-full sm:w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md glass'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up
                <span className='text-blue-500 '> ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10 input-glass'
                    value={inputs.fullname}
                    onChange={(e) => setInputs(
                        {...inputs, fullname: e.target.value}
                    )}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 input-glass'
                    value={inputs.username}
                    onChange={(e) => setInputs(
                        {...inputs, username: e.target.value}
                    )}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 input-glass'
                    value={inputs.password}
                    onChange={(e) => setInputs(
                        {...inputs, password: e.target.value}
                    )}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='confirm password' className='w-full input input-bordered h-10 input-glass'
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs(
                        {...inputs, confirmPassword: e.target.value}
                    )}
                    />
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                <div>
                    <Link to="/login" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>{`Already have an account?`}</Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}
                        > 
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default SignUp