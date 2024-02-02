import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import CartClientPayment from '../cart/CartClientPayment';



const PaymentForm = () => {
  const { cartTotalQty,cartTotalAmount, cartProducts } = useCart();
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [telno, setTelno] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');

  const {handleClearCart } = useCart()


  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true)
   
    try {
      // Alışveriş sepeti verilerini kullanarak yeni bir sipariş oluşturun
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          city : city,
          town: province,
          telno: telno,
          address: address,
          district: district,
          total: cartTotalAmount,
          items: cartProducts,
          
        }),
      });

      if (response.ok) {

        setLoading(false)

        handleClearCart();
        router.push('/checkoutSuccess');

        console.log('Order created successfully:', response.json());
        // Sipariş başarıyla oluşturuldu, isteğinize göre yönlendirme veya başka bir şey yapabilirsiniz
      } else {
        console.error('Failed to create order:', response.json());
        // Sipariş oluşturma başarısız oldu, kullanıcıya bir hata mesajı gösterebilirsiniz
      }
    } catch (error) {
      console.error('Error creating order:', error);
      // İstek sırasında bir hata oluştu, kullanıcıya bir hata mesajı gösterebilirsiniz
    }
  };

  if(cartTotalQty==0)
  {
    return (
    <>
    <CartClientPayment />
    </>)
  }


  const isAnyFieldEmpty = () => {
    return !fullName || !city || !province || !district || !telno || !address;
  };

  return (
    <>

     <div className="lg:hidden">
       
       <Typography className="py-10" variant="h2">Sipariş Bilgileri</Typography>
       
       <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
           <TextField
             label="Ad Soyad"
             variant="outlined"
             fullWidth
             value={fullName}
             onChange={(e) => setFullName(e.target.value)}
           />
         </Grid>
   
         <Grid item xs={12} sm={6}>
           <TextField
             label="Şehir"
             variant="outlined"
             fullWidth
             value={city}
             onChange={(e) => setCity(e.target.value)}
           />
         </Grid>
   
         <Grid item xs={12} sm={6}>
           <TextField
             label="İlçe"
             variant="outlined"
             fullWidth
             value={province}
             onChange={(e) => setProvince(e.target.value)}
           />
         </Grid>
   
         <Grid item xs={12} sm={6}>
           <TextField
             label="Mahalle"
             variant="outlined"
             fullWidth
             value={district}
             onChange={(e) => setDistrict(e.target.value)}
           />
         </Grid>

         <Grid item xs={12} sm={6}>
         <TextField
            label="Telefon"
            variant="outlined"
            fullWidth
            value={telno}
            onChange={(e) => setTelno(e.target.value)}
          />
          </Grid>

   
         <Grid item xs={12}>
           <TextField
             label="Adres"
             variant="outlined"
             fullWidth
             value={address}
             onChange={(e) => setAddress(e.target.value)}
           />
         </Grid>
   
         <Grid item xs={12}>
         <Button variant="contained" className="custom-button" onClick={handleCheckout} disabled={isAnyFieldEmpty() || loading}
>
              {loading ? "Onaylanıyor..." : "Siparişi Onayla" }
        </Button>
   
   
         </Grid>
       </Grid>
       <CartClientPayment />
     
     </div>

     <div className="hidden lg:block">
     <div className='flex'>
      <div className="px-10">
      <Typography className="py-10" variant="h2">Sipariş Bilgileri</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ad Soyad"
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Şehir"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="İlçe"
            variant="outlined"
            fullWidth
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Mahalle"
            variant="outlined"
            fullWidth
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Telefon"
            variant="outlined"
            fullWidth
            value={telno}
            onChange={(e) => {
              const input = e.target.value;
        
              // Only allow up to 10 digits
              const cleanedInput = input.replace(/\D/g, ''); // Remove non-numeric characters
        
              if (cleanedInput.length <= 10) {
                setTelno(cleanedInput);
              }
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Adres"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" className="custom-button" onClick={handleCheckout} disabled={isAnyFieldEmpty() || loading}>
          {loading ? "Onaylanıyor..." : "Siparişi Onayla" }
       </Button>


        </Grid>
      </Grid>
      </div>
      <div className="w-full sm:w-1/2">

      <CartClientPayment />
      </div>
    </div>

     </div>
    </>
    
  );
};

export default PaymentForm;
