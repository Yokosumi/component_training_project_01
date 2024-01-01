export const DropDown = () => {
    return (
        <>
            <div className="dropdown dropdown-hover">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 text-xl text-white hover:text-gray-400"
                >
                    Layouts
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
                >
                    <li className="hover:text-gray-400">
                        <a>Generic</a>
                    </li>
                    <li className="hover:text-gray-400">
                        <a>Contact</a>
                    </li>
                    <li className="hover:text-gray-400">
                        <a>Elements</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
