import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md';
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";

const Footer = () => {
    return  <footer className="bg-[#131a23] text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Ürün Kategorileri</h3>
                    <Link href="/?category=Promosyon%20Çakmak">Promosyon Çakmak</Link>
                    <Link href="/?category=Promosyon%20Kalem">Promosyon Kalem</Link>
                    <Link href="/?category=Toptan%20Çakmak">Toptan Çakmak</Link>
                    <Link href="/?category=Promosyon%20Diğer">Promosyon Diğer</Link>
                   

                </FooterList>

                <FooterList>
                    <h3 className="text-base font-bold mb-2">Müşteri Hizmetleri</h3>
                    <Link href="/contact">İletişim</Link>
                    <Link href="/aboutus">Hakkımızda</Link>
                    <Link href="/requirements">Şartlar ve Koşullar</Link>
                    <Link href="/rebate">İade Koşulları</Link>
                   
                   

                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                   <h3 className="text-base font-bold mb-2">Hakkımızda</h3>
                   <p className="mb-2">Mg Promosyon, çakmak başta olmak üzere pek çok üründe promosyon ihtiyaçlarını karşılamaktadır. Toptan satış fırsatı ile promosyon ürünlerde Mg Promosyon müşterilerine kaliteli çözümler sunmaktadır.</p>
                   <p>&copy; {new Date().getFullYear()} Mg Promosyon. Tüm Hakları Saklıdır</p>

                   <div className="flex gap-2 pt-5">
                     <Link href="https://www.facebook.com/profile.php?id=61554438080247">
                        <MdFacebook size={24}/>
                     </Link>
                     
                     <Link href="https://www.instagram.com/mg.promosyon/">
                        <AiFillInstagram size={24}/>
                     </Link>
                     
                     
                  </div>
                </div>
               

                <FooterList>
                  <h3 className="text-base font-bold mb-2">İletişim</h3>
                  <Link href=""><b>Konum: </b> Haydar Çavuş Mahallesi Şehit Süleyman Bey Caddesi 10200,Bandırma/Balıkesir</Link>
                  <Link href=""><b>Email: </b>info@mgpromosyon.com</Link>
                  <Link href=""><b>Telefon: </b> 0850 309 3925</Link>



               <Image 
                className="pt-5"
                src='/logo.png'
                width={100}
                height={56}
                alt= 'logo'
                
                />
                </FooterList>
            </div>

        </Container> 
      </footer>;
}
 
export default Footer;
