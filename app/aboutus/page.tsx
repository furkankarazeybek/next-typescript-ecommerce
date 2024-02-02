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
       <div className=" w-full sm:w-1/2 py-20 px-10">

        Mg Promosyon olarak, müşterilerimize yaratıcı, kaliteli ve etkileyici promosyon ürünleri sunan bir firma olarak gurur duyuyoruz. Firmamız, uzun yıllardır sektörde edindiğimiz deneyim ve uzmanlık ile öne çıkmaktadır.

      
      
      Mg Promosyon, müşterilerimize en iyi promosyon çözümlerini sunmayı ilke edinen bir ekip tarafından kurulmuştur. Sektördeki değişimlere ve müşteri beklentilerine hızla adapte olabilen dinamik bir yapıya sahibiz. Promosyon kalem, promosyon çakmak, toptan çakmak ve diğer birçok promosyon ürünleri konusundaki geniş ürün yelpazemizle müşterilerimizin ihtiyaçlarına cevap veriyoruz.
      
    
      
      Kalite ve Dayanıklılık: Mg Promosyon olarak, ürünlerimizin kalitesinden ödün vermiyoruz. Müşterilerimizin markalarını en iyi şekilde temsil etmelerini sağlamak için yüksek kaliteli malzemeler kullanıyoruz.
      
      Yaratıcılık ve Tasarım: Promosyon ürünlerimizin tasarımında yaratıcılığa önem veriyoruz. Özel logolar, marka renkleri ve dikkat çekici grafiklerle müşterilerimizin etkileyici bir marka deneyimi yaşamalarını sağlıyoruz.
      
      Çeşitlilik ve Esneklik: Mg Promosyon olarak, müşterilerimize geniş bir ürün yelpazesi sunuyoruz. Promosyon kalem, promosyon çakmak, tekstil ürünleri, ofis malzemeleri ve daha fazlası arasından seçim yapabilir ve ihtiyaçlarınıza özel çözümler bulabilirsiniz.
      
      Hızlı ve Güvenilir Hizmet: Siparişlerinizi en kısa sürede teslim etmek için çalışıyoruz. Müşteri memnuniyetini ön planda tutarak, güvenilir ve hızlı bir hizmet sunuyoruz.
      
    
      
      Mg Promosyon olarak, iş ortaklarımıza en iyi promosyon çözümlerini sunma misyonuyla hareket ediyoruz. Siz de markanızı öne çıkarmak, müşterilerinize unutulmaz deneyimler yaşatmak ve etkili bir pazarlama stratejisi oluşturmak istiyorsanız, bize ulaşın. Mg Promosyon ile işbirliği yaparak markanızı güçlendirin!
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