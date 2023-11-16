import Tilt from "react-parallax-tilt"
import Button from "../components/button"
import UserLayout from "../components/partials/layout/UserLayout"
import WayangSlider from "../components/pages/beranda/WayangSlider"

export default function Beranda() {
    return (
        <UserLayout>
            <main className="font-satoshi">
                <section className="min-h-screen bg-black text-white flex items-start justify-between">
                    <div className="md:w-6/12 pl-20 pt-40">
                        <h1 className="text-display-xl mb-5 font-bold leading-[80px]">Kenali Wayang, Lestarikan Budaya</h1>
                        <p className="leading-10 text-display-xs font-light">Menapaki Jejak Budaya, Melestarikan Kesenian Klasik, dan Menerangi Pintu Menuju Masa Depan yang Makmur.</p>
                        <Button variant="primary" className="mt-10 font-semibold min-w-[200px]">Jelajahi Jagat</Button>
                    </div>
                    <Tilt className="w-5/12">
                        <img src="/images/gunungan.png" />
                    </Tilt>
                </section>
                <section className="bg-black text-white !bg-cover !bg-center" style={{ background: `url(/images/homepage/sejarah-wayang.png)` }}>
                    <div className="md:w-6/12 p-20" style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}>
                        <h1 className="mb-5 font-bold text-display-md">Sejarah Wayang di Nusantara</h1>
                        <p className="text-display-xs font-extralight leading-10">Perjalanan panjang seni tradisional ini, dari akar-akarnya hingga peran pentingnya dalam membangun identitas budaya Indonesia.</p>
                        <Button variant="secondary" className="mt-10 font-bold">
                            Lihat Selengkapnya
                        </Button>
                    </div>
                </section>
                <section className="p-10 bg-black text-white pb-20 relative">
                    <div className="mt-20 w-full">
                        <img src="/images/homepage/section-wayang-bg.png" width={600} className="absolute -z-[-1] -top-[240px] right-0 left-0 m-auto"/> 
                        <WayangSlider />
                    </div>
                    <div className="flex items-center justify-center flex-col text-center md:w-3/4 mx-auto">
                        <h3 className="text-display-md font-bold">Karakter Wayang Populer</h3>
                        <p className="text-display-xs bg-gradient-to-b from-[#f3f8ff] to-[#272727] bg-clip-text fill-transparent" style={{ color: "rgba(0, 0, 0, 0.2)" }}>Merefleksikan nilai-nilai budaya, kisah epik, dan hikmah moral dari tokoh-tokoh pewayangan.</p>
                    </div>
                </section>
                <section className="bg-black text-white flex justify-end !bg-cover !bg-center" style={{ background: `url(/images/homepage/epos-wayang.png)` }}>
                    <div className="md:w-6/12 px-20 py-20" style={{ background: "linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)" }}>
                        <h1 className="mb-10 font-bold leading-[50px] text-display-md">2 Epos Besar Pewayangan</h1>
                        <p className="text-display-xs font-extralight leading-10">Memahami Kekayaan Budaya Ramayana dan Mahabharata yang Menginspirasi Nilai-nilai Kehidupan Sejati.</p>
                        <Button variant="secondary" className="mt-10 font-bold">
                            Lihat Selengkapnya
                        </Button>
                    </div>
                </section>
            </main>
        </UserLayout>
    )
}
