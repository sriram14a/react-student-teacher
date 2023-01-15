import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TeachersAPI } from "./Source";
import { Students } from "./Students";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

export function TeacherDetails() {
  const { teacherid } = useParams();
  const [teacher, setTeacher] = useState([]);

  const getDetails = () => {
    fetch(`${TeachersAPI}/teachers/${teacherid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setTeacher(tch));
  };

  useEffect(() => getDetails(), []);

  const navigate = useNavigate();

  return (
    <div className="App ">
      <div className="App padding d-flex flex-wrap pt-3 align-items-center justify-content-around">
        <div>
          <img className="profile-image" src={teacher.profile} alt="" />
        </div>
        <div>
        <h1>Name: {teacher.name}</h1>
          <h2>Department: {teacher.department}</h2>
          <h5>Gender: {teacher.gender}</h5>
          <h5>Experience: {teacher.experience}</h5>
        </div>
      </div>
      <div className="edit-delete">
        <Button
          onClick={() => navigate("/teachers")}
          variant="contained"
          style={{ backgroundColor: "rgb(0 121 107)", marginLeft: "20px"}}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(0 121 107)",
            marginLeft: "20px",
          }}
          onClick={(event) => {
            fetch(`${TeachersAPI}/teachers/${teacher.id}`, {
              method: "DELETE",
            }).then(() => navigate(-1));
            event.preventDefault();
          }}
        >
          DELETE
        </Button>

        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(0 121 107)",
            marginLeft: "20px"
          }}
          onClick={() => navigate(`/teachers/edit/${teacher.id}`)}
        >
          EDIT
        </Button>
      </div>
      <div className="p-3">
            <Students />
        </div>
    </div>
  );
}
