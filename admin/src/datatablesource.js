import Avatar from "./avatar.png";

// USERS-----------------------------------------------------
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

// HOTELS-----------------------------------------------------
export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

// ROOMS-----------------------------------------------------
export const roomColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  }
];
