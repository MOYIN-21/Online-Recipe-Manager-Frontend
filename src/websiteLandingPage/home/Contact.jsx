import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [input, setInput] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleContact = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    alert("successful");
    setInput({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
      <div className="flex flex-col items-center justify-center px-4 py-8 md:flex-row md:justify-around md:px-0">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl px-4 py-8 border border-orange-400 rounded-lg">
          <h1 className="text-3xl font-bold font-serif text-orange-400 text-center">Contact Us</h1>
          <form onSubmit={handleContact} className="mt-8">
            <div className="flex flex-col gap-5">
              <label htmlFor='email' className="text-orange-400 text-2xl">Email</label>
              <input
                  className="w-full px-5 py-2 rounded-lg text-orange-400 border border-orange-400"
                  type='email'
                  id='email'
                  name="email"
                  value={input.email}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  placeholder="@email.com"
                  autoComplete='off'
                  required
              />

              <label htmlFor='subject' className="text-orange-400 text-2xl">Subject</label>
              <input
                  className="w-full px-5 py-2 rounded-lg text-orange-400 border border-orange-400"
                  type='text'
                  id='subject'
                  name="subject"
                  value={input.subject}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  placeholder="subject"
                  autoComplete='off'
                  required
              />

              <label htmlFor='message' className="text-orange-400 text-2xl">Message</label>
              <textarea
                  id="message"
                  name='message'
                  className="w-full px-5 py-2 rounded-lg text-orange-400 border border-orange-400"
                  placeholder="write message"
                  value={input.message}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  autoComplete="off"
                  required
              ></textarea>
            </div>

            <div className='pt-7 flex justify-center'>
              <button type="submit" className="text-white bg-orange-400 rounded-lg w-52 md:w-80 h-14 text-center font-bold text-2xl md:text-3xl">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Contact;


// import React, { useState} from 'react'
// import { Link } from 'react-router-dom';
//
//   const Contact = () => {
//     const [input, setInput] = useState({
//       email: "",
//       subject: "",
//       message: "",
//     });
//     const handleContact = (e) => {
//       e.preventDefault();
//       localStorage.setItem("user", JSON.stringify(input));
//       alert("successful")
//       setInput({
//         email: "",
//         subject: "",
//         message: "",
//       });
//
//     }
//     return (
//       <div className="flex flex-row justify-around">
//
//         <div className="flex items-center py-8">
//
//           <div className="w-full px-14 h-[550px] pt-5 border border-orange-400 rounded-lg">
//             <div className="flex justify-center center">
//             </div>
//             <h1 className="text-3xl font-bold font-serif  text-orange-400">Contact Us</h1>
//
//               <form onSubmit={handleContact}>
//                 <div className="flex pt-8 flex-col gap-5">
//                     <label htmlFor='email' className="text-orange-400 text-2xl">Email</label>
//                     <input className="w-full px-5 rounded-lg h-9 text-orange-400 border border-orange-400"
//                     type='email'
//                     id='email'
//                     name="email"
//                     value={input.email}
//                     onChange={(e)=>setInput({...input, [e.target.name] : e.target.value,})
//                   }
//                     placeholder="@email.com"
//                     autoComplete='off'
//                     required
//                     />
//
//
//                     <label htmlFor='subject' className="flex text-orange-400 justify-center text-2xl">Subject</label>
//                     <input className="w-full px-5 rounded-lg h-9 text-orange-400 border border-orange-400"
//                     type='text'
//                     id='text'
//                     name="subject"
//                     value={input.subject}
//                     onChange={(e)=>setInput({...input,
//                       [e.target.name] : e.target.value,
//                     })
//                   }
//                     placeholder="subject"
//                     autoComplete='off'
//                     required
//                     />
//
//                     <label htmlFor='message' className="flex text-orange-400 justify-center text-2xl">Message</label>
//                     <textarea
//                             id="text"
//                             // rows="6"
//                             name='message'
//                             className="block p-2.5 w-full text-sm text-orange-400 rounded-lg shadow-sm border border-orange-400 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
//                             placeholder="write message"
//                             value={input.message}
//                             onChange={(e)=>setInput({...input,
//                               [e.target.name] : e.target.value,
//                             })
//                           }
//                           authocomplete="off"
//                           required
//                         ></textarea>
//
//                     {/* <input className="w-full px-5 rounded-lg h-16 text-orange-400 border border-orange-400"
//                     type='text'
//                     id='text'
//                     name="message"
//                     value={input.message}
//                     onChange={(e)=>setInput({...input,
//                       [e.target.name] : e.target.value,
//                     })
//                   }
//                     placeholder="write message"
//                     autoComplete='off'
//                     required
//                     /> */}
//                 </div>
//
//
//                 <div className='pt-7 justify-center flex center items-center'>
//                   <button type="submit" className="text-white bg-orange-400 rounded-lg w-80 h-14 text-center font-bold text-3xl items-center">Send Message </button>
//                 </div>
//               </form>
//
//             </div>
//         </div>
//
//       </div>
//     )
//   }
//
//   export default Contact;