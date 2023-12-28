import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
import {getCurrentUser} from '@/actions/getCurrentUser'



export async function PUT(request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }
    if(currentUser.role !== 'ADMIN') {
        return NextResponse.error();
    }

    const body = await request.json();
    const {id, deliveryStatus,status} = body;

    const order = await prisma.order.update({
        where: {id: id},
        data: {deliveryStatus,status}
    })

    return NextResponse.json(order);
}



