import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Helper from "../helpers/index"
import io from 'socket.io-client';
const socket = io(process.env.APP_SOCKET_URL);
const Chatting = () => {

    const router = useRouter();
    const { pid } = router.query;
    const { isReady } = useRouter()
    const [dataChat, setDataChat] = useState([]);
    const [message, setMessage] = useState('');
    const [reload, setReload] = useState(0);
    // const [usernameSess, setUsernameSess] = useState((Helper.getLocalStorage('userData', null, true)).username);
    const [usernameSess, setUsernameSess] = useState(null);


    const fetchData = useCallback(async () => {
        try {
            const response = await Helper.instance().get('api/chat/fetch/' + pid + '/?limit=100&offset=0');
            if (response.data.status) {
                const dt = response.data.data;
                const sortedAsc = dt.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                setDataChat(sortedAsc);
            }
            return response;
        } catch (error) {

        }

    }, [pid]);

    useEffect(() => {
        if (!isReady) return
        setUsernameSess((Helper.getLocalStorage('userData', null, true)).username)
    }, [isReady, setUsernameSess]);

    useEffect(() => {
        if (!isReady) return
        if (usernameSess != null) {
            fetchData();

            socket.on('chat message', (msg) => {
                console.log("chat 22222 message", msg);
                setReload(reload + 1);
            });

            // Clean up the socket connection when the component unmounts
            // return () => {
            //     socket.disconnect();
            // };
        }

    }, [isReady, fetchData, reload, usernameSess]);

    const onChangeData = async (e) => {
        if (e.target.value != '') {
            setMessage(e.target.value);

        }
    }

    const handleInputKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (message.trim() !== '') {
                const dataPost = {
                    message: message,
                    room: pid,
                    username: usernameSess
                }
                const post = { token: Helper.encJwt(dataPost) };
                try {
                    const res = await Helper.instance().post('/api/chat/create', post);
                    console.log("sadasdasdsadsadsad");
                    console.log("message", message);
                    if (res.data.status) {
                        setMessage('');
                        socket.emit('chat message', message);
                        setReload(reload + 1);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };


    return (
        <>
            <div className='mx-auto w-full   px-3 relative' style={{ height: "100%" }}>
                <div className="w-full flex" style={{
                    backgroundColor: "white",
                    top: 0,
                    left: "0px",
                    position: "sticky",
                    zIndex: "1",
                }}>
                    <div className="w-1/3">
                        <button type="button" className="text-green-500 align-middle py-2">Exit</button>
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-2xl font-bold">
                            {pid}
                        </h1>
                    </div>

                </div>
                <div style={{ minHeight: "450px" }}>
                    {dataChat && dataChat.length > 0 &&
                        dataChat.map((item, key) => (
                            <>
                                {

                                    item.username == usernameSess ?
                                        <>
                                            <div key={key} className='w-3/4 float-right mb-4'>
                                                <div className=" text-white mb-2 mt-8 sender-self px-3 py-8">
                                                    {item.message}
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div key={key} className='w-3/4 float-left mb-4 relative'>
                                                <p className='top-2 absolute font-bold'>{item.username}</p>
                                                <div className=" text-black mb-2 mt-8 sender-user px-3 py-8">
                                                    {item.message}
                                                </div>
                                            </div>
                                        </>
                                }
                            </>


                        ))}
                </div>

                <div className="w-full flex flex-col" style={{
                    backgroundColor: "white",
                    bottom: 0,
                    left: "0px",
                    position: "sticky",
                    zIndex: "1",
                    maxHeight: "300px"
                }} >
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Message here...'
                            style={{
                                backgroundColor: "#F6F6F6",

                            }}
                            className={`border rounded-full w-full mb-4 mt-10 py-4 pl-4 pr-16`}
                            onChange={(event) => onChangeData(event)}
                            defaultValue={""}
                            value={message}
                            onKeyPress={handleInputKeyPress}
                        />

                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="rounded-full bg-green-500 text-white dark:text-black" style={{
                            position: "absolute",
                            top: "50.5px",
                            right: "15px"
                        }} ><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                </div>
            </div >
        </>
    )
}


export default Chatting;