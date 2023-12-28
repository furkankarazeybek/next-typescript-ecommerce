import { getCurrentUser } from "@/actions/getCurrentUser";
import getOrders from "@/actions/getOrders";
import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import ManageOrdersClient from "./ManageOrdersClient";



const ManageOrders = async() => {

    const orders = await getOrders();
    const currentUser = await getCurrentUser();

    if(!currentUser || currentUser.role !== 'ADMIN') 
    {
        return <NullData title="Yetkiniz yok !" />
    }

    return ( 
    <div className="pt-8">
       <Container>
           <ManageOrdersClient orders= {orders} />
       </Container>
    </div> );
}
 
export default ManageOrders;