import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: [
  './shoes.component.scss',
    '../../shared/scss/grid-section-card.scss'
  
  ]
})
export class ShoesComponent  {

  shoes:Card[] = [
    {
      title:'Artes Marciales Ninja Exterior Tobillo Longitud Tabi Botas',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Artes-Marciales-Exterior-Altura-Tobillo/dp/B003CSMXUM/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-5',
      imgUrl:'https://m.media-amazon.com/images/I/713t7gN+IYS._AC_UL320_.jpg',
      product:true
    },



{
      title:'Wacoku, Tabi de ninja para práctica al aire libre, altura media',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Artes-Marciales-Ninja-Exterior-Largo/dp/B003CMBFWU/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-7',
      imgUrl:'https://m.media-amazon.com/images/I/51rpjpFhK7S._AC_UL320_.jpg',
      product:true
    },



{
      title:'Playwell Ninja de salón Sujeto DE Ante Suela Sujeto Botas',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Playwell-Martial-Interior-Calcetines-Zapatos/dp/B08BG6GMFM/ref=sr_1_17?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-17',
      imgUrl:'https://m.media-amazon.com/images/I/51408jBqJpL._AC_UL320_.jpg',
      product:true
    },


{
      title:'Blitz Outdoor - Botas Tabi Unisex adulto',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Blitz-Outdoor-Tabi-Botas-UK/dp/B0842SRX83/ref=sr_1_47?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GX4EAIKPU9KN&keywords=zapatos+ninja&qid=1644535915&sprefix=zapatos+ninja%2Caps%2C491&sr=8-47',
      imgUrl:'https://m.media-amazon.com/images/I/51QgbN3kBrL._AC_UL320_.jpg',
      product:true
    },


{
      title:'Artes Marciales Ninja Exterior Tobillo Longitud Tabi Botas',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Artes-Marciales-Exterior-Altura-Tobillo/dp/B003CSMXUM/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=39O12P4ITKDJV&keywords=zapatos+de+ninja&qid=1644536226&sprefix=zapatos+de+ninja%2Caps%2C576&sr=8-9',
      imgUrl:'https://m.media-amazon.com/images/I/713t7gN+IYS._AC_UL320_.jpg',
      product:true
    }  ]

  shoes2:Card[] = [
      {
        title:"NLJ-lug Natsume's Book of Friends Zapatos De Anime Unisex Zapatos De Lona De Anime Zapatillas con Estampado De Personajes De Anime",
        subtitle:'Compralo ahora',
        link:'https://www.amazon.es/NLJ-lug-Natsumes-Friends-Zapatos-Cl%C3%A1sico%EF%BC%8C41/dp/B08L538WTN/ref=sr_1_23?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2WIZS8IB8ZQZK&keywords=zapatos+naruto&qid=1644536270&sprefix=zapatos+naruto%2Caps%2C238&sr=8-23',
        imgUrl:'https://m.media-amazon.com/images/I/61ESEv7FUjL._AC_UL320_.jpg',
        product:true
      }
    ]

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
    ){}

    ngOnInit(): void {
      let t:string = `Zapatos ${this.getName}`
      this.title.setTitle(t)
      this.metaDataService.generateTags({
        title:t,
        description:`Sigilo es muy importante, para ello es necesario tener el calzado apropiado, y en esta oportunidad eso es lo que te traemos, el mejor calzado ${this.getName.replace('s','')}`,
        slug:location.href,
        image:this.shoes[0].imgUrl
      })
    }

  get getName(){
    return this.mainService.giveName()
  }

}
