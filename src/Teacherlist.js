import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Teacherlist({ tchs,id }) {
    const navigate = useNavigate();
  console.log(tchs);
  return (
    <div className="App">

      <div >
      <div className="card card-width bg-secondary mt-2">
        <img
          className="card-img-top p-1"
          src={tchs.profile}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-light">{tchs.name}</h5>

          <Button onClick={()=>navigate("/teachers/"+id)} variant="contained" sx={{backgroundColor:"rgb(0 121 107)",":hover":{backgroundColor:"white",color:"black"}}}>Details</Button>
        </div>
      </div>
      </div>

    </div>
  );
}
