import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {
items = [];
addToCart(product)
{
  this.items.push(product);
}
get(){
  return this.items;
}

ClearCart(){
  this.items = [];
  return this.items;
}
  constructor() { }

}