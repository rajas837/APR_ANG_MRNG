import { Component, OnInit, Inject } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal}', 'h4{color:tomato}']
    styleUrls: ['./product.component.css'],
    styles: [
      `.online{
        background-color: #d4edda;
      }`
    ]
})

export class ProductComponent implements OnInit {
    title: string = 'Product Filter';
    mainHeading: string = '*****Products Page*****';
    showTable: boolean = true;
    showImage: boolean = false;
    userText: string ;
    imageWidth: number = 50;
    serverstatus: string = 'offline';

    constructor(private productService: ProductService ) {
      this.serverstatus = Math.random() > 0.5 ? 'Online' : 'Offline';
      this.showImage = true;
    }
    products: IProduct[];

    ngOnInit(): void {
      this.products = this.productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getColor() {
      return this.serverstatus === 'Online' ? 'green' : 'red';
    }

    onDataRecive(message: string): void {
        this.mainHeading = '*****Products Page*****' + message;
    }
}
