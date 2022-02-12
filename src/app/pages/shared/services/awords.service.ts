import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
    providedIn: 'root'
})
export class AwordsService {

    awords: Card[] = [
        {
            title: 'WIDMAN Katana Japonesa Corta con Funda Cualquier día , color/modelo surtido',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/710kyf85kmL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/WIDMAN-Katana-Japonesa-Corta-Cualquier/dp/B004X5I6MM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-1'
        },

        {
            title: 'Katara 1771 - Espada de Espuma Gomaespuma de Ninja Niños 55cm de Largo, Negro',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/71g+-KMSIHL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Katara-1771-Espada-Espuma-Gomaespuma/dp/B078D7MH9L/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-2'
        },

        {
            title: "Juego Marca Rubie'S de Armas de Deadpool para Adulto - Talla única",
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/81uTDZuQL+L._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Juego-Marca-RubieS-Deadpool-Adulto/dp/B00MWQLODW/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-4'
        },

        {
            title: 'Liontouch 29500LT Espada de Juguete de Espuma samurái para niños | Forma Parte de la línea de Disfraces para niños',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/81xX1ULUf0L._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Liontouch-29500LT-Juguete-samur%C3%A1i-Disfraces/dp/B07J6QKYNH/ref=sr_1_6?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-6'
        },

        {
            title: 'My Other Me Me Me- Ninja Armas Espada, Multicolor (206011)',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/414eKr5EFuL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/My-Other-Me-Multicolor-206011/dp/B07CNR8TQ7/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622013&sprefix=espada+ninjas%2Caps%2C706&sr=8-7'
        },
    ]


    awords2: Card[] = [

        {
            title: 'Liontouch 50000LT Espada de Juguete de Espuma vikinga para niños, roja | Forma Parte de la línea de Disfraces para niños',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/81+eR2h-gqL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Lion-4450000-Espada-Vikingo-Colour/dp/B010ZZ87ZY/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622665&sprefix=espada+ninjas%2Caps%2C706&sr=8-11'
        },

        {
            title: "Rubie's - Espada de caballero o rey medieval, accesorio disfraz (Rubie's 376)",
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/51RDEgtDuXL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Rubies-RUB376ACC-Espada-medieval-376/dp/B000H3UIEI/ref=sr_1_16?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622665&sprefix=espada+ninjas%2Caps%2C706&sr=8-16'
        },

        {
            title: 'Boland 00696 Piratas Espada, unisex de niños, 37 cm',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/51wWnikgShL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/BOLAND-00696-Piratas-Espada-unisex-ni%C3%B1os/dp/B072F841BJ/ref=sr_1_17?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622665&sprefix=espada+ninjas%2Caps%2C706&sr=8-17'
        },

        {
            title: "Disfraz para adulto , color/modelo surtido",
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/71diS2L+qjL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Sancto-2728Q-Disfraz-para-adulto/dp/B008P947AM/ref=sr_1_18?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622665&sprefix=espada+ninjas%2Caps%2C706&sr=8-18'
        },

        {
            title: 'Viving Disfraces Viving 204819 Ninja Set (42 cm, Talla única)',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/71QG+5UwOxL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Viving-Disfraces-204819-Ninja-Talla/dp/B071VK4T3Z/ref=sr_1_22?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622665&sprefix=espada+ninjas%2Caps%2C706&sr=8-22'
        },

        {
            title: 'Boland 00659 - Espada Pirata con Vaina, Aprox. 52 cm',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/51xBNSUnI5L._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/Boland-00659-Pirata-Espada-aprox/dp/B010NRV6QQ/ref=sr_1_27?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=309TD01PI49YZ&keywords=espada+ninja&qid=1644622665&sprefix=espada+ninjas%2Caps%2C706&sr=8-27'
        },

        {
            title: 'DEPICE w-boj - Bokken de Entrenamiento (Madera de Roble japonés)',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/71h943RxFpL._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/DEPICE-w-boj-Bokken-entrenamiento-japon%C3%A9s/dp/B00766X5E4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NUVV26LPCFF2&keywords=espada+de+bambu&qid=1644623356&sprefix=espadas+de+ambu%2Caps%2C845&sr=8-1'
        },

        {
            title: 'DEPICE W-BOPG Bokken, Unisex Adulto, Naturaleza, Uni',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/618VZSItc-L._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/DEPICE-W-BOPG-Bokken-Unisex-Naturaleza/dp/B08ZDNYYK2/ref=sr_1_27?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NUVV26LPCFF2&keywords=espada+de+bambu&qid=1644623356&sprefix=espadas+de+ambu%2Caps%2C845&sr=8-27'
        },

        {
            title: 'DEPICE Waffe Arma, Unisex Adulto',
            subtitle: '',
            imgUrl: 'https://m.media-amazon.com/images/I/618VZSItc-L._AC_UL320_.jpg',
            product: true,
            link: 'https://www.amazon.es/DEPICE-Waffe-Unisex-Adulto-Naturaleza/dp/B00WRBVWWK/ref=sr_1_28?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NUVV26LPCFF2&keywords=espada+de+bambu&qid=1644623356&sprefix=espadas+de+ambu%2Caps%2C845&sr=8-28'
        }
    ]
}