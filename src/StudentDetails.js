import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentsAPI } from "./Source";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function StudentDetails() {
  const { studentid } = useParams();
  const [student, setStudent] = useState([]);

  const getDetails = () => {
    fetch(`${StudentsAPI}/students/${studentid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((st) => setStudent(st));
  };

  useEffect(() => getDetails(), []);

  const navigate = useNavigate();

  return (
    <div className="App ">
      <div className="App padding d-flex flex-wrap pt-3 align-items-center justify-content-around">
        <div>
          <img className="profile-image" src={student.profile} alt="" />
        </div>
        <div>
          <h1>Name: {student.name}</h1>
          <h2>Role:{student.role}</h2>
          <h5>Gender: {student.gender}</h5>
          <h5>Standard: {student.standard}</h5>
          <h5>Grade: {student.grade}</h5>
        </div>
      </div>
      <div className="edit-delete">
        <Button
          onClick={() => navigate("/students")}
          variant="contained"
          style={{ backgroundColor: "rgb(0 121 107)",marginLeft:"20px" }}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(0 121 107)",
            marginLeft:"20px"
          }}
          onClick={(event) => {
            fetch(`${StudentsAPI}/students/${student.id}`, {
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
            backgroundColor: "rgb(0 121 107)",marginLeft:"20px"
          }}
          onClick={() => navigate(`/students/edit/${student.id}`)}
        >
          EDIT
        </Button>
      </div>
    </div>
  );
}
