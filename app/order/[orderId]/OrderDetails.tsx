'use client'

import Heading from "@/app/components/Heading";
import Status from "@/app/components/products/Status";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import moment from "moment";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";

interface OrderDetailProps {
    order: Order
}

const OrderDetails:React.FC<OrderDetailProps>  = ({order}) => {



    return (
     <div className="max-w-[1150px] m-auto flex flex-col gap-2">
        <div className="mt-8">
            <Heading title="Sipariş Detayları" />
        </div>
        <div>Sipariş ID: {order.id}</div>
        <div>Toplam Tutar: {" "}
            <span className="font-bold">{formatPrice(order.amount)}</span>
        </div>


        <div className="flex gap-2 items-center">  
            <div> Ödeme Durumu:{" "}</div>
            <div>
                {order.status === 'pending' ? 
                <Status
                text="Ödeme Bekliyor"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
                 /> : 
                  order.status === 'accepted' ?  
                 <Status
                    text="Ödeme Onaylandı"
                    icon={MdDone}
                    bg="bg-green-200"
                    color="text-green-700"
                  /> : ""}
            </div>
        </div>
        
        <div className="flex gap-2 items-center">  
            <div>Sipariş Durumu:{" "}</div>
            <div>
                {order.deliveryStatus === 'pending' ? 
                <Status
                text="Sipariş Alındı"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
                 /> : order.deliveryStatus === 'dispatched' ?  
                 <Status
                    text="Sipariş Tamamlandı"
                    icon={MdDeliveryDining}
                    bg="bg-green-200"
                    color="text-green-700"
                  /> : 
                  order.deliveryStatus === 'completed' ?  
                 <Status
                    text="Sipariş Teslim Edildi"
                    icon={MdDone}
                    bg="bg-green-200"
                    color="text-green-700"
                  /> : ""}
            </div>
        </div>
       <div>Adres: {order.address}</div>


     <div> Tarih: {moment(order.createDate).fromNow()}</div>   
     <div>
        <h2 className="font-semibold mt-4 mb-2">Sipariş Verilen Ürünler</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
            <div className="col-span-2 justify-self-start">ÜRÜN</div>
            <div className="justify-self-center">FİYAT</div>
            <div className="justify-self-center">ADET</div>
            <div className="justify-self-end">TOPLAM TUTAR</div>
           
        </div>
        {order.products && 
            order.products.map((item) => {
                return <OrderItem key={item.id} item={item} ></OrderItem>
            })}
     </div>
     </div> 
     );
}
 
export default OrderDetails;