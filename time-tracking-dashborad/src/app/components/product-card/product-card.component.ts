import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
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
    '#7335D2',
  ];
}
