export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

// we only create a class only if we want to define some functionality
// for strong typing it is enough to simply define an interface
