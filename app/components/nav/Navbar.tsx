
import Link from "next/link";
import  Container  from "../Container";

import { Redressed  } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import Image from "next/image";

const redressed = Redressed({subsets: ['latin'], weight: ['400']})

const Navbar = async() => {

   const currentUser = await getCurrentUser();

   
    return <div className="sticky top-0 w-full bg-[#131a23] z-30 shadow-sm">
         <div className="py-4 border-b-[1px]" style={{ borderColor: '#febb6e' }}>
         <Container>
            <div className="flex items-center justify-between gap-3 md:gap-0">
               <Link href="/" className={` font-semibold text-2xl text-white`}>
               <Image 
                src='/logo.png'
                width={100}
                height={56}
                alt= 'logo'
                
                /></Link>
               


              
               <div className=""><SearchBar />
               
               
               </div>
               <Link href="/" className={`hidden sm:inline-block font-base text-md text-white`}>Anasayfa</Link>
               <Link href="/?category=Promosyon%20Diğer" className={`hidden sm:inline-block font-base text-md text-white`}>Diğer Promosyon Ürünler</Link>
               <Link href="/aboutus" className={`hidden sm:inline-block font-base text-md text-white`}>Hakkımızda</Link>
               <Link href="/contact" className={`hidden sm:inline-block font-base text-md text-white`}>İletişim</Link>
     
               
               <div className="flex items-center gap-8 md:gap-12">
                  <CartCount />
                  <UserMenu currentUser={currentUser}/>
               </div>
            </div>
         </Container>

      </div>
      <Categories />
    </div>
}
 
export default Navbar;
  