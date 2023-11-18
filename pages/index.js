import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from "react-hook-form";
import Helper from "../helpers/index"
import Swal from "sweetalert2";
import io from 'socket.io-client';
const Login = () => {
    const [socket, setSocket] = useState(null);
    const { isReady } = useRouter()
    const [processing, setProcessing] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setProcessing(true);
        try {
            const post = { token: Helper.encJwt(data) };
            const res = await Helper.instance().post('/api/chat/join', post);
            if (res.data.status) {
                socket.connect();
                Helper.setLocalStorage("userData", res.data.data, true);
                router.push("/" + data.roomid);
            }
        } catch (error) {
            try {
                Swal.fire({
                    title: "Info", // Translated title
                    html: error.response.data.messages,
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Ok", // Translated confirm button text
                });
            } catch (error2) {
                console.log(error2);
            }

        }
        setProcessing(false);
    };

    useEffect(() => {
        if (!isReady) return
        setSocket(io(`${window.location.protocol}//${window.location.host}`));

    }, [isReady]);

    useEffect(() => {
        if (socket != null) {
            socket.disconnect();
        }
    }, [socket]);

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                maxLength={20}
                                placeholder='Username'
                                className={`input-text mt-4`}
                                {...register("username", {
                                    required: "Username required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimum 3 character",
                                    }
                                })}
                            />
                            {errors.username?.message && (
                                <span className="text-base text-red-700">{errors.username?.message}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                maxLength={20}
                                placeholder='RoomID'
                                className={`input-text`}
                                {...register("roomid", {
                                    required: "Roomid required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimum 3 character",
                                    }
                                })}
                            />
                            {errors.roomid?.message && (
                                <span className="text-base text-red-700">{errors.roomid?.message}</span>
                            )}
                        </div>
                        {/* <div className='w-full max-w-md absolute top-1/4 mb-10 mt-10'> */}
                        <div className='w-full max-w-md  mb-10 mt-24'>
                            <button
                                type="submit"
                                style={{ backgroundColor: "#5DB075" }}
                                className={`w-full py-3 mt-4 text-base text-white rounded-full border mb-5  uppercase ${true === processing
                                    ? "bg-slate-600 border-slate-700 cursor-progress"
                                    : "bg-black border-black hover:bg-slate-800"
                                    }`}
                                disabled={true === processing}
                            >
                                {processing ? "Loading..." : "Join"}
                            </button>
                        </div>

                    </div>
                </div >
            </form>
        </>
    )
}

export default Login;