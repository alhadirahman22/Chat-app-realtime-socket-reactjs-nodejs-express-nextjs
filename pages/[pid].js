import { useRouter } from 'next/router';
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
                    padding: "10px",

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
                {/* <button className=" p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 gizmo:dark:disabled:bg-white gizmo:disabled:bg-black gizmo:disabled:opacity-10 disabled:text-gray-400 enabled:bg-brand-purple gizmo:enabled:bg-black text-white gizmo:p-0.5 gizmo:border gizmo:border-black gizmo:rounded-lg gizmo:dark:border-white gizmo:dark:bg-white bottom-1.5 transition-colors disabled:opacity-40" data-testid="send-button"><span className="" data-state="closed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rounded-full bg-green-500 text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button> */}


                <div className="w-full flex" style={{
                    backgroundColor: "white",
                    bottom: 0,
                    left: "0px",
                    position: "sticky",
                    zIndex: "1",
                    padding: "10px",

                }} >
                    <input
                        type="text"
                        placeholder='RoomID'
                        style={{
                            backgroundColor: "#F6F6F6",

                        }}
                        className={`border rounded-full w-full mb-4 mt-10 p-4`}
                    />
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="rounded-full bg-green-500 text-white dark:text-black" style={{
                        position: "absolute",
                        top: "61.5px",
                        right: "25px"
                    }} ><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </div>
        </>
    )
}


export default Chatting;