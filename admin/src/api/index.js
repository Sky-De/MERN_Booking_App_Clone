import axios  from 'axios';

const API = axios.create({ baseURL: 'http://localhost:1818'});

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req
// })



//admin/files
// export const fetchFiles = () => API.get('/admin/files');
// export const createFile = (newFile) => API.post('/admin/files', newFile);
// export const deleteFile = (id) => API.delete(`/admin/files/${id}`);
// export const likeFile = (id) => API.patch(`/admin/files/${id}/likeFile`);


//admin/users
export const signIn  = (userData) => API.post('/api/v1/auth/login' , userData);
export const signUp  = (userData) => API.post('/api/v1/auth/register' , userData);
