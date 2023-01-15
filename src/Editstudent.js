import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { StudentsAPI } from "./Source";
import { useNavigate, useParams } from "react-router";

export function EditStud() {
  const { studentid } = useParams();
  const [student, setStudent] = useState(null);
  useEffect(() => {
    fetch(`${StudentsAPI}/students/${studentid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((stdata) => {
        setStudent(stdata);
      });
  }, []);
  return student ? <EditStudent student={student} /> : "Loading.....";
}

export function EditStudent({ student }) {
  const [name, setName] = useState(student.name);
  const [standard, setStandard] = useState(student.standard);
  const [grade, setGrade] = useState(student.grade);
  const [gender, setGender] = useState(student.gender);
  const [profile, setProfile] = useState(student.profile);

  const navigate = useNavigate();

  const updateStudent = {
    name: name,
    standard: standard,
    grade: grade,
    gender: gender,
    profile: profile,
  };

  const edit = (event) => {
    fetch(`${StudentsAPI}/students/${student.id}`, {
      method: "PUT",
      body: JSON.stringify(updateStudent),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate(`/students/${student.id}`));
    event.preventDefault();
  };

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div className="form-container field-width padding">
        <form onSubmit={updateStudent}>
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
            onChange={(event) => setStandard(event.target.value)}
            type="text"
            placeholder="Enter Department"
            value={standard}
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
            onChange={(event) => setGrade(event.target.value)}
            type="text"
            placeholder="Enter Experience"
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
            onClick={edit}
          >
            Update Student profile
          </Button>
          <Button
            style={{
              margin: "10px",
              width: "100%",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "rgb(0 121 107)",
            }}
            onClick={() => navigate(-1)}
            variant="contained"
          >
            BACK
          </Button>
        </form>
      </div>
      <div className="d-sm-flex edit-prof-image d-none">
        <img src={student.profile} />
      </div>
    </div>
  );
}
