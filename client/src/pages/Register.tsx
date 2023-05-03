import Image from 'next/image'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
import api from '../helpers/api';
import axios from 'axios';


export default function Signin() {
    const [input, setInput] = React.useState({
        email: '',
        fullName: '',
        password: '',
        confirmPassword: ''

    })

    //event change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    //submit handler
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            //register user  and change password and confirm password are the same
            if (input.password !== input.confirmPassword) {
                //show error message
                console.log('passwords do not match')
                return
            }
            else {
                //register user
                const res = await api.post('auth/signup', input);
                console.log(res)


            }


        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='  min-w-fit w sm:w-full h-screen  bg-brandv4 flex justify-center items-center'>
            <div className=' w-max h-max bg-white   border border-branv2 border-opacity-10 rounded-md'>
                <div className=' w-full h-max p-5   border-b border-gray-300 border-solid border-1   border-opacity-30 flex justify-center'>

                    <Link href="/">   <Image
                        src="/logo.svg"
                        alt="postcases-logo"
                        width={140}
                        height={100}
                        style={{
                            border: "none",

                        }}
                    /></Link>
                </div>
                <div className=' w-full h-max   p-10 sm:p-15   md:px-24  md:py-16 flex flex-col '>
                    <button className=' px-3 py-2 rounded-md bg-brandv3  text-sm text-brand-base/50   font-light'><GoogleIcon sx={{
                        marginRight: "5px",
                        fontSize: "20px"
                    }} /> sign Up with Google</button>

                    <p className=' self-center mt-3 text-sm  text-brand-base/50'>Or</p>
                    <p className=' text-base font-openSans text-brand-base/50'>Full name</p>
                    <input type="email" className=' w-full rounded-md  px-4 py-2 mt-1 border-brand-base border border-opacity-20 px' placeholder='e.g Jon doe'
                        onChange={handleChange}
                        name='fullName'


                    />
                    <p className=' text-base font-openSans text-brand-base/50 mt-3'>Email</p>

                    <input type="email" className=' w-full rounded-md    px-4 py-2 mt-1 border-brand-base border border-opacity-20 px' placeholder='e.g example@email.com'
                        onChange={handleChange}
                        name='email'
                    />
                    <div className='  w-full flex justify-between  items-center'>                    <p className=' text-base font-openSans text-brand-base/50  mt-3'>Password</p></div>


                    <input type="password" className=' w-full rounded-md  px-4 py-2 mt-1 border-brand-base border border-opacity-20 px'
                        onChange={handleChange}
                        name='password'
                    />
                    <div className='  w-full flex justify-between  items-center'>                    <p className=' text-base font-openSans text-brand-base/50  mt-3'>Confirm Password</p></div>


                    <input type="password" className=' w-full rounded-md  px-4 py-2 mt-1 border-brand-base border border-opacity-20 px'
                        onChange={handleChange}
                        name='confirmPassword'
                    />
                    <p className=' text-xs font-openSans   text-brand-primary  mt-3'>Forget password ?</p>
                    <button className=' w-full  bg-brand-primary py-2   rounded-lg mt-3 text-base font-roboto   text-brand-secondary '
                        onClick={handleSubmit}
                        type='submit'
                    >Sign Up</button>
                    <div className=' gap-3  w-full flex justify-between  items-center'>                    <p className=' text-sm font-openSans text-brand-base/50  mt-3'>Have an account already?</p>
                        <Link href="/Signin">  <p className=' text-sm underline font-openSans   text-brand-primary  mt-3'>Sign In</p></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
