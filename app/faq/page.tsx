import Image from "next/image";

const Faq = () => {
    return (
        <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
            <div className="mb-8 md:mb-0 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white"  style={{ WebkitTextStroke: '1px black'}}>SSS</h1>
            </div>
        </div>
    </div>
    
    )
}
 
export default Faq