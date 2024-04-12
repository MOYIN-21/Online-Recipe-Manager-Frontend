import React from 'react'
 
  
  const Contact = () => {
    return (
      <div className="flex flex-row justify-around">

      <div className="flex items-center py-8">

        <div className=" w-full px-14 h-[400px] pt-5 border border-orange-400 rounded-lg">
        <div className="flex justify-center center">
          </div>
          <h1 className="text-3xl font-bold font-serif  text-orange-400">Contact Us</h1>
          {/* <p ref={errRef} className={`${errMsg ? 'errmsg text-white text-2xl center flex justify-center' : 'offscreen'}`} aria-live='assertive'>{errMsg}</p> */}

            <form >
              <div className="flex pt-8 flex-col gap-5"> 
                <label htmlFor='email' className="text-orange-400 text-2xl">Email</label>
                <input className="w-full px-5 rounded-lg h-9 text-orange-400 border border-orange-400"
                type='email' 
                id='email'
                placeholder="@email.com"
               //  ref={userRef}
                autoComplete='off'
               //  onChange={(e) => setemail(e.target.value)}
               //  value={email}
                required
                />
              
      
              
                <label htmlFor='subject' className="flex text-orange-400 justify-center text-2xl">Subject</label>
                <input className="w-full px-5 rounded-lg h-9 text-orange-400 border border-orange-400"
                type='text' 
                id='text'
                placeholder="subject"
                autoComplete='off'
               //  onChange={(e) => setPassword(e.target.value)}
               //  value={password}
                required
                />
              </div>  
              <div className='pt-5 justify-center flex center items-center'>
              <   button type="button" className="text-white bg-orange-400 rounded-lg w-80 h-14 text-center font-bold text-3xl items-center">Submit </button>
              </div>
            </form>
            
          </div>
        </div>
          
    </div>
    )
  }
  
  export default Contact;