import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return(
        <div className='flex flex-col min-h-screen'>
            <NavBar/>
            <main className='flex-1'>
                {children}
            </main>
            <Footer/>
        </div>
    );
};