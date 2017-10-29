import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Observable } from 'rxjs/Observable';
import { Order } from 'app/order/order.model';
import { HttpClient } from '@angular/common/http';

import { MEAT_API } from '../app.api';
import { LoginService } from 'app/security/login/login.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService) { }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    DecreaseQty(item: CartItem) {
        this.cartService.DecreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    clear() {
        this.cartService.clear();
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string> {

        let headers = new HttpHeaders();

        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }

        return this.http
            .post<Order>(`${MEAT_API}/orders`, order, { headers: headers })
            .map(orderResult => orderResult.id);
    }
}
