// import images from './images'

export default function TravelCard(props)
{
    return (
        <div className="travel--card">
            <img src={`./images/${props.dest.photo}`} alt='Photo'/>
            <div>{props.dest.country.toUpperCase()}</div>
            <h1>{props.dest.title}</h1>
        </div>
    )
}