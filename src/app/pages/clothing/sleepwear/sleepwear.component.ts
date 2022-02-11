import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-sleepwear',
  templateUrl: './sleepwear.component.html',
  styleUrls: [
    './sleepwear.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class SleepwearComponent {
  sleepwears:Card[] = [
    {
      title:"Azeeda 5-6 Años 'Ninja' Juegos de Pijamas para Niños/Pijama (KP00065450)",
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Azeeda-Juegos-Pijamas-Pijama-KP00065450/dp/B092K8FHTS/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3MAJX6BMKKPY8&keywords=pijamas+ninja&qid=1644537854&sprefix=pijamas+ninjas%2Caps%2C418&sr=8-3',
      imgUrl:'https://m.media-amazon.com/images/I/51QyPXpGdXL._AC_UL320_.jpg',
      product:true
    },

    {
      title:"Simple Joys by Carter's Conjunto de Pijama de Forro Polar de 4 Piezas Niños",
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Simple-Joys-Carters-Polyester-Construction/dp/B07MY1LWD6/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3MAJX6BMKKPY8&keywords=pijamas+ninja&qid=1644537854&sprefix=pijamas+ninjas%2Caps%2C418&sr=8-5',
      imgUrl:'https://m.media-amazon.com/images/I/81rohMAmIHL._MCnd_AC_UL320_.jpg',
      product:true
    },


{
      title:'LEGO Ninjago Cm Pyjama Set Conjuntos de Pijama para Niños',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/LEGO-Ninjago-Conjuntos-Melange-Fabricante/dp/B07MLJ9L6F/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3MAJX6BMKKPY8&keywords=pijamas+ninja&qid=1644537854&sprefix=pijamas+ninjas%2Caps%2C418&sr=8-7',
      imgUrl:'https://m.media-amazon.com/images/I/81agJVBSggL._AC_UL320_.jpg',
      product:true
    },


{
      title:'Lego Ninjago - Pijama para Niños - Lego Ninjago - Ajuste Ceñido',
      subtitle:'Compralo ahora',
      link:'amazon.es/Lego-Ninjago-Pijama-Ajuste-Ceñido/dp/B0749RKFD4/ref=sr_1_14?__mk_es_ES=ÅMÅŽÕÑ&crid=3MAJX6BMKKPY8&keywords=pijamas+ninja&qid=1644537854&sprefix=pijamas+ninjas%2Caps%2C418&sr=8-14',
      imgUrl:'https://m.media-amazon.com/images/I/91g-ATYoBOL._AC_UL320_.jpg',
      product:true
    },


{
      title:'My Other Me Pijama Lady Bug Disfraz Disfraces',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Disfraz-Pijama-Miraculous-Ladybug-peluca/dp/B077BT4K9N/ref=sr_1_47?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3MAJX6BMKKPY8&keywords=pijamas+ninja&qid=1644537854&sprefix=pijamas+ninjas%2Caps%2C418&sr=8-47',
      imgUrl:'https://m.media-amazon.com/images/I/81u4wBgQOxL._AC_UL320_.jpg',
      product:true
    },


{
      title:'',
      subtitle:'Compralo ahora',
      link:'',
      imgUrl:'',
      product:true
    },


{
      title:'',
      subtitle:'Compralo ahora',
      link:'',
      imgUrl:'',
      product:true
    },


{
      title:'',
      subtitle:'Compralo ahora',
      link:'',
      imgUrl:'',
      product:true
    }

  ]

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
  ){}

  ngOnInit(): void {
    let t:string = `Pijamas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`La tela suave del pijama ${this.getName.slice(3).replace('s','')} en definitiva te gustara, lo mejor en pijamas para adquirir mucho sueño dormir más`,
      slug:location.href,
      image:this.sleepwears[0].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }
}
