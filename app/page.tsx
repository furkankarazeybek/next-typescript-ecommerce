export const revalidate = 0 ;
import getProducts, { IProductParams } from "@/actions/getProducts";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import NullData from "./components/NullData";
import ProductCard from "./components/products/ProductCard";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  console.log(searchParams);
  const products = await getProducts(searchParams);


 const hasSearchTerm = searchParams?.searchTerm;
/*  const hasCategory = searchParams?.category == "Promosyon Çakmak";
 */
  if (products.length === 0) {
    return (
      <NullData title='Ürün bulumadı. Filtreden çıkmak için "Tüm Ürünler" seçeneğine tıklayın.' />
    );
  }

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const shuffledProducts = shuffleArray(products);

  return (
    <div className="p-8">
      <Container>
        {!hasSearchTerm && (
          <div>
            <HomeBanner />
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {shuffledProducts.map((product: any, index: number) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
