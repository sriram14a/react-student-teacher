import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Sidebar} from "./Sidebar"
import { Students } from "./Students";
import { Teacherlist } from "./Teacherlist";
import { Home } from "./Home";
import { Teachers } from "./Teachers";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { EditTeach } from "./Editteacher";
import { EditStud } from "./Editstudent";



function App() {
  return (
    <div className="App">
      hi
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/teacherlist" element={<Teacherlist />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers/:teacherid" element={<TeacherDetails />} />
        <Route path="/students/:studentid" element={<StudentDetails />} />
        <Route path="/teachers/edit/:teacherid" element={<EditTeach />} />
        <Route path="/students/edit/:studentid" element={<EditStud />} />



        CreateTeacher
      </Routes>

    </div>
  );
}

export default App;
