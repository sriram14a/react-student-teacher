import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { TeachersAPI } from "./Source";
import { useNavigate, useParams } from "react-router";

export function EditTeach() {
  const { teacherid } = useParams();
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    fetch(`${TeachersAPI}/teachers/${teacherid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tchdata) => {
        setTeacher(tchdata);
      });
  }, []);
  return teacher ? <EditTeacher teacher={teacher} /> : "Loading.....";
}

export function EditTeacher({ teacher }) {
  const [name, setName] = useState(teacher.name);
  const [department, setDepartment] = useState(teacher.department);
  const [experience, setExperience] = useState(teacher.experience);
  const [gender, setGender] = useState(teacher.gender);
  const [profile, setProfile] = useState(teacher.profile);

  const navigate = useNavigate();

  const updateTeacher = {
    name: name,
    department: department,
    experience: experience,
    gender: gender,
    profile: profile,
  };

  const edit = (event) => {
    fetch(`${TeachersAPI}/teachers/${teacher.id}`, {
      method: "PUT",
      body: JSON.stringify(updateTeacher),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate(`/teachers/${teacher.id}`));
    event.preventDefault();
  };

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div className="form-container field-width padding">
        <form onSubmit={updateTeacher}>
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
            onClick={edit}
          >
            Update Teacher profile
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
        <img src={teacher.profile} />
      </div>
    </div>
  );
}
