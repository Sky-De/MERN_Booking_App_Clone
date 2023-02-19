import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewHotel = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({err:false,message:""});

  const handleChange = (e) => {
    setInfo({...info, [e.target.id]:e.target.value});
  }

  const createHotel = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/v1/hotels", info);
      setLoading(false);
      console.log(data);
      navigate("/hotels")
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
                files
                  ? URL.createObjectURL(files[0])
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
                  multiple
                  id="file"
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button onClick={createHotel}>Send</button>
            </form>
                {loading && <CircularProgress color="success"/>}
                {error.err && <Alert severity="error" >{error.message}</Alert>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
