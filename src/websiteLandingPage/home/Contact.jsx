import React, { useState} from 'react'
import { Link } from 'react-router-dom';
 
  const Contact = () => {
    const [input, setInput] = useState({
      email: "",
      subject: "",
    });
    const handleContact = (e) => {
      e.preventDefault();
      localStorage.setItem("user", JSON.stringify(input));
      alert("successful")
      setInput({
        email: "",
        subject: "",
      });
    
    }
    return (
      <div className="flex flex-row justify-around">

        <div className="flex items-center py-8">

          <div className="w-full px-14 h-[400px] pt-5 border border-orange-400 rounded-lg">
            <div className="flex justify-center center">
            </div>
            <h1 className="text-3xl font-bold font-serif  text-orange-400">Contact Us</h1>

              <form onSubmit={handleContact}>
                <div className="flex pt-8 flex-col gap-5"> 
                    <label htmlFor='email' className="text-orange-400 text-2xl">Email</label>
                    <input className="w-full px-5 rounded-lg h-9 text-orange-400 border border-orange-400"
                    type='email' 
                    id='email'
                    name="email"
                    value={input.email}
                    onChange={(e)=>setInput({...input, [e.target.name] : e.target.value,})
                  }
                    placeholder="@email.com"
                    autoComplete='off'
                    required
                    />
                  
          
                  
                    <label htmlFor='subject' className="flex text-orange-400 justify-center text-2xl">Subject</label>
                    <input className="w-full px-5 rounded-lg h-9 text-orange-400 border border-orange-400"
                    type='text' 
                    id='text'
                    name="subject"
                    value={input.subject}
                    onChange={(e)=>setInput({...input, 
                      [e.target.name] : e.target.value,
                    })
                  }
                    placeholder="subject"
                    autoComplete='off'
                    required
                    />
                </div>  
                <div className='pt-5 justify-center flex center items-center'>
                  <button type="submit" className="text-white bg-orange-400 rounded-lg w-80 h-14 text-center font-bold text-3xl items-center">Submit </button>
                </div>
              </form>
              
            </div>
        </div>
          
      </div>
    )
  }
  
  export default Contact;