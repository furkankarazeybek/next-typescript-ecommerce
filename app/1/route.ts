import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Prisma kullanarak veritabanından veri çekme
        const loadData = await prisma.load.findMany();

        // Çekilen verileri döndürme
        return NextResponse.json({ data: loadData });
    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.json({ error: "An error occurred while processing" }, { status: 500 });
    }
}
