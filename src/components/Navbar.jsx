import React from 'react'

const Navbar = () => {
    return (

        <nav className='bg-yellow-600'>

            <div className="mycontainer  flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span><span className='text-green-700'>OP/&gt;</span>


                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href='#'>Home</a>
                        <a className='hover:font-bold' href='/'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>

                    </li>

                </ul> */}
               <button className='text-white  bg-green-500 my-5 rounded-full flex gap-1 justify-between items-center'>
                    <img className='w-12 invert ' src="icons/Github.png" alt="githublogo" />
                    <span className='font-bold px-4'>GitHub</span>
                </button>
            </div>
        </nav>

    )
}

export default Navbar