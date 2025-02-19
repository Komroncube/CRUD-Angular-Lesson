import { HttpClient } from "@angular/common/http";
import { ProductRequest, ProductRespone } from "../modules/product.model";
import { Injectable } from '@angular/core';
import { AppModule } from "../app.module";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
    providedIn: AppModule
})
export class ProductService {
    constructor(private http: HttpClient) {
        
    }
    private apiAddress ="https://localhost:7083/api/Products/"
    getProducts() {
        return this.http.get<ProductRespone[]>(this.apiAddress+"GetAllProduct");
    }
    getAllProducts() {
        return this.http.get<ProductRespone[]>(this.apiAddress + 'GetAllProduct')
            .pipe(
                catchError((error: any) => {
                    console.error('Error fetching products:', error);
                    throw error;
                })
            );
    }

    getProduct(id: number) {
        return this.http.get<ProductRespone>(this.apiAddress + 'GetProductById/' + id);
    }
    addProduct(product: ProductRequest) {
        return this.http.post<ProductRespone>(this.apiAddress + 'CreateProduct', product);
    }
    updateProduct(id: number, product: ProductRequest) {
        return this.http.put<ProductRespone>(this.apiAddress + 'UpdateProduct' + id, product);
    }
    deleteProduct(id: number) {
        return this.http.delete<boolean>(this.apiAddress + 'DeleteProduct' + id);
    }
}