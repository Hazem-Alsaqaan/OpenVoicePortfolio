/* eslint-disable react/prop-types */


const SectionTitle = ({ title }) => {
    return (
        <>
            <h1 className={`text-center text-4xl font-[700] my-10 mx-auto max-sm:text-2xl`}>{title ? title : ""}</h1>
        </>
    )
}
export default SectionTitle