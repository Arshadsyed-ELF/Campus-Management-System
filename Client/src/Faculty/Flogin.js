import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useHistory } from 'react-router-dom';
import Links from '../Components/Links';
import LoginNav from '../Components/LoginNav';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Flogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
  
    let emailData = (e) => { setEmail(e.target.value) }
    let passwordData = (e) => { setPassword(e.target.value) }
  
    let navigate = useNavigate()
  
    axios.defaults.withCredentials=true;
    const formHandle = (e) => {
      e.preventDefault()
      let payload = { email, password }
      axios.post("http://localhost:9000/flogin", payload)  
        .then(res => {
          console.log("login: " + res.data.Status);
          // if (res.data.Status === "Success") {
            if (res.data.Status === "Success") {
              console.log(res.data.user); 
              navigate('/fdash')
            } else {
            toast.error("wrong credentials")
              
            }
        // }
        }).catch(err => console.log(err))
    }
  
    
    let formHandle1 = (e) => {
      e.preventDefault()
      navigate("/fsignup")
    }
  return (
    <div>
         <form action='' onSubmit={formHandle}> 
        <section class="vh-70 gradient-custom" id='login'> <LoginNav/>
          <div class="container p-15 h-20" > 
            <div class="row d-flex justify-content-center align-items-center h-30" style={{paddingTop:"60px"}}>
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style={{ borderradius: "1rem",width:"450px" }}>
                  <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5" style={{height:"470px",paddingTop:"10px",width:"350px"}}>

                      <h2 class="fw-bold mb-2 text-uppercase"> Faculty Login</h2>
                      <p class="text-white-50 mb-5">Please enter your login Email and password!</p>

                      <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typeEmailX">Email</label>
                        <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Please enter your Email' value={email} onChange={emailData} />
                      </div>

                      <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typePasswordX">Password</label>
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='please enter your Password' value={password} onChange={passwordData} />
                      </div>

                      <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                      <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                      <div class="d-flex justify-content-center text-center mt-4 pt-1 pb-4">
                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                      </div>
   
                      <div>
                      <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold" onClick={formHandle1}>Sign Up</a>
              </p>
                    </div>
 
                    </div>

                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
       <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Flogin