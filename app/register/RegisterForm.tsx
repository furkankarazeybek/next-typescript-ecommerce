'use client'

import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { useForm, FieldValues,SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import {signIn} from 'next-auth/react'
import  router  from "next/router";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFormProps{
    currentUser: SafeUser | null
}

const RegisterForm: React.FC<RegisterFormProps> = ({currentUser}) => {


    const [isLoading, setIsLoading] = useState(false);

    const {register,handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });


    const router = useRouter();

    
    useEffect(() => {
        if(currentUser) {
            router.push('/');
            router.refresh();
        }
    },[])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        
        axios.post('/api/register',data).then(() => {
            toast.success('Hesap Oluşturuldu');

            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if(callback?.ok) {
                    router.push('/')
                    router.refresh();
                    toast.success('Giriş Yapıldı')
                }

                if(callback?.error) {
                    toast.error(callback.error)
                }

            })
        }).catch(() => toast.error("Something went wrong"))
        .finally(() => {
            setIsLoading(false);
        });
    }

    
   if(currentUser) {
    return <p className="text-center">Kayıt Yapıldı. Yönlendiriliyor...</p>
   }

    return ( 
    <>
     <Heading title="Hesap Oluştur" />
     <Button
     outline
     label="Google ile Devam Et" 
     icon={AiOutlineGoogle}
     onClick={() => {signIn('google')}}
     />


      <hr className="bg-slate-300 w-full h-px" />
      <Input 
      id="name"
      label="Ad Soyad"
      disabled={isLoading}
      register={register}
      errors={errors}
      required />

     <Input 
      id="email"
      label="E-posta Adresi"
      disabled={isLoading}
      register={register}
      errors={errors}
      required />

      <Input 
      id="password"
      label="Şifre"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      type="password"
      />

      <Button onClick={handleSubmit(onSubmit)} label= {isLoading ? "Yükleniyor" : "Kayıt Ol"} />

      <p className="text-sm">Zaten Hesabınız Var Mı?{" "}  
        <Link className="underline" href="/login">
            Giriş Yap
        </Link> 
    </p>





      </>
    
    );
}
 
export default RegisterForm;