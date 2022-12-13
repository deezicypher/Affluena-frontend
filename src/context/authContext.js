import {createContext, useContext, useState, useEffect} from "react";
import { toast } from "react-hot-toast";
import axios from  "../config/axios"

const Context = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [regInfo, setRegInfo] = useState();


   
    const logout = () => {
        localStorage.removeItem("user");
      };
      
    const checkAuthTimeout = expirationTime => {
          setTimeout(() => {
            logout()
          }, expirationTime * 1000);
      }

    const signup =  async data => {
        toast.loading('signing up...', {
            id: 'signup'
        });
        const {username, email, name,code,password, confirmpassword} = data;
        const doc = {
                username: username,
                email: email,
                password1: password,
                password2: confirmpassword,
                full_name: name,
                code: code,
            }
        try{
        const detail = await axios.post("/rest-auth/registration/",doc,{ headers: {
            'content-type': 'multipart/form-data'
          }}).then(res => res.data)
    
         

              const user = {
                detail,
                sent: detail,
                username,
                email,
              }
              localStorage.setItem("account", JSON.stringify(user));
              toast.success(`${detail.detail}`, {
                id:'signup'
            })
              setRegInfo(user);
    
        }catch(error) {
            toast.error(`${error.response.data.error}`, {
                id:'signup'
            })
            console.log(error)
          }
      }

    const login = async data => {
        try{
            toast.loading('Loging in...', {
                id: 'login'
            })
            const user = await axios.post('rest-auth/login', data).then(res => res.data)
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
        }catch(err){
            if(err.response.data.msg){
                toast.error(`${err.response.data.msg}`,{
                    id:'login'
                })
     
            }else if (err.response.data.non_field_errors){
               toast.error(`${err.response.data.non_field_errors[0]}`)
            }
            else{
                toast.error('Unable to log you in at the moment')
            }
        }
    }

    const authCheckState = () => {
              const user = JSON.parse(localStorage.getItem("user"));
              if (user === undefined || user === null) {
               logout()
              } else {
                const expirationDate = new Date(user.expirationDate);
                if (expirationDate <= new Date()) {
                  logout()
                } else {
                    checkAuthTimeout(
                      (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                }
              }
    
    };

    useEffect(()=> {
        authCheckState();
    },[])   
    
    

    return (
        <Context.Provider 
        value={{
            user,
            regInfo,
            signup,
            login,
            logout,
        }}>{children}</Context.Provider>
    )
    }
    
export const useAuthContext = () => useContext(Context)