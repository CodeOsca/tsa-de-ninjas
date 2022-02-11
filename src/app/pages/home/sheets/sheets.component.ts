import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: [
    './sheets.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class SheetsComponent {
  sheets:Card[] = [
    {
      title:'TIZORAX Ninja Juego de sábanas – Juego de 3 piezas de microfibra edredón y 2 fundas de almohada para hombres y mujeres',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/TIZORAX-Ninja-Juego-s%C3%A1banas-microfibra/dp/B07T4997VK/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14X124S2STANN&keywords=sabanas+ninja&qid=1644360769&s=kitchen&sprefix=sabana%2Ckitchen%2C1206&sr=1-3',
      imgUrl:'https://m.media-amazon.com/images/I/61TDRCIDYEL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'TIZORAX Juego de sábanas japonesas Ninja – Juego de edredón de microfibra de 3 piezas y 2 fundas de almohada para hombres y mujeres',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/TIZORAX-Japanese-3-Piece-Wrinkle-Resistant/dp/B07SFTCJNW/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-7',
      imgUrl:'https://m.media-amazon.com/images/I/61cs9sQrIXL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Naruto - Funda nórdica Naruto Ado (200 x 200 cm y 2 Fundas de Almohada de 63 x 63 cm), Color Blanco',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Naruto-n%C3%B3rdica-Fundas-Almohada-Blanco/dp/B094DL7359/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-5',
      imgUrl:'https://m.media-amazon.com/images/I/81E9xUbdkHS._AC_UL320_.jpg',
      product:true
    },


    {
      title:'LEGO Ninjago guerreros doble juego de sábanas',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Ninjago-guerreros-doble-s%C3%A1banas/dp/B075Y8S7JM/ref=sr_1_13?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-13',
      imgUrl:'https://m.media-amazon.com/images/I/91Z-lUHXncL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'LEGO Ninjago película tripulación poliéster Funda de edredón con Funda de Almohada, Azul, Single',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-pel%C3%ADcula-tripulaci%C3%B3n-poli%C3%A9ster-Almohada/dp/B075LMH8HJ/ref=sr_1_17?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-17',
      imgUrl:'https://m.media-amazon.com/images/I/616H6cNUT-L._AC_UL320_.jpg',
      product:true
    },


{
      title:'Lego Ninjago película Repeat diseño de impresión Ninja Set de Funda de edredón, Multicolor, Cama Individual',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-pel%C3%ADcula-impresi%C3%B3n-multicolor-individual/dp/B071HGFTN7/ref=sr_1_18?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-18',
      imgUrl:'https://m.media-amazon.com/images/I/811pQi8fQUL._AC_UL320_.jpg',
      product:true
    },


{
      title:'TIZORAX - Juego de funda de edredón para cama individual, diseño de dibujos animados Ninja Banana de 3 piezas de microfibra y 2 fundas de almohada para hombres y mujeres',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/TIZORAX-individual-animados-microfibra-almohada/dp/B08KJHGJ4D/ref=sr_1_21?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-21',
      imgUrl:'https://m.media-amazon.com/images/I/61MdCQNm8YL._AC_UL320_.jpg',
      product:true
    },


{
      title:'TIZORAX - Juego de funda de edredón de microfibra de 3 piezas de dibujos animados Ninja Piña Juego de edredón y 2 fundas de almohada para hombres y mujeres',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/TIZORAX-edred%C3%B3n-microfibra-animados-almohada/dp/B08KJKS3SM/ref=sr_1_20?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-20',
      imgUrl:'https://m.media-amazon.com/images/I/71CFdkIZk8L._AC_UL320_.jpg',
      product:true
    },



{
      title:'LEGO Ninjago - Funda de edredón para Cama Individual, Reversible, diseño de Castillo de Dos Caras con Funda de Almohada a Juego',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Ninjago-Individual-Reversible-Castillo/dp/B07M93LP6J/ref=sr_1_23?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-23',
      imgUrl:'https://m.media-amazon.com/images/I/71H8xA+gnKL._AC_UL320_.jpg',
      product:true
    },


{
      title:'TIZORAX - Juego de funda de edredón de cama doble, diseño de estrella ninja con emblema de madera de 3 piezas de microfibra y 2 fundas de almohada para hombres y mujeres',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/TIZORAX-edred%C3%B3n-estrella-microfibra-almohada/dp/B08KJDYPRN/ref=sr_1_22?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-22',
      imgUrl:'https://m.media-amazon.com/images/I/71bXCIisJ4L._AC_UL320_.jpg',
      product:true
    }

  ]

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
  ){}

  ngOnInit(): void {
    let t:string = `Sábanas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`es el momento de que dormir tranquilamente con una sábanas que estén cumplan todos tus estándares tanto en diseño como el tema`,
      slug:location.href,
      image:this.sheets[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }
}
