import { Component } from '@angular/core';
export class Item{
    name: string;
    itemPrice: number;
    quantity: number;
    url: string;
}

 const ITEMS: Item[]= [
 {name: 'Wacom Cintiq 22HD Touch', itemPrice:74975, quantity:2,url: 'http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg'},
 {name: 'Wacom Cintiq 25HD Touch', itemPrice:80000, quantity:1,url: 'http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg'},
 {name: 'Wacom Cintiq 10HD Touch', itemPrice:60000, quantity:23, url: 'http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg'}
    ];

@Component({
    selector: 'my-app',
    template: '
<div class="product">
    <table>
        <thead>
            <tr>
                <th class="cath">Назва товару:</th>
<th class="cath">Кількість:</th>
<th class="cath">Всього:</th>
</tr>
</thead>
<tbody>
    <tr>
        <th>
            <span><img class="itimage"
    src={{item.url}}> </span>
<span class="itchar">
    <ul>
        <li><h3>Wacom Cintiq 22HD Touch</h3></li>
<li><span><strong>Виробник:</strong></span><span><img class="itimpo"
    src="http://laptoplabsbd.com/wp-content/uploads/2016/01/logo-wacom.png"></span>
</li>
<li><span><strong>Колір:</strong></span>
<span>
    <svg height="50" width="50">
    <circle class="itcolor" cx="25" cy="33" r="15" stroke="gray" stroke-width="3" fill="red"/>
    </svg>
</span>
</li>
<li><span><strong>Ціна:</strong></span><span class="itrice"><p><strong>74 975 грн</strong></p></span></li>
</ul>
</span>

</th>
<th>
    <div class="box">
    <button class="btn btn-danger pluss"><strong>-</strong></button>
<span class="input-c">1</span>
<button class="btn btn-success minuss"><strong>+</strong></button>
</div>
</th>
<th>
    <div class="box">
    <span class="itrice"><p><strong>74 975 грн</strong></p></span>
<span class="itdel"> <button class="btn btn-danger"><strong>Вилучити</strong></button></span>
</div>
</th>
</tr>
</tbody>
</table>
</div>
</div>
<hr>'
})

export class AddComponent{
item=ITEMS;

    decrement(item:Item){
    item.quantity--;

    }
    increment(item:Item){
        item.quantity++;
    }
    deleteFromList(item:Item) {

    }
}

