import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss',
})
export class CardsContainerComponent {
  readonly apiService = inject(ApiService);
  productList!: Observable<Product[]>;
  setProductList(limit: number) {
    this.productList = this.apiService.getProductsList(limit);
  }
}
