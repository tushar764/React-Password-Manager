import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, [])

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    }); // Consider replacing this with a more user-friendly notification.
  };

  const ShowPassword = () => {
    passwordRef.current.type = "text"

    console.log(ref.current.src)
    if (ref.current.src.includes("icons/hide.png")) {
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "text"
    }
    else {
      ref.current.src = "icons/hide.png"
      passwordRef.current.type = "password"
    }


  }
  const SavePassword = () => {
    setPasswordArray([...passwordArray, {...form,id: uuidv4()}])

    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {form,id: uuidv4()}]))
    setform({ site: "", username: "", password: "" })
    console.log(...passwordArray,form)
    toast.success('Password saved successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });

  }
  const deletePassword = (id) => {
    console.log("Deleting password with id", id)
    let c = confirm("Do you really delete this password?")
    if (c) {
      setPasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id))) 
    toast.error('Password deleted successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });
    }
   
  
  //   console.log(...passwordArray,form)

  }
  const editPassword = (id) => {
    
    console.log("Editing password with id", id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
  

  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} hideProgressBar theme="colored" />

  
    

    <div className=" mx-auto bg-slate-50 mycontainer">
      <h1 className=' text-4xl text font-bold text-center'>

        <span className='text-green-700'>&lt;</span>
        <span>Pass</span><span className='text-green-700'>OP/&gt;</span>



      </h1>
      <p className='text-green-700  text-lg text-center'>Your own Password manager</p>
      <div className=" flex flex-col p-4 text-black items-center bg-yellow-100 gap-8">
        <input value={form.site} onChange={handleChange} placeholder='  Enter your website Url' className='rounded-full border border-green-500 py-0.5 w-full' type="text" name="site" id="" />
        <div className="flex w-full justify-between gap-8">
          <input value={form.username} onChange={handleChange} placeholder='  Enter Username' className='rounded-full border border-green-500 py-0.5 w-full' type="text" name="username" id="" />
          <div className='relative'>


            <input ref={passwordRef} onChange={handleChange} placeholder=' Enter Password' className='rounded-full border border-green-500 py-0.5 w-full' type="password" name="password" id="" />
            <span className='absolute right-0 top-1 cursor-pointer' onClick={ShowPassword}>  <img ref={ref} className='p-1' width={26} src="icons/eye.png" /></span>

          </div>
        </div>
        <button onClick={SavePassword} className='flex justify-center items-center px-6 py-2 hover:bg-green-200 border-4 border-green-300 bg-green-500 rounded-full w-fit'>
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover">
          </lord-icon>
          Add Password</button>

      </div>
      <div className='passwords'>
        <h2 className='font-bold text-2xl py-4'>Your passwords</h2>
        {passwordArray.length === 0 && <div> No password to Show </div>}
        {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
          <thead className=' bg-green-600 text-white'>
            <tr>
              <th className='py-2'>Site</th>
              <th className='py-2'>username</th>
              <th className='py-2'>passwords</th>
              <th className='py-2'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-green-200'>
            {passwordArray.map((item, index) => {
              return <tr key={index}>


<td className='py-2 border border-white text-center'>
                      <div className='flex justify-center items-center'>
                        <a href={item.site} target='_blank' rel="noopener noreferrer">{item.site}</a>
                        <div className='copyicons size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                          <img className='cursor-pointer w-4' src="icons/copyicons.png" alt="Copy" />
                        </div>
                      </div>
                    </td>
                    <td className=' py-2 border border-white text-center'>
                      <div className='flex items-center justify-center'>
                        <span>{item.username}</span>
                        <div className='copyicons size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                          <img className='cursor-pointer w-4' src="icons/copyicons.png" alt="Copy" />
                        </div>
                      </div>
                    </td>
                    <td className=' border border-white text-center'>
                      <div className='flex justify-center items-center'>
                        <span>{item.password}</span>
                        <div className='copyicons size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                          <img className='cursor-pointer w-4' src="icons/copyicons.png" alt="Copy" />
                        </div>
                      </div>
                    </td>
                    <td className='border border-white text-center flex items-center justify-center'>
                      <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}> 
                        <img src="icons/edit.gif" width={20} alt="Edit Icon" />
                      </span>
                      <span className='cursor-pointer mx-1'onClick={()=>{deletePassword(item.id)}}>
                        <img src="icons/trashbin.gif" width={20} alt="Delete Icon" />
                      </span>
                    </td>
                  </tr>
              
            })}
          </tbody>
        </table>}


      </div>
    </div>
      </>
  )
}

export default Manager