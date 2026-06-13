import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = (props) => {

    const user = props.user
    const [uname,setUname] = useState()
    const [pass,setPass] = useState()
    const [ruser,setRuser] = useState(true)
    const navigate = useNavigate()
    let userfound = false
    function userCheck(){
        user.forEach(function(item){
            if(item.name === uname && item.pass ===pass){
                userfound = true
                navigate("/landing",{state:{user:uname}})
            }
        })
        if(userfound==false){
            setRuser(false)
        }
    }

  return (
    <div className='bg-black md:p-16 p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <h1 className='text-lg md:text-3xl font-medium'>Hey Hi!</h1>
            {ruser? <p className='my-2 text-sm md:text-lg'>I help You Manage Your Activities after Login</p>:  <p className='my-2 text-red-500'>Please SignUp before you Login</p>}
           
            {/* inputs */}
            <div className='flex flex-col gap-2'>
                <input type="text"  placeholder='UserName' className='border rounded-md p-1 bg-transparent md:w-52'
                onChange={(evt) => setUname(evt.target.value)}
                />
                <input type="password" placeholder='Password'className='border rounded-md p-1 bg-transparent md:w-52' 
                onChange={(evt) => setPass(evt.target.value)}
                />
                <button className='bg-[#B272DA] w-24 p-1 rounded-md' onClick={userCheck}>Login</button>
                <p className='text-sm md:text-lg mt-5'>Don't have an account? <Link to={"/signup"} className='underline'>SignUp</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login