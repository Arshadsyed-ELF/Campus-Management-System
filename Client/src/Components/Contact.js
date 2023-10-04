

// import React from 'react'
// import { useState } from "react"
// import { Container, Row, Col } from "react-bootstrap";
// // // import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import axios from 'axios';

// const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:9000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault()
//   //   let payload = { formInitialDetails }
//   //   axios.post("http://localhost:9000/contact", payload)
//   //     .then(res => {
//   //       console.log("login: " + res.data.Status);
//   //         if (res.data.Status === "Success") {
//   //         console.log(res.data.user); 
         
//   //         //  setUserInfo(res.data.user);
//   //         //   navigate(`/user/${encodeURIComponent(JSON.stringify(res.data.user))}`);
//   //         } else {
//   //         alert("wrong credentials")
//   //         }
//   //     }).catch(err => console.log(err))
//   // }

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={''} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                     <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                       <button type="submit"><span>{buttonText}</span></button>
//                     </Col>
//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.succes === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default Contact

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';



 const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lxlfhtj',
     'template_rasme5k', 
     form.current,
      'TWSWO_xYxTES4RYqE')
      .then((result) => {
          console.log(result.text);
          console.log("sent")
           toast.success("Mail Sent Sucessfully");
           
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send");
      });
      setName('');
      setLastname('');
      setPhno('');
      setEmail('');
      setMessage('');
      
  };

  return (
    <div>
   {/* <div className="contact-form-container">
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <label className="form-label">Name</label>
        <input type="text" name="user_name" className="form-input" />
        
        <label className="form-label">Email</label>
        <input type="email" name="user_email" className="form-input" />
        
        <label className="form-label">Message</label>
        <textarea name="message" className="form-textarea"></textarea>
        
        <input type="submit" value="Send" className="form-submit" />
      </form>
    </div> */}
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
               {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form}  onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" name="user_name"     value={name}      onChange={event => setName(event.target.value)}  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="Last Name" name="user_last" value={lastname}      onChange={event => setLastname(event.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address"  name='Email' value={email}      onChange={event => setEmail(event.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name='Phno_Number' value={phno}      onChange={event => setPhno(event.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name='message' value={message}      onChange={event => setMessage(event.target.value)} ></textarea>
                      <button type="submit" ><span>send</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.succes === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>

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
  );
};

export default Contact


