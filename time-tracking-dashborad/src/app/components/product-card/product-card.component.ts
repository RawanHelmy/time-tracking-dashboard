import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  backgroundColors = [
    '#FF8B64',
    '#55C2E6',
    '#FF5E7D',
    '#FF8B64',
    '#55C2E6',
    '#4BCF82',
    '#7335D2',
    '#F1C75B',
    '#4BCF82',
    '#7335D2',
    '#FF8B64',
    '#55C2E6',
    '#FF5E7D',
    '#FF8B64',
    '#55C2E6',
  ];
}
