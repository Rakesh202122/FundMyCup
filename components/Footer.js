import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
<footer className="text-white bg-gray-500">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-12" alt="FundMyCup Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-white">Copyright &copy; {currentYear} <a href="/" className="hover:underline">FundMyCup™</a> - All Rights Reserved!</span>
          <div className='flex flex-col items-center gap-3'>
        <div className='text-sm md:text-base'>Follow me on</div>
        <div className='flex gap-4 items-center'>
          <a href="https://github.com/namankoolwal" target='_blank' className='border border-zinc-400 py-2 px-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2'>
            <PiGithubLogoBold className='w-5 h-5'/>
            <span className='hidden md:inline'>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/naman-khandelwal-568971189" target='_blank' className='border border-zinc-400 py-2 px-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2'>
            <ImLinkedin2 className='w-5 h-5'/>
            <span className='hidden md:inline'>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
</footer>


  )
}

export default Footer
