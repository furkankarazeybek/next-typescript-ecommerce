'use client';

import { formatNumber } from "@/utils/formatNumber";
import { formatPrice } from "@/utils/formatPrice";
import { Order, Product, User} from "@prisma/client";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";

interface SummaryProps {
    orders: Order[];
    products: Product[];
    users: User[] | undefined;

}

type SummaryDataType = {
    [key: string] : {
        label: string;
        digit: number;

    }
}

const Summary:React.FC<SummaryProps> = ({orders,products,users}) => {
    const [summaryData, setSummaryData] = useState<SummaryDataType>({
        sale: {
            label: 'Toplam Satış',
            digit: 0 
        },
        products: {
            label: 'Toplam Ürün',
            digit: 0 
        },
        orders: {
            label: 'Tüm Siparişler',
            digit: 0 
        },
        paidOrders: {
            label: 'Ödenmiş Siparişler',
            digit: 0 
        },
        unpaidOrders: {
            label: 'Ödenmemiş Siparişler',
            digit: 0 
        },
        users: {
            label: 'Tüm Kullanıcılar',
            digit: 0 
        },
    })

    useEffect(()  => {
        setSummaryData((prev) => {
            let tempData = {...prev}

            const totalSale = orders.reduce((acc,item) => {
                if(item.status === 'accepted') {
                    return acc + item.amount / 100
                }
                else {
                    return acc;
                }
            },0);

            const paidOrders = orders.filter((order => {
                return order.status === 'accepted';
            }))

            const unpaidOrders = orders.filter((order => {
                return order.status === 'pending';
            }))

            tempData.sale.digit = totalSale;
            tempData.orders.digit = orders.length;
            tempData.paidOrders.digit = paidOrders.length;
            tempData.unpaidOrders.digit = unpaidOrders.length;
            tempData.products.digit = products.length;
            if (users) {
                tempData.users.digit = users.length;
            } else {
                tempData.users.digit = 0; 
            }

            return tempData

        })
    },[orders,products,users])

    const summaryKeys = Object.keys(summaryData);

    if (users) {
        
      }
    return (
         <div className="max-w-[1150px] m-auto">
            <div className="mb-4 mt-8">
                <Heading title="Özet" center/>
            </div>
            <div className="grid grid-cols-2 gap-3 max-h-50vh overflow-y-auto">
                {
                    summaryKeys &&  summaryKeys.map((key) => {
                        return (
                        <div key={key} className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition">
                            <div className="text-xl md:text-4xl font-bold">
                                {
                                    summaryData[key].label === 'Toplam Satış' ? <>{formatPrice(summaryData[key].digit)}</> : <>{formatNumber(summaryData[key].digit)}</>
                                }
                            </div>
                            <div>{summaryData[key].label}</div>
                        </div>
                        )
                    })
                }
            </div>


         </div> 
         );
}
 
export default Summary;