export interface ProductRespone {
    id: number;
    productName: string;
    category: string;
    condition: string;
    price: number;
    comment: string;
    date: string;
}
export interface ProductRequest {
    productName: string;
    category: string;
    condition: string;
    price: number;
    comment: string;
    date: string;
}