

const PricingCategories = () => {
    const categoriesData = [
        {
            id: 1,
            title: "Basic",
            price: "$ 9.99",
            description: "Basic plan for small business",
            features: ["1 project", "1 individual user", "400 Gb/s storage"]
        },
        {
            id: 2,
            title: "Plus",
            price: "$ 59.99",
            description: "best for professionals",
            features: ["5 project", "up to 10 individual users", "20 Tb/s storage"]
        },
        {
            id: 3,
            title: "business",
            price: "custom",
            description: "best to grow your business",
            features: ["20 project", "50 + users", "300 Tb/s storage"]
        },
    ]
    return (
        <div className="flex items-center justify-center gap-5 flex-wrap mt-24">
            {categoriesData.map((item) => (
                <div key={item.id} className={`bg-slate-50 p-10 rounded-2xl m-4 border-2 border-solid border-slate-200 duration-200 hover:bg-white hover:scale-90`}>
                    <div>
                        <h3 className="text-2xl text-black my-4 capitalize">{item?.title}</h3>
                        <p className="text-sm text-slate-500 my-4 lowercase">{item?.description}</p>
                        <h1 className="text-4xl text-black my-4 bg-slate-100">{item?.price}</h1>
                        <div className="flex items-center justify-center">
                            <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 duration-100 rounded-lg text-center my-8 capitalize">Choose Plan</button>
                        </div>
                        <div>
                            <h6 className="font-RubikBold">Features</h6>
                            <ul>
                                {
                                    item?.features.map((feature, index)=>(
                                        <li className="font-RubikRegular text-slate-700 text-sm capitalize" key={index}>{feature}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default PricingCategories