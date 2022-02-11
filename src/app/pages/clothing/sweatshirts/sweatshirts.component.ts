import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';


@Component({
  selector: 'app-sweatshirts',
  templateUrl: './sweatshirts.component.html',
  styleUrls: [
    './sweatshirts.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class SweatshirtsComponent {
  sweatShirts:Card[] = [
    {
      title:'Una Sudaderas',
      subtitle:'Compralo ahora',
      link:'/ropa/sudaderas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  sweatShirtsHoods:Card[] = [
    {
      title:'LEGO Sudadera para Niños',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Ninjago-Jungen-Sweatshirt-Sudadera/dp/B08LZV37NH/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-3',
      imgUrl:'https://m.media-amazon.com/images/I/717dJ7pcvyS._AC_UL320_.jpg',
      product:true
    },

    {
      title:'LEGO Sudadera para Niños',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Ninjago-Jungen-Sweatshirt-Sudadera/dp/B08M1XFNVZ/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-4',
      imgUrl:'https://m.media-amazon.com/images/I/8104NkHdA3L._AC_UL320_.jpg',
      product:true
    },

    {
      title:"Metal Gear Solid Cyborg Ninja Men's Hooded Sweatshirt",
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Metal-Solid-Cyborg-Hooded-Sweatshirt/dp/B07P9RSS3S/ref=sr_1_19?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-19',
      imgUrl:'https://m.media-amazon.com/images/I/61nT9pjqRqL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Urban Backwoods Ninjas of IGA Sudadera Suéter para Niños Niñas Pullover Schwarz',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Urban-Backwoods-Ninjas-Sudadera-Pullover/dp/B07K1NN3DD/ref=sr_1_21?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-21',
      imgUrl:'https://m.media-amazon.com/images/I/51WtaCm9EpL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'LEGO Ninjago Jungen Hoodie Sudadera con Capucha para Niños',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Ninjago-Jungen-Sudadera-Capucha/dp/B08M21JFF8/ref=sr_1_23?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-23',
      imgUrl:'https://m.media-amazon.com/images/I/71n7zaN+gKS._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Desconocido Revenge Is Sweet Ninja Pixel Art Sudadera con Capucha Unisex',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Desconocido-Revenge-Sudadera-Capucha-X-Small/dp/B089MBR73G/ref=sr_1_26?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-26',
      imgUrl:'https://m.media-amazon.com/images/I/61Bu8tcO8JL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Desconocido Revenge Is Sweet Ninja Pixel Art Sudadera con Capucha Unisex',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Desconocido-Revenge-Sudadera-Capucha-Unisex/dp/B089MB8CQW/ref=sr_1_28?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-28',
      imgUrl:'https://m.media-amazon.com/images/I/516EsM3TWWL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Shirtzshop - Sudadera con Capucha, diseño con Texto en alemán Weil Multitasking Ninja',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Shirtzshop-Sudadera-capucha-dise%C3%B1o-Multitasking/dp/B07GDMFFSB/ref=sr_1_30?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-30',
      imgUrl:'https://m.media-amazon.com/images/I/61P-at4SnCL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Desconocido Sudadera con Capucha Unisex de Ninja Dad, Padre, Padre, Padre, Padre, Abuelo, Luchador, Guerra, Soldado',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Sudadera-capucha-unisex-luchador-soldado/dp/B07KPL1P4Z/ref=sr_1_32?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-32',
      imgUrl:'https://m.media-amazon.com/images/I/51cP6RSNXkL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'LEGO Wear Ninjago Silas - Sudadera Unisex para niños',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Wear-Sudadera-deportiva-Capucha/dp/B005IF0LQA/ref=sr_1_36?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20GZ9JLLMJ1WY&keywords=sudaderas+ninja&qid=1644538129&sprefix=sudaderas+ninjas%2Caps%2C270&sr=8-36',
      imgUrl:'https://m.media-amazon.com/images/I/81-Hm7T+z6L._AC_UL320_.jpg',
      product:true
    },

    {
      title:'MELKEVDY Naruto Sudaderas con Capucha Hermanos Uchiha Itachi Uchiha Sasuke Pullover Unisex Harajuku Chándal',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Sudaderas-Capucha-Hermanos-Pullover-Harajuku/dp/B09NY2W6FH/ref=sxin_14_slsr_d_i_fsnewarrivals_fa_0_B09NY2W6FH?cv_ct_cx=sudaderas+naruto&keywords=sudaderas+naruto&pd_rd_i=B09NY2W6FH&pd_rd_r=bedde0fe-6fdb-4a63-9e89-66a6aaa1b657&pd_rd_w=lR9bq&pd_rd_wg=fJA60&pf_rd_p=d2738a78-1ce2-4cfa-a149-885d95e8b159&pf_rd_r=HYA0STD30WC3JNBJRRW5&psc=1&qid=1644538560&sprefix=Sudaderas+narut%2Caps%2C1581&sr=1-1-5b2ee5ec-0735-4782-9f3a-9d21a55133d0',
      imgUrl:'https://m.media-amazon.com/images/I/61VQhA3Fs+L._AC_UL320_.jpg',
      product:true
    },

    {
      title:'aige Unisex Naruto 3D Print Pullover Hoodie Sudadera Anime Naruto Cosplay Disfraz para Hombres Mujeres Niños y Niñas',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Baige-Pullover-Sudadera-Cosplay-Disfraz/dp/B07X7MY5S4/ref=sr_1_3?keywords=sudaderas%2Bnaruto&qid=1644538560&sprefix=Sudaderas%2Bnarut%2Caps%2C1581&sr=8-3&th=1&psc=1',
      imgUrl:'https://m.media-amazon.com/images/I/71KO953uPOL._AC_UL320_.jpg',
      product:true
    },
  ]

  constructor(
      private mainService:MainService,
      private metaDataService: MetaDataService,
      private title:Title
    ){}

  ngOnInit(): void {
    let t:string = `Sudaderas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`Hoy te traemos las mejores sudaderas ${this.getName} que puedes encontrar en todo del mercado para ${this.getName.slice(3)}, muestra tu look con lo mejor de lo mejor`,
      slug:location.href,
      image:this.sweatShirts[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }

}
