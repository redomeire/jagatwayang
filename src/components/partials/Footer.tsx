import { Facebook, Instagram } from "react-feather";
import Button from "../button";

const Footer = () => {
    return (
        <footer className="bg-[#130E08] text-white font-satoshi py-10 px-20">
            <div className="flex items-start justify-between">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-9">
                        <img src="/images/gunungan.svg" width={50} />
                        <p className="text-display-md">JagatWayang</p>
                    </div>
                    <p className="mt-5 text-xl">Menapaki Jejak Budaya, Melestarikan Kesenian Klasik, dan Menerangi Pintu Menuju Masa Depan yang Makmur. Menapaki Jejak Budaya,</p>
                </div>
                <ul className="flex items-center mt-5 gap-5">
                    <li className="text-lg">
                        <a href="/tentang-wayang">
                            Tentang Wayang
                        </a>
                    </li>
                    <li className="text-lg">
                        <a href="/epos">
                            Epos & Tokoh
                        </a>
                    </li>
                    <li className="text-lg">
                        <a href="/tentang-kami">
                            Tentang Kami
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="mt-20 mb-10"/>
            <div className="flex items-center justify-between">
                <p className="text-xl">2023 JagatWayang All rights reserved</p>
                <div className="flex items-center gap-4">
                    <Button variant="secondary" className="bg-white text-black hover:brightness-75 p-2 rounded-lg">
                        <Facebook />
                    </Button>
                    <Button variant="secondary" className="bg-white text-black hover:brightness-75 p-2 rounded-lg">
                        <Instagram />
                    </Button>
                    <Button variant="secondary" className="bg-white text-black hover:brightness-75 p-2 rounded-lg">
                        <img src="/images/footer/tiktok.svg"/>
                    </Button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
