import {  useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"


type Props = {}


const Navbar = (props: Props) => {

    const flexBetween = 'flex items-center justify-between'

    return (<nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
<div className={`${flexBetween} gap-16 w-full`}>
    <img src={Logo} alt="logo"/>

    <div className={`${flexBetween} w-full`}>
        <div className={`${flexBetween} gap-8 text-sm`}></div>
        <div></div>
    </div>
</div>
            </div>
        </div>
    </nav>)
}

export default Navbar