import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  get shoes(): Card[] {
    return [
      {
        title: 'Artes Marciales Ninja Exterior',
        subtitle: 'Tobillo Longitud Tabi Botas',
        link: 'https://www.amazon.es/Artes-Marciales-Exterior-Altura-Tobillo/dp/B003CSMXUM/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-5',
        imgUrl: 'https://m.media-amazon.com/images/I/713t7gN+IYS._AC_UL320_.jpg',
        product: true
      },



      {
        title: 'Wacoku, Tabi de ninja para práctica al aire libre, altura media',
        subtitle: 'Compralo ahora',
        link: 'https://www.amazon.es/Artes-Marciales-Ninja-Exterior-Largo/dp/B003CMBFWU/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-7',
        imgUrl: 'https://m.media-amazon.com/images/I/51rpjpFhK7S._AC_UL320_.jpg',
        product: true
      },



      {
        title: 'Playwell Ninja de salón',
        subtitle: 'Sujeto DE Ante Suela Sujeto Botas',
        link: 'https://www.amazon.es/Playwell-Martial-Interior-Calcetines-Zapatos/dp/B08BG6GMFM/ref=sr_1_17?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-17',
        imgUrl: 'https://m.media-amazon.com/images/I/51408jBqJpL._AC_UL320_.jpg',
        product: true
      },


      {
        title: 'Blitz Outdoor',
        subtitle: 'Botas Tabi Unisex adulto',
        link: 'https://www.amazon.es/Blitz-Outdoor-Tabi-Botas-UK/dp/B0842SRX83/ref=sr_1_47?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-47',
        imgUrl: 'https://m.media-amazon.com/images/I/51QgbN3kBrL._AC_UL320_.jpg',
        product: true
      },


      {
        title: 'Artes Marciales Ninja Exterior',
        subtitle: 'Tobillo Longitud Tabi Botas',
        link: 'https://www.amazon.es/Artes-Marciales-Exterior-Altura-Tobillo/dp/B003CSMXUM/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=39O12P4ITKDJV&keywords=zapatos+de+ninja&qid=1644536226&sprefix=zapatos+de+ninja%2Caps%2C576&sr=8-9',
        imgUrl: 'https://m.media-amazon.com/images/I/713t7gN+IYS._AC_UL320_.jpg',
        product: true
      }]
  }
}