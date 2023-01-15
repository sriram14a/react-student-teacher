import { useEffect, useState } from "react";
import { TeachersAPI } from "./Source";
import { Teacherlist } from "./Teacherlist";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export function Teachers() {
  const [teacher, setTeacher] = useState([]);
  const [show,setShow] = useState(false)

//techer profile creating
  
const Createtch = {
    display: show ? "block" : "none",
  };
  

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");


  const newTeacher = {
    name: name,
    department: department,
    experience: experience,
    gender: gender,
    profile: profile
  };
  const Createteacher = (event) => {
    fetch(`${TeachersAPI}/teachers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeacher),
    })
      .then((data) => data.json())
      .then(() => {navigate(`/`)});
    event.preventDefault();
  };

//fetching
  const getDetails = () => {
    fetch(`${TeachersAPI}/teachers`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setTeacher(tch));
  };

  useEffect(() => getDetails(), []);

  
  return (
    <div className="App ">
      <h1 className="text-center">Our Teachers</h1>
      <div className="App padding d-flex flex-wrap justify-content-around">
        {teacher.map((tc) => (
          <Teacherlist key={tc.id} id={tc.id} tchs={tc} />
        ))}
      </div>
      <Button
        onClick={() => setShow(!show)}
        variant="contained"
        sx={{
          backgroundColor: "rgb(0 121 107)",
          ":hover": { backgroundColor: "white", color: "black" },
          marginLeft: "95px",
          marginTop:"20px",
          marginBottom:"10px"
        }}
      >
        Create Teacher Profile
      </Button>

      <div style={Createtch } className="padding field-width">
      <div className="form-container">
        <form onSubmit={Createteacher}>
        <TextField
            style={{
              backgroundColor: "white",
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
            id="Profile"
            name="Profile"
            label="Profile"
            onChange={(event) => setProfile(event.target.value)}
            type="text"
            placeholder="Enter Profile url"
            value={profile}
          />
          <TextField
            style={{
              backgroundColor: "white",
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
            id="name"
            name="name"
            label="Name"
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter Name"
            value={name}
          />
          <TextField
            style={{
              backgroundColor: "white",
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
            id="Department"
            name="Department"
            label="Department"
            onChange={(event) => setDepartment(event.target.value)}
            type="text"
            placeholder="Enter Department"
            value={department}
          />
          <TextField
            style={{
              backgroundColor: "white",
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
            id="Experience"
            name="Experience"
            label="Experience"
            onChange={(event) => setExperience(event.target.value)}
            type="text"
            placeholder="Enter Experience"
            value={experience}
          />
          <TextField
            style={{
              backgroundColor: "white",
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
            id="Gender"
            name="Gender"
            label="Gender"
            onChange={(event) => setGender(event.target.value)}
            type="text"
            placeholder="Enter Gender"
            value={gender}
          />

          <Button
            style={{
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "rgb(0 121 107)",
            }}
            type="submit"
            variant="contained"
          >
            Create Teacher profile
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
}


