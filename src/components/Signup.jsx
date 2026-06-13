import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = (props) => {
    const user = props.user
    const setUser = props.setUser
    const [uname,setUname] = useState()
    const [pass,setPass] = useState()
    function handleCLick (){
        setUser([...user,{name:uname,pass:pass}])
        console.log(user)
    }
  return (
    <div className='bg-black md:p-16 p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <h1 className='text-lg md:text-3xl font-medium'>Hey Hi!</h1>
            <p className='my-2 text-sm m:text-lg'>SignUp Here :)</p>
            {/* inputs */}
            <div className='flex flex-col gap-2'>
                <input type="text"  placeholder='UserName' className='border rounded-md p-1 bg-transparent md:w-52'
                onChange={(evt) => setUname(evt.target.value)}
                />
                <input type="password" placeholder='Password'className='border rounded-md p-1 bg-transparent md:w-52' 
                onChange={(evt) => setPass(evt.target.value)}
                />
                <input type="password" placeholder='Confirm Password'className='border rounded-md p-1 bg-transparent md:w-52' />
                <button className='bg-[#B272DA] w-24 p-1 rounded-md' onClick={handleCLick}>Login</button>
                <p className='text-sm md:text-lg mt-5'>Already have an account? <Link to={"/"} className='underline'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup