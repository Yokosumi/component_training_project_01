export const HeroSection = () => {
    return (
        <>
            <section className="flex flex-col gap-3  justify-center items-center">
                <h2 className="text-4xl text-black">Alpha</h2>
                <p className="text-black text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis!
                </p>
                <div className="flex gap-2">
                    <button className="btn btn-primary">Sign in</button>
                    <button className="btn btn-secondary">Learn more</button>
                </div>
            </section>
        </>
    )
}
