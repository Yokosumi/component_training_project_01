import { DropDown } from './DropDown'
import { SignUpButton } from './SignUpButton'
export const Nav = () => {
    return (
        <>
            <ul className="flex gap-6 justify-end items-center p-3 text-white text-xl">
                <li>Home</li>
                <li>
                    <DropDown />
                </li>
                <li>
                    <SignUpButton />
                </li>
            </ul>
        </>
    )
}
