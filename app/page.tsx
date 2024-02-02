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


   


  if(searchParams.searchTerm === '[object Object]') 
  {
    console.log("evet")
    searchParams.searchTerm = ''

  }

    console.log("bu search params",searchParams);

  const products = await getProducts(searchParams);


 const hasSearchTerm = searchParams?.searchTerm;

 console.log(searchParams?.category)
/*  const hasCategory = searchParams?.category == "Promosyon Çakmak";
 */
  if (products.length === 0) {
    return (
      <NullData title='Ürün bulumadı. Filtreden çıkmak için "Anasayfa" seçeneğine tıklayın.' />
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
    <div className="pb-8">
        {!hasSearchTerm && (
          <div  className="p-0 m-0">
        {searchParams?.category === "Promosyon Çakmak" ? (
    <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
            <div className="mb-8 md:mb-0 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white"  style={{ WebkitTextStroke: '1px black'}}>PROMOSYON ÇAKMAK</h1>
            </div>
        </div>
    </div>
     ) : searchParams?.category === "Toptan Çakmak" ? (
         <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
             <div className="absolute inset-0 bg-black opacity-50"></div>
             <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
                 <div className="mb-8 md:mb-0 text-center z-10">
                     <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black' }}>TOPTAN ÇAKMAK</h1>
                 </div>
             </div>
         </div>
     ) : 
     searchParams?.category === 'Promosyon Kalem' ? (
      <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>     
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
              <div className="mb-8 md:mb-0 text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black' }}>PROMOSYON KALEM</h1>
              </div>
          </div>
      </div>
      ) :
      searchParams?.category === 'Promosyon Diğer' ? (
        <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
                <div className="mb-8 md:mb-0 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black' }}>PROMOSYON DİĞER</h1>
                </div>
            </div>
        </div>
        ) :

      
     (
         <HomeBanner />
     )}

        
          </div>
        )}
      <Container>
      

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 pt-10">
          {shuffledProducts.map((product: any, index: number) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
