'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";

const AdminNav = () => {

    const pathname = usePathname();

    return ( 
    
        <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
            <Container>
                <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link href='/admin'>
                       <AdminNavItem 
                       label="Özet" 
                       icon={MdDashboard} 
                       selected={pathname === '/admin'} 
                       />
                    </Link>

                    <Link href='/admin/add-products'>
                       <AdminNavItem 
                       label="Ürün Ekle" 
                       icon={MdLibraryAdd} 
                       selected={pathname === '/admin/add-products'} 
                       />
                    </Link>
                    <Link href='/admin/manage-products'>
                       <AdminNavItem 
                       label="Ürün Yönetimi" 
                       icon={MdDns} 
                       selected={pathname === '/admin/manage-products'} 
                       />
                    </Link>
                    <Link href='/admin/manage-orders'>
                       <AdminNavItem 
                       label="Sipariş Yönetimi" 
                       icon={MdFormatListBulleted} 
                       selected={pathname === '/admin/manage-orders'} 
                       />
                    </Link>
                  
                </div>
            </Container>
        </div>
     );
}
 
export default AdminNav;