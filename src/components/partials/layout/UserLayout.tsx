import Footer from "../Footer";
import Navbar from "../Navbar"

interface Props {
    children: React.ReactNode
}

const UserLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className="overflow-clip">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default UserLayout;
