import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function StudentList({ student ,id }) {
  const navigate = useNavigate();
  console.log(student);
  return (
    <div className="App">
      <div >
      <div className="card card-width bg-secondary mt-2">
        <img
          className="profile-image p-1"
          src={student.profile}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-light">{student.name}</h5>

          <Button sx={{backgroundColor:"rgb(0 121 107)",":hover":{backgroundColor:"white",color:"black",transition:"0.4s ease-in-out",border:"transparant"}}} onClick={()=> navigate("/students/"+id)} variant="contained">Details</Button>
        </div>
      </div>
      </div>
    </div>
  );
}