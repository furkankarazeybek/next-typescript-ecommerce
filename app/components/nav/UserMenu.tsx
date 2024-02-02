'use client'

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import Image from "next/image";

interface UserMenuProps{
  currentUser : SafeUser | null;
}



const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
  console.log(currentUser);


  const role = currentUser?.role;
 
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])


    return ( 
    <>
      <div className="relative z-30">
        <div onClick={toggleOpen} className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-white">
            {currentUser?.image ? 
            <Image
            src={currentUser?.image}
            alt="Avatar"
            className="rounded-full"
            height= "30"
            width="30"
            /> : <Avatar />}  
            <AiFillCaretDown />
        </div>

        { isOpen && (
            <div className="
            absolute 
            rounded-md 
            shadow-md
            w-[170px]
            bg-white
            overflow-hidden
            right-0
            top-12
            tet-sm
            flex
            flex-col
            cursor-pointer
            "> 
              {currentUser ?  <div>
                 <Link href="/">
                    <MenuItem onClick={toggleOpen}>Anasayfa</MenuItem>
                  </Link>
                  <Link href="/orders">
                    <MenuItem onClick={toggleOpen}>Siparişleriniz</MenuItem>
                  </Link>
                  {role == 'ADMIN' ? (
                      <Link href="/admin">
                        <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                      </Link>
                    ) : null}

                  <hr />
                  <MenuItem onClick={() => {
                    toggleOpen(); 
                    signOut()
                  }}>Çıkış Yap
                  </MenuItem>
               </div>:      
               <div> 
                <Link href="/login">
                   <MenuItem onClick={toggleOpen}>Giriş Yap</MenuItem>
                </Link>
                <Link href="/register">
                   <MenuItem onClick={toggleOpen}>Kayıt Ol</MenuItem>
                </Link>

               </div>}
              

          
            </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
     
    </> );
}
 
export default UserMenu;