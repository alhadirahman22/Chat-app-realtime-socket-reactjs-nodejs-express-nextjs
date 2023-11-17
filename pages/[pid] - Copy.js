import { useRouter } from 'next/router';
const Chatting = () => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <>
            {/* <div className='mx-auto w-full border shadow px-3 relative overflow-y-auto' style={{ maxHeight: "600px" }}> */}
            <div className='mx-auto w-full border shadow px-3 relative' style={{ height: "100%" }}>
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
                <input
                    type="text"
                    placeholder='RoomID'
                    style={{
                        backgroundColor: "#F6F6F6",
                        // bottom: 0,
                        left: "0px",
                        position: "sticky",
                        zIndex: "1",
                        // padding: "10px",
                    }}
                    className={`border rounded-full w-full mb-4 mt-10 p-4 bottom-0`}
                />
            </div>
        </>
    )
}


export default Chatting;