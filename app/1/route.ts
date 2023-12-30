import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Prisma kullanarak veritabanından veri çekme
        const loadData = await prisma.load.findMany();

        console.log(loadData)

        // Çekilen verileri döndürme
        return NextResponse.json({ data: [
            {
              id: '659068b611b265978e6386e5',
              name: 'Metal Anahtarlık',
              state: false,
              description: 'Metal anahtarlık. Lazer baskıya ve plasto etikete uygundur.',
              price: 23,
              brand: 'IL',
              category: 'Diğer Promosyon Ürünler',
              inStock: true
            },
            {
              id: '659076a6f4def7d4df34ac20',
              name: '16gb usb',
              state: true,
              description: '16gb usb',
              price: 270,
              brand: 'PL',
              category: 'Diğer Promosyon Ürünler',
              inStock: true
            },
            {
              id: '659076eff4def7d4df34ac21',
              name: 'Şapka - Erkek',
              state: true,
              description: 'Şapka Erkek',
              price: 110,
              brand: 'ET',
              category: 'Diğer Promosyon Ürünler',
              inStock: true
            }
          ] });
    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.json({ error: "An error occurred while processing" }, { status: 500 });
    }
}
