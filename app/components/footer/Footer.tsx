import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md';
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
    return  <footer className="bg-slate-800 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Ürün Kategorileri</h3>
                    <Link href="#">Phones</Link>
                    <Link href="#">Laptops</Link>
                    <Link href="#">Desktops</Link>
                    <Link href="#">Watches</Link>
                    <Link href="#">Tvs</Link>
                    <Link href="#">Accessories</Link>

                </FooterList>

                <FooterList>
                    <h3 className="text-base font-bold mb-2">Müşteri Hizmetleri</h3>
                    <Link href="#">İletişim</Link>
                    <Link href="#">Ödeme Koşulları</Link>
                    <Link href="#">İade Koşulları</Link>
                    <Link href="#">SSS</Link>
                   

                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                   <h3 className="text-base font-bold mb-2">Hakkımızda</h3>
                   <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore facere voluptatibus eligendi recusandae, itaque nisi fugit, ratione saepe aspernatur, sapiente quisquam ab deleniti cum dolorum? Maxime error illo necessitatibus magni!</p>
                   <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved</p>

                </div>
               

                <FooterList>
                  <h3 className="text-base font-bold mb-2">Bizi Takip Edin</h3>
                  <div className="flex gap-2">
                     <Link href="#">
                        <MdFacebook size={24}/>
                     </Link>
                     <Link href="#">
                         <AiFillTwitterCircle size={24}/>
                     </Link>
                     <Link href="#">
                        <AiFillInstagram size={24}/>
                     </Link>
                     <Link href="#">
                        <AiFillYoutube size={24}/>
                     </Link>
                     
                  </div>

                </FooterList>
            </div>

        </Container> 
      </footer>;
}
 
export default Footer;