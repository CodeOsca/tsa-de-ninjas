import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';


@Component({
  selector: 'app-custumes',
  templateUrl: './costumes.component.html',
  styleUrls: [
    './costumes.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class CostumesComponent {

  costumes:Card[] = [
    {
      title:'Rubies - Disfraz ninja dragon silver para niño, L 8-10 años (Rubies 641142-L) , color/modelo surtido',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Rubies-Disfraz-dragon-infantil-641142-L/dp/B078NJ3RP6/ref=sr_1_1?keywords=Disfraces+ninja&qid=1644534914&sr=8-1',
      imgUrl:'https://m.media-amazon.com/images/I/81N1TjuArOL._AC_UL320_.jpg',
      product:true
    },


{
      title:'https://www.amazon.es/Rubies-Disfraz-ninja-dragon-641143-L/dp/B078NFJVCQ/ref=sr_1_2?keywords=Disfraces+ninja&qid=1644534914&sr=8-2',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Rubies-Disfraz-ninja-dragon-641143-L/dp/B078NFJVCQ/ref=sr_1_2?keywords=Disfraces+ninja&qid=1644534914&sr=8-2',
      imgUrl:'https://m.media-amazon.com/images/I/71CsezmpuxL._AC_UL320_.jpg',
      product:true
    },


{
      title:'TIZORAX - Juego de funda de edredón de microfibra de 3 piezas, diseño de gato ninja',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/TIZORAX-edred%C3%B3n-microfibra-piezas-dise%C3%B1o/dp/B08KJJ38SQ/ref=sr_1_19?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IMS0E8MNN9U&keywords=sabanas+ninja&qid=1644532710&sprefix=sabanas+nin%2Caps%2C265&sr=8-19',
      imgUrl:'https://m.media-amazon.com/images/I/61-RP-WXfzL._AC_UL320_.jpg',
      product:true
    },


{
      title:'UOUL 3 Pedazos del lecho de poliéster impresión 3D 1 Cubierta del edredón 2 Fundas de Almohada de Terror Sangriento del patrón del Zombi otoño Invierno,Zombie,Double',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/UOUL-poli%C3%A9ster-impresi%C3%B3n-Cubierta-Sangriento/dp/B07Y2VX978/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IDGUJFNM3209&keywords=sabanas+zombie&qid=1644533334&s=kitchen&sprefix=sabanas+zombie%2Ckitchen%2C286&sr=1-11',
      imgUrl:'https://m.media-amazon.com/images/I/61KAU7FVgQL._AC_UL320_.jpg',
      product:true
    },


{
      title:'WIDMAN Ninja - Niños Disfraz - Grande - 158cm , color/modelo surtido',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/WIDMAN-Ninja-Ni%C3%B1os-Disfraz-Grande/dp/B003Y7JJN0/ref=sr_1_4?keywords=Disfraces+ninja&qid=1644534914&sr=8-4',
      imgUrl:'https://m.media-amazon.com/images/I/71DgAGasAdL._AC_UL320_.jpg',
      product:true
    },


{
      title:'WIDMAN Red Dragon Ninja - Niños Disfraz - Pequeño - Edad 5-7 - 128cm',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/WIDMAN-Red-Dragon-Ninja-Disfraz/dp/B019MOZNF6/ref=sr_1_5?keywords=Disfraces+ninja&qid=1644534914&sr=8-5',
      imgUrl:'https://m.media-amazon.com/images/I/7132bgSHesL._AC_UL320_.jpg',
      product:true
    },


{
      title:'WIDMANN 74527 - Disfraz de ninja para niño (talla 140)',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/WIDMANN-74527-Disfraz-ninja-talla/dp/B0067ID46G/ref=sr_1_6?keywords=Disfraces+ninja&qid=1644534914&sr=8-6',
      imgUrl:'https://m.media-amazon.com/images/I/71FUYP95kCL._AC_UL320_.jpg',
      product:true
    },

    ,


{
      title:'Ciao Ninja Fighter - Disfraz para niño',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Ciao-Ninja-Fighter-Disfraz-Talla/dp/B0823JCHL7/ref=sr_1_9?keywords=Disfraces+ninja&qid=1644534914&sr=8-9',
      imgUrl:'https://m.media-amazon.com/images/I/81yn5UZYaBL._AC_UL320_.jpg',
      product:true
    },


{
      title:"Disfraz de Ninja Rojo enmascarado para niño, infantil 3-4 años (Rubie's 882152-S)",
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Rubies-Disfraz-talla-S-882152/dp/B0013YL8Q2/ref=sr_1_11?keywords=Disfraces+ninja&qid=1644534914&sr=8-11',
      imgUrl:'https://m.media-amazon.com/images/I/81DEhdCQ4sL._AC_UL320_.jpg',
      product:true
    },

    ,


{
      title:'Ciao Disfraz infantil de Skull Ninja, para niños y adolescentes',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Ciao-Skull-Ninja-Disfraz-Infantil/dp/B0823JC8RX/ref=sr_1_12?keywords=Disfraces+ninja&qid=1644534914&sr=8-12',
      imgUrl:'https://m.media-amazon.com/images/I/81G52sf0A9L._AC_UL320_.jpg',
      product:true
    }
  ]

  clothings:Card[] = [
    {
      title:'Una Camiseta',
      subtitle:'Compralo ahora',
      link:'/ropa/camisetas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:true
    }
  ]

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
    ){}

    ngOnInit(): void {
      let t:string = `Disfraces ${this.getName}`
      this.title.setTitle(t)
      this.metaDataService.generateTags({
        title:t,
        description:`Quieres impresionar a tus amigos siendo un verdadero shinobi, pues disfrázate como uno, en esta ocasión te traemos una serie de disfraces ${this.getName} que se que vas a querer`,
        slug:location.href,
        image:this.clothings[0].imgUrl
      })
    }

  get getName(){
    return this.mainService.giveName()
  }
}
