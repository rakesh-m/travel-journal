import location from '../images/location.svg'

function importAll(r)
{
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item)})
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))

console.log(JSON.stringify(images));

export default function TravelCard(props)
{
    return (
        <div className="travel--card">
            <img src={images[props.dest.photo]} alt={props.dest.photo}/>
            {/* <img src={images} alt={props.dest.photo}/> */}
            <div className="card--data">
                <div className="card--country">
                    {/* <span> */}
                        {/* <img src={location} alt='Location'/> */}
                    {/* </span> */}
                    {props.dest.country.toUpperCase()}
                    <span><a href={props.dest.location} target='_blank' className="maps--text">View on Google Maps</a></span>
                </div>
                <h1>{props.dest.title}</h1>
                <h3>{props.dest.start_date} - {props.dest.end_date}</h3>
                <p className="card--content">
                    {props.dest.content}
                </p>
                <hr/>
            </div>
        </div>
    )
}