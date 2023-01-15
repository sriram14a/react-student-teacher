import { useEffect, useState } from "react";
import { StudentsAPI } from "./Source";
import { StudentList } from "./StudentList";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export function Students() {
  const [show, setShow] = useState(false);

  //techer profile creating

  const Createstd = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");

  const newStudent = {
    name: name,
    standard: standard,
    grade: grade,
    gender: gender,
    profile: profile,
  };
  const Createstudent = (event) => {
    fetch(`${StudentsAPI}/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((data) => data.json())
      .then(() => {
        navigate(`/`);
      });
    event.preventDefault();
  };

  //fetching data
  const [students, setstudents] = useState([]);

  const getDetails = () => {
    fetch(`${StudentsAPI}/students`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((st) => setstudents(st));
  };

  useEffect(() => getDetails(), []);

  return (
    <div className="App ">
      <h1 className="text-center">Our Students</h1>
     <div className="padding flex-wrap d-flex justify-content-around">
     {students.map((sts) => (
        <StudentList key={sts.id} id={sts.id} student={sts} />
      ))}
     </div>

      <Button
        onClick={() => setShow(!show)}
        variant="contained"
        sx={{
          backgroundColor: "rgb(0 121 107)",
          ":hover": { backgroundColor: "white", color: "black" },
          marginLeft: "95px",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        Create Student Profile
      </Button>

      <div style={Createstd} className="padding field-width">
        <div className="form-container">
          <form onSubmit={Createstudent}>
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
              id="Standard"
              name="Standard"
              label="Standard"
              onChange={(event) => setStandard(event.target.value)}
              type="text"
              placeholder="Enter Standard"
              value={standard}
            />
            <TextField
              style={{
                backgroundColor: "white",
                margin: "10px",
                width: "100%",
                borderRadius: "10px",
              }}
              id="Grade"
              name="Grade"
              label="Grade"
              onChange={(event) => setGrade(event.target.value)}
              type="text"
              placeholder="Enter Grade"
              value={grade}
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
              Create Student profile
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
