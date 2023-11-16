import { useState } from "react";

const Navbar = () => {
    const [shadowed, setShadowed] = useState(false)

   window.addEventListener("scroll", () => {
        if(window.scrollY > 200)
            setShadowed(true)
        else setShadowed(false)
   })
    
    return (
        <nav className={`flex items-center justify-between text-white p-5 px-20 fixed top-0 right-0 left-0 ${shadowed && 'bg-black'} transition duration-200 z-50 font-satoshi`}>
            <div className="image">
                <img width={50} src="/images/gunungan.svg" alt="gunungan logo" />
            </div>
            <ul className="flex items-center justify-between gap-14">
                <a href="/">
                    <li>
                        <p className="font-light text-lg">Tentang wayang</p>
                    </li>
                </a>
                <a href="/epos">
                    <li>
                        <p className="font-light text-lg">Epos & tokoh</p>
                    </li>
                </a>
                <a href="/about">
                    <li>
                        <p className="font-light text-lg">Tentang Kami</p>
                    </li>
                </a>
            </ul>
        </nav>
    );
}

export default Navbar;
