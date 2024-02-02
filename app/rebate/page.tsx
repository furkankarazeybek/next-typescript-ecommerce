import Image from "next/image";

const Rebate = () => {
    return (
        <>

        <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'  }}>
           <div className="absolute inset-0 bg-black opacity-50"></div>
           <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
               <div className="mb-8 md:mb-0 text-center z-10">
                   <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black' }}>İADE KOŞULLARI</h1>
               </div>
           </div>
       </div>
           
       <div className="flex flex-col sm:flex-row">
       <div className=" w-full sm:w-1/2 py-20 px-10">

       1. İade Süresi ve Koşulları

1.1. Müşterilerimiz, ürünü teslim aldıktan sonraki 14 gün içerisinde iade taleplerini iletebilirler. Bu süre, ürünün orijinal ambalajında, kullanılmamış ve satılabilir durumda olması koşuluyla geçerlidir.

1.2. Elektronik ürünler ve hijyenik ürünler gibi özel koşulları olan ürünler için iade süresi ve koşulları ürün açıklamalarında belirtilir.

2. İade Prosedürü

2.1. İade talebinde bulunmak için müşteriler, [Şirket Adı]'nin resmi web sitesindeki hesaplarından veya müşteri hizmetleri ile iletişime geçerek taleplerini iletebilirler.

2.2. Müşteri hizmetleri ekibimiz, talepleri en kısa sürede değerlendirecek ve müşteriye geri dönüş sağlayacaktır.

2.3. Onaylanan iade talepleri için, müşteriye kargo etiketi sağlanarak ücretsiz iade seçenekleri sunulabilir.

2.4. Ürün iade edildikten sonra, ürünün durumu kontrol edilecek ve iade onayı verilecektir.

3. İade Edilemeyecek Ürünler

3.1. Aşağıdaki durumlar söz konusu olduğunda, ürün iadesi kabul edilmemektedir:

Kullanılmış veya kişisel hijyen nedeniyle iade edilemeyen ürünler.
Orijinal ambalajı eksik veya hasar görmüş ürünler.
4. İade İşlem Süresi

4.1. İade talepleri, [Şirket Adı]'nin müşteri hizmetleri ekibi tarafından 5 iş günü içerisinde değerlendirilir.

4.2. İade onayı verilen müşterilere, iade işleminin tamamlanması için gerekli talimatlar sağlanır.

5. İade Sonrası İade Tutarı İadesi

5.1. İade onayı alınan müşterilere, iade tutarı, ödeme yapılan şekle bağlı olarak 5 iş günü içerisinde iade edilir.

5.2. Kredi kartına iade işlemleri, banka prosedürlerine bağlı olarak birkaç iş günü sürebilir.


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
 
export default Rebate