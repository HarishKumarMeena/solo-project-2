import Earth from "../images/earth.png";


export default function Headers() {
    return (
        <div className="flex text-xl justify-center bg-fragile-red mb-6">
            <img src={Earth} alt="Globe Logo" className="mt-auto mb-auto p-2 h-12 w-12"/ >
            <span className="mt-auto mb-auto pl-4 text-white">My travel journal</span>
        </div>
    )
}