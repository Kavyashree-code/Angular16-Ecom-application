import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:{
        id:number,
        name: string,
        description: string,
        brand: string,
        gender: string,
        category: string,
        size: string[],
        color: string[],
        price: number,
        discountedPrice?:number,
        is_in_inventory: boolean,
        items_left: number,
        imageUrl: string
  };
}
