import { useRouter } from 'next/router';
const Chatting = () => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <>
            <div className='border shadow p-2 min-h-screen'>
                <div className="w-full flex ">
                    <div className="w-1/3">
                        <button type="button" className="text-green-500 align-middle py-2">Exit</button>
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-2xl font-bold">
                            {pid}
                        </h1>
                    </div>

                </div>
                <div className='w-3/4 float-right'>
                    <div className=" text-white mb-4 mt-8 sender-self ">
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                        <p>Your message here aaaaaasads  asdsadsa  asdsad  asdasd</p>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Chatting;