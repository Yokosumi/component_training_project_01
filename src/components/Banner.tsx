import new_york_city from '/public/images/new_york_city.jpg'

export const Banner = () => {
    return (
        <>
            <img
                className="w-screen h-screen blur-sm"
                src={new_york_city}
                alt="New York City"
            />
        </>
    )
}
