import DropDown from './DropDown'

export const NavBar = () => {
    return (
        <>
            <ul className="text-white">
                <li>Home</li>
                <li>
                    <DropDown />{' '}
                </li>
                <li>
                    <button>Sign Up</button>
                </li>
            </ul>
        </>
    )
}
