import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
checkoutforms;
  constructor(
    private cartService:CartService,
    private formBuilder:FormBuilder,
  ) {
    this.items=this.cartService.getItems();
    this.checkoutforms=this.formBuilder.group({
      name:'',
      adress:''
    });
   }
  onSubmit(customerData){
    //Process Checkout here
    console.warn('Your order has submitted',customerData);
    this.items=this.cartService.clearCart();
    this.checkoutforms.reset();
  }

  ngOnInit() {
    this.items=this.cartService.get();
  }

}