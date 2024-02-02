import Image from "next/image";

const Requirements = () => {
    return (
        <>
        
        
        
        <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'  }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
            <div className="mb-8 md:mb-0 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black' }}>ŞARTLAR VE KOŞULLAR</h1>
            </div>
        </div>
       </div>
       
       <div className="flex flex-col sm:flex-row">
       <div className=" w-full sm:w-1/2 py-20 px-10">

       Kabul Edilme Koşulları

1.1. Bu web sitesini kullanarak, aşağıdaki şartlar ve koşulları kabul etmiş olursunuz.

1.2. Eğer bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.

Üyelik Bilgileri ve Güvenlik

2.1. Sitemizi kullanırken verdiğiniz kişisel bilgilerin doğru, güncel ve eksiksiz olduğunu kabul edersiniz.

2.2. Kullanıcı adı ve şifrenizin güvenliği sizin sorumluluğunuzdadır. Şifrenizi kimseyle paylaşmamalısınız.

Gizlilik Politikası

3.1. Kişisel bilgilerinizin nasıl kullanılacağı ve korunacağıyla ilgili ayrıntılı bilgi için Gizlilik Politikamızı inceleyiniz.

Sipariş ve Ödeme Koşulları

4.1. Sipariş verirken doğru ürünleri ve miktarları seçtiğinizden emin olun.

4.2. Ödeme işlemleri güvenli bir şekilde gerçekleştirilmektedir. Ancak, kredi kartı bilgilerinizin güvenliği için ek önlemler almanızı öneririz.

Ürün İade ve Değişim Politikası

5.1. Ürün iade ve değişim koşulları için lütfen iade politikamızı inceleyiniz.

Hizmet Kesintileri ve Güvenlik

6.1. Sitemizde olası hizmet kesintileri veya güvenlik ihlalleri durumunda, sitemizin sorumluluğunu sınırlayan yasal düzenlemelere uymayı kabul edersiniz.

Fikri Mülkiyet Hakları

7.1. Sitemizdeki tüm içerik, yazılım ve tasarımlar fikri mülkiyet haklarına tabidir. İzinsiz kullanım durumunda yasal işlemler başlatılabilir.

Değişiklikler ve Güncellemeler

8.1. Şartlar ve koşullarımızı zaman zaman güncelleyebiliriz. Bu nedenle, düzenli olarak güncellemeleri kontrol etmenizi öneririz.

İletişim Bilgileri

9.1. Herhangi bir soru veya endişeniz varsa, bizimle iletişime geçmekten çekinmeyin. İletişim bilgilerimiz web sitemizde bulunabilir.
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
 
export default Requirements