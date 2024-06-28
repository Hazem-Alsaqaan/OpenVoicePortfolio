const Landing = () => {
    return (
        <div id="#" className={`relative bg-[url('https://img.freepik.com/free-vector/top-view-laptop-technology-background_23-2148127683.jpg?t=st=1719607548~exp=1719611148~hmac=a33747b815b763405329d612e4e30161fac1996b0e7934c1f08575d081bd9be0&w=826')] bg-cover bg-no-repeat min-h-screen w-full after:absolute after:w-full after:h-full after:bg-blue-400 after:bg-opacity-50 after:top-0 after:left-0 flex items-center`}>
            <div className={`relative container mx-auto px-4 pt-14 h-full flex-col items-center justify-center z-10`}>
                <h1 className={`text-white font-RubikBold text-6xl text-nowrap mb-10 max-sm:text-4xl max-xsm:text-3xl max-2xs:text-wrap`}>We Create Ideas <br />Into <span className="text-yellow-500">Real Products</span></h1>
                <p className={`text-base font-RubikMedium text-neutral-200 text-nowrap max-xsm:text-sm max-2xs:text-wrap`}>
                    we make your ideas come to life with the<br />latest technology and assured quality
                </p>
                <button className={`bg-yellow-500 px-4 py-2 rounded-md text-xl text-black shadow-2xl mt-4 max-xsm:text-base`}>Ask About Price</button>
            </div>
        </div>
    )
}
export default Landing;