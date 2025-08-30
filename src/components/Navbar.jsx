import React from 'react'

const Navbar = () => {
  return (
    // <nav className='text-gray-200 bg-gradient-to-l from-[#657597]  to-[#2a3749]'>
  <nav className='border-b border-gray-400 mb-9 text-gray-200 bg-[#203149]'>

      <div className="mycontainer flex justify-between items-center px-4 h-16">
        <div className="logo font-bold text-2xl">PASS-HUB</div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul> */}
        <button className='bg-gray-300 hover:bg-gray-400 cursor-pointer rounded'>
          <img src="/icons/github.svg" alt="github logo" className='inline-block w-10 p-1' />
          <span className='text-gray-900 font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
