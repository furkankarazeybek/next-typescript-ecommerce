import { getCurrentUser } from "@/actions/getCurrentUser";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import OrdersClient from "./OrdersClient";



const Orders = async() => {

    try {
        const currentUser = await getCurrentUser();
        if (currentUser === null) {
          // getCurrentUser null döndü
          console.log('Kullanıcı bulunamadı.');
        } else {
            const orders = await getOrdersByUserId(currentUser.id);
            if(!orders) 
            {
                return <NullData title="Henüz bir sipariş yok!" />
            }
        
        
            return ( 
            <div className="pt-8">
               <Container>
                   <OrdersClient orders= {orders} />
               </Container>
            </div> );

          
        }
      } catch (error) {
        // getCurrentUser fonksiyonu bir hata döndü
        console.error('Hata:', error);
      }
      



   
}
 
export default Orders;