export const DropDown = () => {
    return (
        <>
            <div className="dropdown dropdown-hover">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-outline m-1 text-xl text-white before:content-['->']"
                >
                    Layouts
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
                >
                    <li>
                        <a>Generic</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Elements</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
