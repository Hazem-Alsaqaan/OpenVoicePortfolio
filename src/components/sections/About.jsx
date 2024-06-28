import GrowthPicture from "../../assets/pictures/growth.png"
import SectionTitle from "../SectionTitle"

const About = () => {
    return (
        <div id="about" className={`w-full bg-neutral-50 my-20 overflow-hidden`}>
        <div className={`py-10 container mx-auto px-4`}>
            <SectionTitle title={"About"} />
            <div className="flex items-center justify-center flex-wrap">
                <div className="flex-1 min-w-96 max-sm:min-w-56">
                    <h6 className="mb-10 text-black text-xl max-sm:text-base">Our solution offers the essential building blocks to build, deploy, manage and extend enter prise-grade chatbots.</h6>
                    <p className="text-neutral-500 leading-8 max-sm:text-sm">The platform includes a highly extensible development environment for technical and non-technical staff, natural language processing capablities, content management and a scalable multi-channel messaging infrastructure our projects has been successfully deployed in multiple companies and is trusted  by over 10.000 developers worldwide.</p>
                </div>
                <div className="flex-1  p-10 ">
                    <img src={GrowthPicture} alt="growth" className="w-full h-full"/>
                    <h1 className="bg-blue-800 text-white rounded-full text-center p-5 mt-5 text-3xl">Growth</h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About 