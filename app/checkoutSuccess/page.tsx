'use client'

import { useRouter } from "next/navigation";
import Button from "../components/Button";

const CheckoutSuccess = () => {

    const router = useRouter();

    return ( 
        
        <div className="flex items-center flex-col gap-4 " style={{ marginTop: '50px' }}>
         <div className="text-teal-500 text-center font-bold text-lg">Sipariş Oluşturuldu!</div>
        <div className='max-w-[220px] w-full'>
          <Button label="Siparişlerinizi Görüntüleyin" onClick={() => router.push("/orders")} />
        </div>
        </div>
      

     );
}
 
export default CheckoutSuccess;