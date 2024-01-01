import { DropDown } from './DropDown'
export const Nav = () => {
    return (
        <>
            <ul className="flex gap-6 justify-end items-center p-3 text-white text-xl">
                <li>Home</li>
                <li>
                    <DropDown />
                </li>
                <li>Sign Up</li>
            </ul>
        </>
    )
}
