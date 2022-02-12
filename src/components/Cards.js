export default function Card(props) {
    return(
        <div>
            <div className="sm:hidden p-6 pb-0">
                <img src={props.img} alt={props.imageAlt} className="rounded-lg"/>
            </div>
            <div className="p-4 flex justify-center">
                <div className="hidden sm:block">
                    <img src={props.imageUrl} alt={props.imageAlt}/>
                </div>
                <div className="pl-6">
                    <div className="pt-2">
                        <img src="./images/location.png" alt="location-logo" className="h-5 w-6 inline"></img>
                        <span className="text-gray-800 text-sm">{props.location}</span>
                        <a href={props.googleMapsUrl} className="pl-4 text-gray-500 text-xs min-h-max min-w-max">View on Google Maps</a>
                    </div>
                    <h2 className="text-gray-800 font-bold text-2xl mb-2">{props.title}</h2>
                    <span className="font-bold text-xs"><span>{props.startDate}</span> - <span>{props.endDate}</span></span>
                    <p className="max-w-md text-xs text-gray-600 mt-2">{props.description}</p>
                </div>
            </div>
            <div className="sm:hidden mb-6"></div>
        </div>
    );
}