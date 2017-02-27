
import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
//import {ProductService} from "./product.service";

@Component({
    selector:'ic-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',

})

export class ProductListComponent implements OnInit{
    pageHeader: string = "Our Menu";
    errorMessage: string;
    products:IProduct[] = [
        {
            "productName": "The Regular Idli (2pcs)",
            "description": "Fresh, soft and fluffy idlies served with sambhar, and two chutneys and special podi.",
            "price": 4.00,
            "imageUrl": "../app/assets/regular_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Raagi Idli (2pcs)",
            "description": "Millet idlies, prepared for all the health freaks and also a diabetic friendly Idli.",
            "price": 5.00,
            "imageUrl": "../app/assets/raagi_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Rawa idli (2pcs)",
            "description": "Healthy semolina idlies prepared with a seasoned batter and fresh yogurt.",
            "price": 6.00,
            "imageUrl": "../app/assets/rawa_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Butter Podi Idli (3pcs)",
            "description": "A hot favourite! Fresh idlies, tossed in creamy butter, home- made Idli milagai podi.",
            "price": 10.00,
            "imageUrl": "../app/assets/b_podi_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Idli Upuma (3pcs)",
            "description": "Idlies crumbled and tossed with chopped onions, turmeric, salt, chillies, curry leaves, urad dhal and mustard.",
            "price": 10.00,
            "imageUrl": "../app/assets/upuma_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Manchurian Idli (3pcs)",
            "description": "Our take on Chinese fusion, idlies sliced, deep fried and tossed in a special sauce with sliced onions,capsicum and spring onions. Crunchy, salty, sweet all at one go, a crowd pleaser!",
            "price": 10.00,
            "imageUrl": "../app/assets/manchu_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Masala  Idli (3pcs)",
            "description": "Special soft idlies that comes with a sprinkling of vegetables tossed in a dash of mild spices.",
            "price": 10.00,
            "imageUrl": "../app/assets/masala_i_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Taalicha Idli (3pcs)",
            "description": "Idlies, cubed and tossed lightly in a tadka of mustard, ried chillies and curry leaves.",
            "price": 10.00,
            "imageUrl": "../app/assets/taalicha_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Karuvepillai (Curry leaf) Idli (3pcs)",
            "description": "Another favourite! Fragrant, fresh idlies tossed in sesame oil, special home- made curry leaf podi.",
            "price": 10.00,
            "imageUrl": "../app/assets/karuvep_icon.png",
            "category":"Idli"
        },
        {

            "productName": "Sambhar Idli (3pcs)",
            "description": "Fresh idlies served in bowl, dunked in hot delicious sambhar and a  dollop of home- made ghee.",
            "price": 10.00,
            "imageUrl": "../app/assets/mini_sambhar.png",
            "category":"Idli"
        },
        {

            "productName": "Mini Sambhar Idlis",
            "description": "Soft and fluffy mini idlis served in a bowl of sambhar, and a dollop of home-made ghee.",
            "price": 8.00,
            "imageUrl": "../app/assets/mini_sambhar.png",
            "category":"Mini"
        },
        {

            "productName": "Mini Coconut Idlis",
            "description": "Dessert  idlis, tossed in butter, condensed milk, grated coconut, and flavoured with green cardamomand finally garnished with chopped nuts.",
            "price": 8.00,
            "imageUrl": "../app/assets/mini_coco.png",
            "category":"Mini"
        },
        {

            "productName": "Mini Curd Idlis",
            "description": "idlis served in a bowl of cool yogurt, tempered with mustard seeds, ginger, hing and curry leaves.",
            "price": 10.00,
            "imageUrl": "../app/assets/mini_curd.png",
            "category":"Mini"
        },
        {

            "productName": "Mini Onion Idlis",
            "description": "Mini idlis, sautéed in sesame oil with mustard, finely chopped onions, cury leaves, green chillies and a generous coating of Idli podi.",
            "price": 10.00,
            "imageUrl": "../app/assets/mini_onion.png",
            "category":"Mini"
        },
        {

            "productName": "Veetu Dosai (Regular)",
            "description": "A plain crepe prepared with rice and urad dhal batter.",
            "price": 5.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Plain Uthapam",
            "description": "Unlike the crispy dosai the uthapam is thicker and tastes just as good as the dosai.",
            "price": 5.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Raagi Dosai",
            "description": "A healthy dosai prepared with Millets.",
            "price": 6.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Podi Dosai",
            "description": "Dosai prepared with a sprinkling of our flavourful home made idli podi.",
            "price": 6.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Onion Dosai",
            "description": "Dosai prepared with a generous sprinkling of finely chopped onions.",
            "price": 6.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Ghee Dosai",
            "description": "A plain crepe prepared with rice and urad dhal batter. Spread with home made ghee.",
            "price": 7.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Butter Dosai",
            "description": "A plain crepe prepared with rice and urad dhal batter. Spread with butter.",
            "price": 7.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Masala Dosai",
            "description": "A crispy dosai, filled with a spicy potato masala.",
            "price": 7.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Tomato Onion Uthapam",
            "description": "Uthapam sprinkled with tomatoes and onions.",
            "price": 7.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Butter Podi Uthapam",
            "description": "Uthapam sprinkled with our home made podi and butter.",
            "price": 8.00,
            "imageUrl": "",
            "category":"Dosai"
        },
        {

            "productName": "Variety Idli Set (3/4 persons)",
            "description": "Comes with 4 regular idlis + 3 rawa idlis + 3 masala idlis + 2 butter idlis.",
            "price": 30.00,
            "imageUrl": "../app/assets/idli_variety_1.png",
            "category":"Sets"
        },
        {

            "productName": "Idli Cafe Special Family Set (7/8 persons)",
            "description": "Comes with 4 regular idlis + 4 rawa idlis + 4 butter idlis + 2 portions idli upuma + 2 tomato onion uthapam + tea  or coffee served by pot.",
            "price": 30.00,
            "imageUrl": "../app/assets/idli_variety_2.png",
            "category":"Sets"
        },
        {

            "productName": "Bru Coffee",
            "description": "",
            "price": 3.00,
            "imageUrl": "",
            "category":"Drinks"
        },
        {

            "productName": "Madras Tea",
            "description": "",
            "price": 3.00,
            "imageUrl": "",
            "category":"Drinks"
        },
        {

            "productName": "Masala Tea",
            "description": "",
            "price": 4.00,
            "imageUrl": "",
            "category":"Drinks"
        },
        {

            "productName": "Panankalkandu paal (palm sugar, spices & milk)",
            "description": "",
            "price": 4.00,
            "imageUrl": "",
            "category":"Drinks"
        },
        {

            "productName": "Fresh Milk",
            "description": "",
            "price": 3.00,
            "imageUrl": "",
            "category":"Drinks"
        }

    ];

    /*constructor(private _productService: ProductService){

    }
*/
    // OnInit lifecycle hook provides a place to perform any component initialization
    ngOnInit():void{
      /* this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);*/
    }

}