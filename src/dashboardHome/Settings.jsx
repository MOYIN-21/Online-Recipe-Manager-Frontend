import React from 'react'

const Settings = () => {
    const handleSubmit = ()=>{

    }
  return (
    <div className='bg-orange-50 h-screen'>
        <div className='flex justify-center items-center pt-40'>
            <div className='flex flex-col bg-white border border-white rounded-lg shadow px-8'>
                <div>
                    <p className='flex justify-start text-3xl pt-10 font-serif font-bold'>Edit Profile</p>
                    <p className='flex justify-start pt-3'>Keep your personnal details private. Information you add here is a visible to anyone who can view your profle</p>
                </div>

                <div className='' onSubmit={handleSubmit}>
                    <div className='flex justify-between mx-auto gap-5'>
                        <div className='pt-8 w-full'>
                            <label htmlFor="username" className="mb-2 flex text-orange-400 justify-start">User Name</label>
                            <input 
                            type="text" 
                            name="username" 
                            autoComplete='off'
                            className=" border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-50 block w-full p-2.5 dark:placeholder-gray-400" 
                            placeholder="username" 
                            required/>
                        </div>

                        <div className='pt-8 w-full'>
                            <label htmlFor="email" className="mb-2 flex text-orange-400 justify-start">Email</label>
                            <input 
                            type="text" 
                            name="email" 
                            autoComplete='off'
                            className=" border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-50 block w-full p-2.5 dark:placeholder-gray-400" 
                            placeholder="@gmail.com" 
                            required/>
                        </div>
                    </div>

                    <div className='pt-8 w-full'>
                            <label htmlFor="username" className="mb-2 flex text-orange-400 justify-start">Passowrd</label>
                            <input 
                            type="text" 
                            name="username" 
                            autoComplete='off'
                            className=" border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-50 block w-full p-2.5 dark:placeholder-gray-400" 
                            placeholder="reset passsword" 
                            required/>
                        </div>

                    <div class="w-full">
                        <label for="about" class="pt-8 w-full mb-2 flex justify-start text-orange-400">About</label>
                        <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-orange-400 dark:border-orange-400 dark:placeholder-gray-400 " placeholder="Tell your story..."></textarea>
                    </div>

                    <div className='flex flex-row justify-end pt-20'>
                    <button type="button" class="text-white bg-orange-400 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-orange-400">Reset</button>
                    <button type="button" class="text-white bg-orange-400 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-orange-400">Save</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Settings