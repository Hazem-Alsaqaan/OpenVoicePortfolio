import Web from "../../assets/pictures/webServices.png"
import Mob from "../../assets/pictures/mobileServices.png"
import Seo from "../../assets/pictures/seoServices.png"
import Digital from "../../assets/pictures/digital.png"

import ServiceCard from "../ServiceCard"
import SectionTitle from "../SectionTitle"


const Services = () => {
    const servicesData = [
        {
            "id": "1",
            "title": "Web Development",
            "description": "simply put, web app refer to set of tools and technologies required to fuel and power internet applications",
            "icon": Web
        },
        {
            "id": "2",
            "title": "Mobile Development",
            "description": "for unparalledled efficiency, mobility, flexibility, security, and scalability, cloud technology is the answer. at digital processing systems",
            "icon": Mob
        },
        {
            "id": "3",
            "title": "SEO Services",
            "description": "it is impossible to proceed with a cloud application development project unless you decide on its app architecture and services type.",
            "icon": Seo
        },
        {
            "id": "4",
            "title": "Digital Product",
            "description": "with our technical expertise in designing a flexible saaS application, we offer you top-Notch cloud-Based app development services",
            "icon": Digital
        },
    ]
    return (
        <div id="services" className="flex flex-col items-center justify-center py-10 container mx-auto px-4">
            <SectionTitle title={"Services"} />
            <div className="grid grid-cols-2 gap-10 max-md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-md:gap-8">
                {
                    servicesData.map((item) => (
                        <ServiceCard key={item?.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services