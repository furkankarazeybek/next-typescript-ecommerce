'use client'

import { Order, User } from "@prisma/client";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/products/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import toast from "react-hot-toast";
import { useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import moment from "moment";

interface ManageOrdersClientProps{
    orders: ExtendedOrder[]
}

type ExtendedOrder = Order & {
    user: User
}



const ManageOrdersClient:React.FC<ManageOrdersClientProps> = ({orders}) => {

    const router = useRouter();

    let rows: any = [];
    if(orders) {
        rows = orders.map((order) => {
            return {
            id: order.id,
            customer: order.user.name,
            amount: formatPrice(order.amount / 100),
            paymentStatus: order.status,
            date: moment(order.createDate).fromNow(),
            deliveryStatus : order.deliveryStatus              
            }
        }
      )
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 100},
        {field: 'customer', headerName: 'Müşteri Adı', width: 200},
        {field: 'amount', headerName: 'Toplam Tutar(TL)', width: 130, renderCell: (params) => {
            return (<div className="font-bold text-slate-800">{params.row.amount}</div>)
        }},
        {field: "paymentStatus", headerName: "Ödeme Durumu", width: 170, renderCell: (params) => {
            return (
            <div>
                {params.row.paymentStatus === 'pending' ? ( 
                <Status text="Ödeme Bekliyor" icon={MdAccessTimeFilled} bg="bg-slate-200" color="text-stale-700" /> ) : 
                params.row.paymentStatus === 'accepted'   ? 
                <Status text="Ödeme Onaylandı" icon={MdDone} bg="bg-green-200" color="text-green-700" />
            : <></> }
            </div>)
        }},
        {field: "deliveryStatus", headerName: "Sipariş Durumu", width: 170,  renderCell: (params) => {
            return (
            <div>
                {params.row.deliveryStatus === 'pending' ? ( 
                <Status text="Sipariş Alındı" icon={MdAccessTimeFilled} bg="bg-slate-200" color="text-stale-700" /> ) : 
                params.row.deliveryStatus === 'dispatched'  ? ( 
                <Status text="Sipariş Tamamlandı" icon={MdDeliveryDining} bg="bg-purple-200" color="text-purple-700" />) : params.row.deliveryStatus === 'completed'  ? 
                <Status text="Teslim Edildi" icon={MdDone} bg="bg-green-200" color="text-green-700" />
            : <></> }
            </div>)
        }},
        {
            field: 'date',
            headerName: "Date",
            width: 130
        },
        {field: "action", 
        headerName: "İşlem", 
        width: 200, 
        renderCell: (params) => {
            return (
            <div className="flex justify-between gap-4 w-full">
                <ActionBtn icon={MdDeliveryDining}  onClick={() => {
                    handleDispatch(params.row.id);
                }} />
                <ActionBtn icon={MdDone}  onClick={() => {
                    handleDeliver(params.row.id);
                }} />
                <ActionBtn icon={MdRemoveRedEye}  onClick={() => {
                    router.push(`/order/${params.row.id}`);
                }} />

            </div>
            )
        } },


    ];


    const handleDispatch = useCallback((id: string) => {
        axios.put('/api/order', {
            id,
            deliveryStatus: 'dispatched'
        }).then((res) => {
            toast.success("Sipariş Tamamlandı!");
            router.push('/admin/manage-orders');
        }).catch((error) => {
            console.error("Hata oluştu:", error);
           
        });
    }, []);

    const handleDeliver = useCallback((id: string) => {
        axios.put('/api/order', {
            id,
            status: 'accepted'
        }).then((res) => {
            toast.success("Ödeme Onaylandı!");
            router.push('/admin/manage-orders');
        }).catch((error) => {
            console.error("Hata oluştu:", error);
           
        });
    }, []);
    

    

    return (
    <div className="max-w-[1150px] m-auto text-xl">

        <div className="mb-4 mt-8">
            <Heading title="Siparişleri Yönet" center/>
        </div>

        <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        </div>
    </div> 
    
    );
}
 
export default ManageOrdersClient;