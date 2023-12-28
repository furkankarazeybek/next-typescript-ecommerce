import { getCurrentUser } from "@/actions/getCurrentUser";
import getProductById from "@/actions/getProductById";
import Container from "@/app/components/Container";
import { products } from "@/utils/products";
import AddRating from "./AddRating";
import ListRatings from "./ListRating";
import ProductDetails from "./ProductDetails";

interface IParams {
    productId?: string
}

const Product = async({params} : {params: IParams}) => {

    const user = await getCurrentUser();
    const product = await getProductById(params);

    if(!product) {
        return null
    }


    return (<div className="p-8">
        <Container>
            <ProductDetails product={product} />
            <div className="flex flex-col mt-20 gap-4">
              <AddRating product={product} user={user}/>
              <ListRatings product={product} />
            </div>
            
        </Container>
    </div>);
}
 
export default Product;