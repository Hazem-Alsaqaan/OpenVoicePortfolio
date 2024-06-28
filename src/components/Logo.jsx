import logoPicture from "../assets/pictures/logo.png"


const Logo = ()=>{
    return(
        <a href="#">
        <div className={`flex items-center justify-center gap-0.5`}>
            <img src={logoPicture} alt="LOGO" className={`w-10 h-10`}/>
            <h6 className={`text-white max-sm:text-sm`}>Tech</h6>
        </div>
        </a>
    )
}
export default Logo;