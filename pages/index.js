import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className='mt-8'>
                <div className='mx-auto w-full min-h-screen relative'>
                    <div className="text-center mb-5">
                        <h1 className="text-2xl font-bold">
                            Join Chatroom
                        </h1>
                    </div>
                    <div className="mb-4 mt-10">
                        <input
                            type="text"
                            maxLength={100}
                            placeholder='Username'
                            className={`input-text mt-4`}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            maxLength={100}
                            placeholder='RoomID'
                            className={`input-text`}
                        />
                    </div>

                    {/* <div className='w-full max-w-md absolute top-1/4 mb-10 mt-10'> */}
                    <div className='w-full max-w-md  mb-10 mt-24'>
                        <button
                            type="submit"
                            style={{ backgroundColor: "#5DB075" }}
                            className={`w-full py-3 mt-4 text-base text-white rounded-full border mb-5  uppercase hover:bg-slate-800`}
                        >
                            Join
                        </button>
                    </div>

                </div>
            </div >

        </>
    )
}

export default Login;