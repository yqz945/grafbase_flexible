import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: '数喻 SunSea',
    description: '天喻教育大数据解决方案',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}
