import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUser = ({ inputs, title }) => {
  const navigate = useNavigate();
  // needs add cloudinary/fileStore goole later to upload img
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({err:false,message:""});
  const [info, setInfo] = useState({});
  useEffect(()=> {
    setError({err:false,message:""});
  },[]);

  const handleChange = (e) => {
    setInfo({...info, [e.target.id]:e.target.value});
  }
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/v1/auth/register", info);
      setLoading(false);
      console.log(data);
      navigate("/users");
    } catch (err) {
      setLoading(false);
      setError({err:true,message:err.response.data.message});
    }
   
  }


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}/>
                </div>
              ))}
              <button onClick={createUser}>Send</button>
            </form>
                {loading && <CircularProgress color="success"/>}
                {error.err && <Alert severity="error" >{error.message}</Alert>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
