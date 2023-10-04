import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginNav from '../Components/LoginNav'

const ASignup = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
	let [password, setPassword] = useState("")

    let nameData = (e) => { setName(e.target.value) }
    let emailData = (e) => { setEmail(e.target.value) }
    let passwordData = (e) => { setPassword(e.target.value) }

	let navigate =useNavigate()


    let formHandle = (e) => {
		e.preventDefault()
		let payload = {name, email, password }
		axios.post("http://localhost:9000/aregister", payload)
	.then(result => console.log(result))
        .catch(err => console.log(err))
        navigate("/alogin")
        }
        let formHandle1 = (e) => {
            e.preventDefault()
            navigate("/alogin")
        }
  return (
    <div>
               <form action='' onSubmit={formHandle}  >
<section class=" gradient-custom" id='login'  > <LoginNav/>
  <div class="container p-15 h-10"  >
    <div class="row d-flex justify-content-center align-items-center h-30 "style={{paddingTop:"55px"}} >
      <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
        <div class="card bg-dark text-white" style={{borderradius:"1rem",width:'450px'}}  >
          <div class="card-body p-5 text-center" >

            <div class="mb-md-5 mt-md-4 pb-5" style={{height:"470px",paddingTop:"10px",width:"350px"}}>

              <h2 class="fw-bold mb-2 text-uppercase" >Admin Signup</h2>
              <p class="text-white-50 mb-3">Please enter your  Details!</p>

              <div class="form-outline form-white mb-2">
              <label class="form-label" for="typeNameX">Name</label>
                <input type="name" id="typeEmailX" class="form-control form-control-lg" placeholder='Please enter your Name' value={name} onChange={nameData}/>
              </div>

              <div class="form-outline form-white mb-2">
              <label class="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Please enter your Email' value={email} onChange={emailData}/>
              </div>

              <div class="form-outline form-white mb-4">
              <label class="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='please enter your Password' value={password} onChange={passwordData} />
              </div>

              <p class="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>

              <div class="d-flex justify-content-center text-center mt-3 pt-1 pb-2">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>
               
            <div>
              <p class="mb-0"> have an account? <a href="#!" class="text-white-50 fw-bold" onClick={formHandle1}>Login</a>
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
    </div>
  )
}

export default ASignup