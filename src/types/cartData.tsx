interface productCart {
    discountPercentage: number;
    discountedPrice: number;
    id: number;
    price: number;
    quantity: number;
    title: string;
    total: number;
  
  }
  
  export default interface cartData {
    discountedTotal: number;
    id: number;
    products: productCart[];
    total: number;
    totalProducts: number;
    totalQuantity: number;
    userId: number;
  }