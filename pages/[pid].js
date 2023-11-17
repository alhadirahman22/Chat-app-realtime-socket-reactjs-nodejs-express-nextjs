import { useRouter } from 'next/router';
import { useState } from 'react';
const Chatting = () => {
    const router = useRouter();
    const { pid } = router.query;

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
                <div className='w-3/4 float-right mb-4'>
                    <div className=" text-white mb-2 mt-8 sender-self px-3 py-8">
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                    </div>
                </div>
                <div className='w-3/4 float-left mb-4'>
                    <div className=" text-black mb-2 mt-8 sender-user px-3 py-8">
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                    </div>
                </div>
                <div className='w-3/4 float-right mb-4'>
                    <div className=" text-white mb-2 mt-8 sender-self px-3 py-8">
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                    </div>
                </div>
                <div className='w-3/4 float-right mb-4'>
                    <div className=" text-white mb-2 mt-8 sender-self px-3 py-8">
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                    </div>
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
                        />

                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="rounded-full bg-green-500 text-white dark:text-black" style={{
                            position: "absolute",
                            top: "50.5px",
                            right: "15px"
                        }} ><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Chatting;