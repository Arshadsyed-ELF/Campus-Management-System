const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");


const app = express();
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "DELETE", "PUT"],
        credentials: true
    }
))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookie())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));



mongoose.connect('mongodb://127.0.0.1:27017/College')


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    hod:String,
    department: String,
    coursecode:String,
    credits:String,
    year: String,
    address: String,
    attendance: String,
    empid: String,
    rollno: String,
    subject: String,
    code:String,
    description: String,
    bookname:String,
    bookcode:String,
    hostelname:String,
    rooms:String,
    capacity:String,
    busno:String,
    route:String,
    drivername:String,
    registrationDate: {
        type: String, // Store dates as strings
        default: () => new Date().toLocaleDateString('en-US'), // Set the default value to the current date in "MM/DD/YYYY" format
    },
});


        // student Api
const Usermodel = new mongoose.model("user", UserSchema)

app.get("/get", async (req, res) => {
    let data = await Usermodel.find()
    console.log(data)
    res.send(data)
})

app.get("/getuser/:id", (req, res) => {
    const id = req.params.id;
    Usermodel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// get api for particular user
app.get("/getuser", (req, res) => {
    if (req.session.name, req.session.email, req.session.year, req.session.department, req.session.address, req.session.rollno, req.session.attendance) {
        return res.json({ valid: true,id: req.session._id, name: req.session.name, email: req.session.email, rollno: req.session.rollno, year: req.session.year, department: req.session.department, address: req.session.address, attendance: req.session.attendance })
    } else {
        return res.json({ valid: false })
    }
})


//post api
app.post('/login', (req, resp) => {
    const { email, password } = req.body;
    Usermodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // // resp.json("login sucess")
                    // req.session.name =user.name+user.email + user.address +user.rollno +user.attendance; 
                    req.session._id = user._id
                    req.session.name = user.name
                    req.session.email = user.email
                    req.session.rollno = user.rollno
                    req.session.year = user.year
                    req.session.department = user.department
                    req.session.address = user.address
                    req.session.attendance = user.attendance
                    console.log(req.session.name)
                    return resp.json({ Status: "Success", user: { id:user.id,name: user.name, email: user.email, address: user.address, year: user.year, department: user.department, rollno: user.rollno, attendance: user.attendance } })

                    // Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
                    //     if(err){
                    //         resp.send({result:" something went wrong"})
                    //     }
                    //     resp.send({user, auth:token})
                    // })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            res.status(500).json({ message: "Logout failed" });
        } else {
            res.status(200).json({ message: "Logout successful" });
        }
    });
});


app.post('/register', (req, resp) => {
    const { name, email, password } = req.body;
    Usermodel.findOne({ email: email })
        .then(user => {
            if (user) {
                resp.json("Already have an account")
            } else {
                Usermodel.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json(err))
})

app.put('/supdate/:id', (req, res) => {
    const id = req.params.id;
    Usermodel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        year: req.body.year,
        department: req.body.department,
        address: req.body.address
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/supdate1/:id', (req, res) => {
    const id = req.params.id;
    Usermodel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        rollno: req.body.rollno,
        year: req.body.year,
        department: req.body.department,
        attendance: req.body.attendance
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete("/delete/:id", async (req, res) => {
    const result = await Usermodel.deleteOne(
        { _id: req.params.id }
    )
    res.send(result)
})


//  Admin Api //
const Usermodel1 = new mongoose.model("owner", UserSchema)
// app.get('/get',(req,resp)=>{

// })
app.get("/getadmin", (req, res) => {
    if (req.session.name) {
        return res.json({ valid: true, name: req.session.name })
    } else {
        return res.json({ valid: false })
    }
})
app.post('/alogin', (req, resp) => {
    const { email, password } = req.body;
    Usermodel1.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // resp.json("login sucess")
                    req.session.name = user.name;
                    console.log(req.session.name)
                    return resp.json({ Status: "Success", user: { name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

app.post('/aregister', (req, resp) => {
    const { name, email, password } = req.body;
    Usermodel1.findOne({ email: email })
        .then(user => {
            if (user) {
                resp.json("Already have an account")
            } else {
                Usermodel1.create({ email: email, name: name, password: password })
                    .then(result => resp.json(" Admin Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json(err))
})



//   faculty Api //
const Usermodel2 = new mongoose.model("faculty", UserSchema)

app.get("/fac", async (req, res) => {
    let data = await Usermodel2.find()
    console.log(data)
    res.send(data)
})

app.get("/getfac", async (req, res) => {
    if (req.session.name, req.session.email, req.session.department, req.session.empid, req.session.address, req.session.attendance) {
        return res.json({ valid: true, name: req.session.name, email: req.session.email, department: req.session.department, empid: req.session.empid, address: req.session.address, attendance: req.session.attendance })
    } else {
        return res.json({ valid: false })
    }
})

app.get("/getfac/:id", (req, res) => {
    const id = req.params.id;
    Usermodel2.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/flogin', (req, resp) => {
    const { email, password } = req.body;
    Usermodel2.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    req.session.name = user.name
                    req.session.email = user.email
                    req.session.empid = user.empid
                    req.session.department = user.department
                    req.session.address = user.address;
                    req.session.attendance = user.attendance;
                    console.log(req.session.empid)
                    // resp.json("login sucess")  
                    return resp.json({ Status: "Success", user: { name: user.name, email: user.email, empid: user.empid, address: user.address, department: user.department, attendance: user.attendance } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

app.post('/fregister', (req, resp) => {
    const { name, email, password } = req.body;
    Usermodel2.findOne({ email: email })
        .then(user => {
            if (user) {
                resp.json("Already have an account")
            } else {
                Usermodel2.create({ email: email, name: name, password: password })
                    .then(result => resp.json(" Faculty Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json(err))
})



app.put('/fupdate/:id', (req, res) => {
    const id = req.params.id;
    Usermodel2.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        address: req.body.address
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/fupdate1/:id', (req, res) => {
    const id = req.params.id;
    Usermodel2.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        rollno: req.body.rollno,
        year: req.body.year,
        department: req.body.department,
        attendance: req.body.attendance
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.delete("/fdelete/:id", async (req, res) => {
    let data = await Usermodel2.deleteOne(
        { _id: req.params.id }
    )
    res.send(data)
})


            // Courses API
 const Courses = new mongoose.model("course", UserSchema)
 // create classroom
 app.post('/createcourse', async (req, res) => {
     try {
         const { coursecode, department, credits,hod } = req.body;
         const course = new Courses({
             coursecode,
             department,
             credits,
             hod,
 
         });
         const savedCourse = await course.save();
         res.json(savedCourse);
     } catch
     (err) {
         res.status(400).json({ error: err.message });
     }
 });
 
 app.get('/getcourse', async (req, res) => {
     try {
         const course = await Courses.find();
         res.json(course);
     } catch (err) {
         res.status(500).json({ error: err.message });
     }
 });
 
 // single course
 app.get("/getcourse/:id", (req, res) => {
     const id = req.params.id;
     Courses.findById({ _id: id })
         .then(user => {
             console.log(user)
             res.json(user)
         })
         .catch(err => {
             console.log("something wrong")
             res.json(err)
         })
 })
 app.delete('/coursedelete/:id', async (req, res) => {
     let data = await Courses.deleteOne(
         { _id: req.params.id }
     )
     res.send(data)
 })

           // hostel API
           const Hostel = new mongoose.model("hostel", UserSchema)
           // create classroom
           app.post('/createhostel', async (req, res) => {
               try {
                   const { hostelname, rooms, capacity, } = req.body;
                   const hostel = new Hostel({
                       hostelname,
                       rooms,
                       capacity,
                       
           
                   });
                   const savedhostel = await hostel.save();
                   res.json(savedhostel);
               } catch
               (err) {
                   res.status(400).json({ error: err.message });
               }
           });
           
           app.get('/gethostel', async (req, res) => {
               try {
                   const hostel = await Hostel.find();
                   res.json(hostel);
               } catch (err) {
                   res.status(500).json({ error: err.message });
               }
           });
           
           // single hostel
           app.get("/gethostel/:id", (req, res) => {
               const id = req.params.id;
               Hostel.findById({ _id: id })
                   .then(user => {
                       console.log(user)
                       res.json(user)
                   })
                   .catch(err => {
                       console.log("something wrong")
                       res.json(err)
                   })
           })
           app.delete('/hosteldelete/:id', async (req, res) => {
               let data = await Hostel.deleteOne(
                   { _id: req.params.id }
               )
               res.send(data)
           })

                     // Transport API
 const Transport = new mongoose.model("transport", UserSchema)
 // create classroom
 app.post('/createtransport', async (req, res) => {
     try {
         const { busno, route, drivername,capacity } = req.body;
         const transport = new Transport({
             busno,
             route,
             drivername,
             capacity,
 
         });
         const savedtransport = await transport.save();
         res.json(savedtransport);
     } catch
     (err) {
         res.status(400).json({ error: err.message });
     }
 });
 
 app.get('/gettransport', async (req, res) => {
     try {
         const transport = await Transport.find();
         res.json(transport);
     } catch (err) {
         res.status(500).json({ error: err.message });
     }
 });
 
 // single transport
 app.get("/gettransport/:id", (req, res) => {
     const id = req.params.id;
     Transport.findById({ _id: id })
         .then(user => {
             console.log(user)
             res.json(user)
         })
         .catch(err => {
             console.log("something wrong")
             res.json(err)
         })
 })
 app.delete('/transportdelete/:id', async (req, res) => {
     let data = await Transport.deleteOne(
         { _id: req.params.id }
     )
     res.send(data)
 })


            // CLASSROOM API
const Classroom = new mongoose.model("class", UserSchema)
// create classroom
app.post('/create', async (req, res) => {
    try {
        const { name, subject, description } = req.body;
        const classroom = new Classroom({
            name,
            subject,
            description,

        });
        const savedClassroom = await classroom.save();
        res.json(savedClassroom);
    } catch
    (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/getclassroom', async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.json(classrooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// single classroom
app.get("/getclassroom/:id", (req, res) => {
    const id = req.params.id;
    Classroom.findById({ _id: id })
        .then(user => {
            console.log(user)
            res.json(user)
        })
        .catch(err => {
            console.log("something wrong")
            res.json(err)
        })
})
app.delete('/classdelete/:id', async (req, res) => {
    let data = await Classroom.deleteOne(
        { _id: req.params.id }
    )
    res.send(data)
})


// Labs API
const Lab = new mongoose.model("lab", UserSchema)
// create classroom
app.post('/createlab', async (req, res) => {
    try {
        const { name, subject, code, description } = req.body;
        const lab = new Lab({
            name,
            subject,
            code,
            description,

        });
        const savedLab = await lab.save();
        res.json(savedLab);
    } catch
    (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/getlab', async (req, res) => {
    try {
        const lab = await Lab.find();
        res.json(lab);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
  
// single classroom
app.get("/getlab/:id", (req, res) => {
    const id = req.params.id;
    Lab.findById({ _id: id })
        .then(user => {
            console.log(user)
            res.json(user)
        })
        .catch(err => {
            console.log("something wrong")
            res.json(err)
        })
})
app.delete('/labdelete/:id', async (req, res) => {
    let data = await Lab.deleteOne(
        { _id: req.params.id }
    )
    res.send(data)
})


//      EVENTS API 
const Events = new mongoose.model("event", UserSchema)

// Create Events
app.post('/createevent', async (req, res) => {
    try {
        const { name, subject, description } = req.body;
        const event = new Events({
            name,
            subject,
            description,

        });
        const savedEvents = await event.save();
        res.json(savedEvents);
    } catch
    (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/getevents', async (req, res) => {
    try {
        const event = await Events.find();
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/eventdelete/:id', async (req, res) => {
    let data = await Events.deleteOne(
        { _id: req.params.id }
    )
    res.send(data)
})

                    //   Library
  const  Library= new mongoose.model("library", UserSchema)

app.post('/createlibrary', async (req, res) => {
    try {
        const { bookname, email, bookcode, rollno } = req.body;
        const event = new Library({
            bookname,
            email,
            bookcode,
            rollno,

        });
        const savedEvents = await event.save();
        res.json(savedEvents);
    } catch
    (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/getlibrary', async (req, res) => {
    try {
        const event = await Library.find();
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/librarydelete/:id', async (req, res) => {
    let data = await Library.deleteOne(
        { _id: req.params.id }
    )
    res.send(data)
})


//   Complaints
const Complaints = new mongoose.model("compalint", UserSchema)

app.post('/createcomplaint', async (req, res) => {
    try {
        const { name, rollno, email, description } = req.body;
        const event = new Complaints({
            name,
            rollno,
            email,
            description,

        });
        const savedEvents = await event.save();
        res.json(savedEvents);
    } catch
    (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/getcomplaint', async (req, res) => {
    try {
        const event = await Complaints.find();
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/complaintdelete/:id', async (req, res) => {
    let data = await Complaints.deleteOne(
        { _id: req.params.id }
    )
    res.send(data)
})


// Setup nodemailer transporter
// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "arshadsyed074@gmail.com",
//       pass: "9505221870Syed"
//     },    
//   });

//   contactEmail.verify((error) => {   
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   app.post("/contact", (req, res) => {
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail = {
//       from: name,
//       to: "arshadsyed074@gmail.com",
//       subject: "Contact Form Submission - Portfolio",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Phone: ${phone}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json(error);
//         console.log("server problem")
//       } else {
//         res.json({ code: 200, status: "Message Sent" });
//         console.log("server ")
//       }
//     });
//   });

app.listen(9000, () => {
    console.log("listening")
})
