import * as api from '../api';

export const registerUser = async (userdata) => {
       try {
           const { data } = await api.signUp(userdata);
           localStorage.setItem("user",data);
           console.log(data);
       } catch (error) {
           console.log(error);
       }
}

export const loginUser = async (userdata) => {
       try {
           const { data } = await api.signIn(userdata);
           console.log(data);
           return data;
        //    localStorage.setItem("user",data);
       } catch (error) {
           console.log(error);
       }
}