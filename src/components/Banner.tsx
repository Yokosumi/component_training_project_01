type Props = {
    children: React.ReactNode
}

export const Banner = ({ children }: Props) => {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-cover bg-[url('/images/new_york_city.jpg')]">
                {children}
            </div>
        </>
    )
}
