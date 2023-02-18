import Avatar from "./avatar.png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "userName",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={Avatar} alt="avatar" />
          {/* <img className="cellImg" src={params.row.img === "notSet" ?  Avatar : params.row.img} alt="avatar" /> */}
          {params.row.userName}
        </div>
      );
    },
  },
  {
    field: "userMail",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  
];


