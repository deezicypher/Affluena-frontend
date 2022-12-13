import {useEffect, useState} from 'react';
import logo from '../assets/img/fly.png';
import { Navigate, useParams, useNavigate, Link} from "react-router-dom"
import axios from '../config/axios';
import { toast } from 'react-hot-toast';


const VerfiyEmail = () => {
    const [valid, setValid] = useState(false);
    const [redirect, setRedirect] = useState(null);
    let { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        toast.loading('Verifying...',{
            id:"email"
        });
        if (token) {
           
            const user = {
                key: token
            }
           
            axios.post('/account-confirm-email/', user)
                .then(response => {
                    if (response.status === 200) {
                        setValid(true)
                        toast.success('Email Verified',{
                            id:"email"
                          });
                        localStorage.setItem("Email", 1)
                        setTimeout(() => {
                            setRedirect(true)
                            toast.loading('Redirecting to Login...',{
                              id:"email"
                            });
                        }, 2000)
                        navigate('/login')
                    } else {
                        setValid(false)
                       toast.error('Verification Failed. Email may be already verified or the link is broken.',{
                        id:"email"
                      })
                    }
                }).catch(err => {
                    toast.error('Verification Failed. Email may be already verified or the link is broken.',{
                        id:"email"
                      })
                })

        }
    }, [token,navigate]);

    if (valid === true && redirect) {
        return <Navigate to="/login" />;
    }
  return (
    <div className="flex min-h-full items-center justify-center py-[5rem] px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
      <Link to="/">
      <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Affluena"
            />
            </Link>
 {valid === true && (
        <div className="text-center flex items-center justify-center">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-secondary w-2/5 ">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>
</div>
 )}
  {valid === false && (
        <div className="text-center flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-red-600 w-2/5 ">
  <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
  <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
</svg>

</div>
 )}
      </div>
   
    </div>
  </div>
  )
}

export default VerfiyEmail