import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar"
import About from './Components/LandinPage'
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import { Route, } from 'react-router-dom';
import Links from './Components/Links';
import ALogin from './Admin/ALogin';
import Flogin from './Faculty/Flogin';
import ASignup from './Admin/ASignup';
import Fsignup from './Faculty/Fsignup';
import AdminDashboard from './Admin/AdminDashboard';
import ManageStudents from './Admin/ManageStudents';
import ManageFaculty from './Admin/ManageFaculty';
import Dashboard from './Admin/Dashboard';
import Courses from "./Admin/Courses"
import Hostel from "./Admin/Hostel"
import Transport from './Admin/Transport';
import FacultyDashboard from './Faculty/Fsidebar';
import Fdash from './Faculty/Fdash';
import TimeTable from './Faculty/TimeTable';
import Sidebar from './Admin/Sidebar';
import Fsidebar from './Faculty/Fsidebar';
import LandingPage from './Components/LandinPage';
import UserProfile from './Components/UserProfile';
import Ssidebar from './Student/Ssidebar';
import Sprofile from './Student/Sprofile';
import Academics from './Student/Academics';
import Academics1 from './Student/Academics1';
import Sdashboard from './Student/Sdashboard';
import Fprofile from './Faculty/Fprofile';
import StudentAttendanceTable from './Admin/StudentAttendanceTable';
import FacultyAttendanceRecord from './Admin/FacultyAttendanceRecord';
import Fattendance from './Faculty/Fattendance';
import Sattendance from './Student/Sattendance';
import Supdate from './Student/Supdate';
import Supdate1 from './Student/Supdate1';
import Fupdate from './Faculty/Fupdate';
import Fupdate1 from './Faculty/Fupdate1';
import Addroom from './Faculty/Addroom';
import Classrooms from './Faculty/Classrooms';
import ClassDetails from './Faculty/ClassDetails';
import Sclasses from './Student/Sclasses';
import Sclassroom from './Student/Sclassroom';
import SemesterResults from './Student/SemesterResults';
import Stimetable from './Student/Stimetable';
import Aprofile from './Admin/Aprofile';
import CreateStudent from './Admin/CreateStudent';
import Aclassroom from './Admin/Aclassroom';
import Alab from './Admin/Alab';
import Acreateroom from './Admin/Acreateroom';
import Acreatelab from './Admin/Acreatelab';
import Complaints from './Admin/Complaints';
import Flab from './Faculty/Flab';
import Fcreatelab from './Faculty/Fcreatelab';
import Createevent from './Admin/Createevent';
import Events from './Admin/Events';
import Scomplaint from './Student/Scomplaint';
import Screatecomplaint from './Student/Screatecomplaint';
import Sevents from './Student/Sevents';
import Library from './Student/Library';
import Createbook from './Student/Createbook';
import Sprofileedit from './Student/Sprofileedit';
import Slab from './Student/Slabs';
import Slabs from './Student/Slabs';
import Slabget from './Student/Slabget';
import AddCourse from './Admin/AddCourse';
import Addhostel from './Admin/Addhostel';
import Addtransport from './Admin/Addtransport';
import Fevents from './Faculty/Fevents';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* Student  */}
          <Route path="/" element={<LandingPage />} />
          <Route path='*' element={<h1 style={{paddingTop:"210px"}}><span>404</span> <br/> Page Not Found</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:userInfo" element={<UserProfile />} />


          {/*Admin  */}
          <Route path="/alogin" element={<ALogin />} />
          <Route path='/asignup' element={<ASignup />} />
          {/* <Route path='/admindash' element={<AdminDashboard/>}/> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mstudent' element={<ManageStudents />} />
          <Route path='/cstudent' element={<CreateStudent />} />
          <Route path='/mfaculty' element={<ManageFaculty />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/hostel' element={<Hostel />} />
          <Route path='/addhostel' element={<Addhostel />} />
          <Route path='/transport' element={<Transport />} />
          <Route path='/addtransport' element={<Addtransport />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/sattendance' element={<StudentAttendanceTable />} />
          <Route path='/fattendance' element={<FacultyAttendanceRecord />} />
          <Route path='/aprofile' element={<Aprofile />} />
          <Route path='/fevents' element={<Fevents />} />
          <Route path='/aclassroom' element={<Aclassroom />} />
          <Route path='/acreateroom' element={<Acreateroom />} />
          <Route path='/alab' element={<Alab/>} />
          <Route path='/acreatelab' element={<Acreatelab/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/createevent' element={<Createevent/>} />
          <Route path='/complaints' element={<Complaints/>} />



          {/* Faculty */}
          <Route path="/flogin" element={<Flogin />} />
          <Route path='/fsignup' element={<Fsignup />} />
          <Route path="/fsidebar" element={<Fsidebar />} />
          <Route path="/fdash" element={<Fdash />} />
          <Route path='/fprofile' element={<Fprofile />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path='/ffattendance' element={<Fattendance />} />
          <Route path='/fupdate/:id' element={<Fupdate />} />
          <Route path='/fupdate1/:id' element={<Fupdate1 />} />
          <Route path='/classroom' element={<Classrooms />} />
          <Route path='/addroom' element={<Addroom />} />
          <Route path='/classdetails/:id' element={<ClassDetails />}/>
          <Route path='/flab' element={<Flab/>} />
          <Route path='/fcreatelab' element={<Fcreatelab/>} />



          {/* student */}
          <Route path='/ssidebar' element={<Ssidebar />} />
          <Route path='/sprofile' element={<Sprofile />} />
          <Route path='/sprofileedit/:id' element={<Sprofileedit />} />
          <Route path='/sdashboard' element={<Sdashboard />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/academics1' element={<Academics1 />} />
          <Route path='/ssattendance' element={<Sattendance />} />
          <Route path='/supdate/:id' element={<Supdate />} />
          <Route path='/supdate1/:id' element={<Supdate1 />} />
          <Route path='/sclasses' element={<Sclasses />} />
          <Route path='/sclassroom/:id' element={<Sclassroom />} />
          <Route path='/slabs' element={<Slabs />} />
          <Route path='/slabget/:id' element={<Slabget />} />
          <Route path='/stimetable' element={<Stimetable />} />
          <Route path='/scomplaint' element={<Scomplaint />} />
          <Route path='/screatecomplaint' element={<Screatecomplaint />} />
          <Route path='/sevents' element={<Sevents />} />
          <Route path='/slibrary' element={<Library />} />
          <Route path='/screatebook' element={<Createbook/>} />
         





        </Routes>
        {/* <Routes>
  
        <Route path="/"  component={Login} />
        <Route path="/about" component={About} />
        <Route path="/about" element={<About/>} />

</Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
