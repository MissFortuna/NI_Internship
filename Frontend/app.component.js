"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'product',
            template: '
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

            <hr>
        }),'
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map