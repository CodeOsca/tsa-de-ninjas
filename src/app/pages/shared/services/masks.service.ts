import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class MasksService {
  masks(): Card[] {
    return [

      {
        title: 'Dakine Hunter Balaclava - Gorro para Casco, Color Negro',
        subtitle: '',
        link: 'https://www.amazon.es/GripGrab-Maske-Balaclava-ciclismo-hombre/dp/B00NNHBI3A/ref=sr_1_48?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PFFELM94JCBH&keywords=mascara+ninja&qid=1644624054&sprefix=mascara+ninja+%2Caps%2C246&sr=8-48',
        imgUrl: 'https://m.media-amazon.com/images/I/71uomCx3p9S._AC_UL320_.jpg',
        product: true
      },

      {
        title: 'GripGrab Pasamontañas Térmico de Ciclismo Sotocasco Braga de Cuello Invierno Forro Polar Cabeza Hombre Mujer y Niños',
        subtitle: '',
        link: 'https://www.amazon.es/Dakine-10001508-Hunter-Balaclava/dp/B01MTXQQ8J/ref=sr_1_55?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PFFELM94JCBH&keywords=mascara+ninja&qid=1644624191&sprefix=mascara+ninja+%2Caps%2C246&sr=8-55',
        imgUrl: 'https://m.media-amazon.com/images/I/61ewYGautlL._AC_UL320_.jpg',
        product: true
      },

      {
        title: 'Happyyami Máscaras de Kabuki Japonés de Kitsune Novedad Fiesta de Disfraces de Halloween para Disfraces de Halloween Suministros para Banquetes ( Y Rojo )',
        subtitle: '',
        link: 'https://www.amazon.es/Happyyami-Disfraces-Halloween-Suministros-Banquetes/dp/B09BRHQBCB/ref=sr_1_6?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1F60T0WAK3WX5&keywords=mascara+ambu+naruto&qid=1644624354&sprefix=mascara+ambu+naruto%2Caps%2C228&sr=8-6',
        imgUrl: 'https://m.media-amazon.com/images/I/51LumusnOsL._AC_UL320_.jpg',
        product: true
      },

      {
        title: 'LHGXQ-Dp Máscara Tobi Blanca Naruto Obito Uchiha, Anime Japonés, Disfraces Fiesta, Accesorios De Disfraces, Máscara De Supervillano, Máscara Película, Cosplay,Blanco,28 * 18CM',
        subtitle: '',
        link: 'https://www.amazon.es/LHGXQ-Dp-Disfraces-Accesorios-Supervillano-Pel%C3%ADcula/dp/B09F3H71BK/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1F60T0WAK3WX5&keywords=mascara%2Bambu%2Bnaruto&qid=1644624354&sprefix=mascara%2Bambu%2Bnaruto%2Caps%2C228&sr=8-4&th=1',
        imgUrl: 'https://m.media-amazon.com/images/I/51JR04N-5yL._AC_UL320_.jpg',
        product: true
      },

      {
        title: 'pidak shop Banda roja del ninja del pueblo',
        subtitle: '',
        link: 'https://www.amazon.es/pidak-shop-Banda-ninja-pueblo/dp/B092R58VM4/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1F60T0WAK3WX5&keywords=mascara+ambu+naruto&qid=1644624354&sprefix=mascara+ambu+naruto%2Caps%2C228&sr=8-9',
        imgUrl: 'https://m.media-amazon.com/images/I/31n5WDJTOHS._AC_UL320_.jpg',
        product: true
      },



    ]
  }
}