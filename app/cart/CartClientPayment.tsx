'use client';
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/Button";
import Heading from "../components/Heading";
import ItemContent from "./ItemContent";

const CartClientPayment = () => {
    const {cartProducts,handleClearCart,cartTotalAmount } = useCart()
    const router = useRouter();

    const handlePayment = () => {
       
        router.push('/checkout');
      };
    if(!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Sepetiniz Boş</div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                    <span>Alışverişe Başla</span>
                    </Link>
                </div>
            </div>
        )
          
        
    }
    return <div className="pt-20">
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
            <div className="col-span-2 justify-self-start">ÜRÜN</div>
            <div className="justify-self-center">FİYAT</div>
            <div className="justify-self-center">ADET</div>
            <div className="justify-self-end">TOPLAM TUTAR</div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item) => {
                return <ItemContent key={item.id} item={item} />
            })}
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
           <div className="w-[120px]">
               <Button label="Sepeti Boşalt" onClick={() => {handleClearCart()
               }} small outline/>
           </div>
            
            <div className="text-sm flex flex-col gap-1 items-start">
                 <div className="flex justfiy-between w-full text-base font-semibold gap-1" >
                   <span>Toplam Tutar:  </span>
                   <span>{formatPrice(cartTotalAmount+(0.20*cartTotalAmount))}</span>
                 </div>
                
                 <p className="text-slate-500">KDV ve Tutar Hesaplandı</p>
                 <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                    <span>Alışverişe Devam Et</span>
                 </Link>
               
            </div> 


          </div>
    </div>
}

export default CartClientPayment;