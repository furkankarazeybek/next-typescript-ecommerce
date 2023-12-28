import Stripe from 'stripe';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';
import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { getCurrentUser } from '@/actions/getCurrentUser';




const calculateOrderAmount = (items: CartProductType[]) => {
    const totalPrice = items.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;

        return acc + itemTotal;
    },0);

    const price : any = Math.floor(totalPrice);

   

    return price;
}    

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { items,name,city,town,district,address } = body;
    const total = calculateOrderAmount(items) * 100;

    // Prisma modelinizdeki alanlar ile uyumlu bir orderData nesnesi
       const orderData = {
           userId: currentUser.id,
           name: name,
           city: city,
           town: town,
           district: district,
           address: address,
           amount: total,
           currency: 'try',
           status: 'pending',
           deliveryStatus: 'pending',
           products: items
           // Diğer gerekli alanları buraya ekleyebilirsiniz
       }
       
       try {
           await prisma.order.create({
               data: orderData
           });
       
           console.log("Order created successfully");
           return NextResponse.json({ success: true });
       } catch (error) {
           console.error("An error occurred:", error);
           return NextResponse.json({ error: "An error occurred while processing the order" }, { status: 500 });
   }

}
