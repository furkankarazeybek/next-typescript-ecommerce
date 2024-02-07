import Image from "next/image";

const Aboutus = () => {
    return (
    <>

      <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'  }}>
           <div className="absolute inset-0 bg-black opacity-50"></div>
           <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
               <div className="mb-8 md:mb-0 text-center z-10">
                   <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black' }}>HAKKIMIZDA</h1>
               </div>
           </div>
       </div>

       <div className="flex flex-col sm:flex-row">
       <div className="w-full sm:w-1/2 py-20 px-10">
    <p className="py-5">Mg Promosyon, çakmak başta olmak üzere pek çok üründe promosyon ihtiyaçlarını karşılamaktadır. Toptan satış fırsatı ile promosyon ürünlerde Mg Promosyon müşterilerine kaliteli çözümler sunmaktadır.</p>

    <p className="py-5">Biz Mg Promosyon olarak, en iyi promosyon çözümlerini sunmayı ilke edinen bir ekibiz. Hızla değişen sektörel dinamiklere ve müşteri beklentilerine uyum sağlayabilme yeteneğimizle tanınırız. Geniş ürün yelpazemiz, promosyon kalemlerden çakmaklara, tekstil ürünlerinden ofis malzemelerine kadar birçok ürünü kapsamaktadır.</p>

    <p className="py-5">Kalite ve Dayanıklılık, bizim için temel önceliklerden biridir. Müşterilerimizin markalarını en iyi şekilde temsil edebilmeleri için yüksek kaliteli malzemeler kullanıyoruz.</p>

    <p className="py-5">Yaratıcılık ve Tasarım da önem verdiğimiz unsurlardan biridir. Özel logolar, marka renkleri ve dikkat çekici grafiklerle, müşterilerimize etkileyici bir marka deneyimi yaşatmayı amaçlıyoruz.</p>

    <p className="py-5">Çeşitlilik ve Esneklik, müşterilerimize geniş bir ürün yelpazesi sunmamızı sağlar. İhtiyaçlarına özel çözümler bulmalarına olanak tanır.</p>

    <p className="py-5">Hızlı ve Güvenilir Hizmet, siparişlerinizi en kısa sürede teslim etmek için çaba gösteriyoruz. Müşteri memnuniyetini ön planda tutarak, güvenilir ve hızlı bir hizmet sunuyoruz.</p>

    <p className="py-5">Mg Promosyon olarak, iş ortaklarımıza en iyi promosyon çözümlerini sunma misyonuyla hareket ediyoruz. Siz de markanızı öne çıkarmak, müşterilerinize unutulmaz deneyimler yaşatmak ve etkili bir pazarlama stratejisi oluşturmak istiyorsanız, bize ulaşın. Mg Promosyon ile işbirliği yaparak markanızı güçlendirin!</p>
    </div>

       <div className="w-full  sm:w-1/2  py-20 px-10">

         <Image
              src="/mg_promosyon.png"
              width={1920}
              height={900}
              layout="responsive"
              objectFit="cover"
              alt={`Logo Image`}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            />
         
        </div>  

       </div>
    </>
   
    
    )
}
 
export default Aboutus
