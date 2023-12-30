import Stripe from 'stripe';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';
import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { getCurrentUser } from '@/actions/getCurrentUser';





export async function POST(request: Request) {
   

    const body = await request.json();
    const { name,state } = body;


    // Prisma modelinizdeki alanlar ile uyumlu bir orderData nesnesi
       const loadData = {
           name: name,
           state: state
        
         
           // Diğer gerekli alanları buraya ekleyebilirsiniz
       }
       
       try {
           await prisma.load.create({
               data: loadData
           });
       
          
           return NextResponse.json({ success: true });
       } catch (error) {
           console.error("An error occurred:", error);
           return NextResponse.json({ error: "An error occurred while processing" }, { status: 500 });
   }

}
