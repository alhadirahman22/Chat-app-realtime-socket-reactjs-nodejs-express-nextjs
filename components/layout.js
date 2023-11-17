const Layout = ({ children }) => {
    return (
        <div className="mx-auto bg-white">
            <div className="bg-main relative">
                <main className="font-sans mt-2 mb-4">
                    <div className="mx-auto w-full max-w-md mb-4">
                        <div className="mx-2">
                            <div className="p-3 bg-white/90">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )

}


export default Layout;