import React, { useState } from "react";
import logo from '../assets/spice.png'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login")
    }
  return (
    <div>
        <section className="bg-white">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
  <a href="/home" className="flex items-center mb-6 text-2xl font-semibold text-orange-400">
          <img className="w-14 h-10 mr-2" src={logo} alt="logo"/>
          Recipe    
      </a>
      
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-orange-400">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  SignUp for your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">

                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium dark:text-white">Your username</label>
                      <input 
                      type="text" 
                      id="userNameId"
                      name="username" 
                      autoComplete='off'
                      value={input.username}
                      onChange={(e)=> setInput({...input, 
                        [e.target.name] : e.target.value,
                            })
                        }
                      className=" border border-orange-400 sm:text-sm rounded-lg focus:border-orange-400 block w-full p-2.5 dark:placeholder-gray-400" 
                      placeholder="username" 
                      required=""/>
                  </div>

                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Your email</label>
                      <input 
                      type="email" 
                      id="emailId"
                      name="email" 
                      autoComplete='off'
                      value={input.email}
                      onChange={(e)=> setInput({...input, 
                        [e.target.name] : e.target.value 
                            })
                        }
                      className=" border border-orange-400 sm:text-sm rounded-lg focus:border-orange-400 block w-full p-2.5 dark:placeholder-gray-400" 
                      placeholder="name@email.com" 
                      required=""/>
                  </div>

                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input 
                      type="password" 
                      id="passwordId"
                      name="password"
                      autoComplete='off'
                      value={input.password}
                      onChange={(e)=> setInput({...input, 
                        [e.target.name] : e.target.value,
                            })
                        } 
                      placeholder="••••••••" 
                      className=" border border-orange-400 sm:text-sm rounded-lg focus:border-orange-400 block w-full p-2.5 dark:placeholder-gray-400" 
                      required=""/>
                  </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 rounded" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label For="remember" className="text-white">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="" className="w-full text-orange bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <p className="text-sm font-light text-white">
                      ALready have an account yet? <Link to="/login" className="font-medium hover:underline text-black">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default SignUp