import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../shared/services/meta-data.service';
import { MainService } from '../shared/services/main.service'; 
import { Card } from '../shared/interfaces/card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.scss',
    '../shared/scss/grid-section-card.scss'
  ]
})
export class HomePageComponent {
  clothings:Card[] = [
    {
      title:'Sudaderas',
      subtitle:'Compralo ahora',
      content:'No solo te cubrirán del sol, si no que te harán lucir de una forma espectacula, Porque así son estas sudaderas',
      link:'/ropa/sudaderas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Camisetas',
      subtitle:'Compralo ahora',
      content:'Por más cambios que sufra la moda actual, estas camisetas siempre relucirán',
      link:'/ropa/camisetas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Zapatos',
      subtitle:'Compralo ahora',
      content:'Para todo camino y lucir genial, mejor que estos zapatos no vas a encontrar nada',
      link:'/ropa/zapatos',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Pijamas',
      subtitle:'Compralo ahora',
      content:'Dormir con tranquilidad y con ganas de luchar, eso es lo que pasa cuando usas estas pijamas',
      link:'/ropa/pijamas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Disfraces',
      subtitle:'Compralo ahora',
      content:'La fantasía es traída a la vida, cuando se trata de un disfraz de ninja muy realista',
      link:'/ropa/disfraces',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    }
  ]

  accessories:Card[] = [
    {
      title:'Máscaras',
      subtitle:'Compralo ahora',
      content:'Causales miedo con tan solo una vista y luce misterioso con estas máscaras de ninjas',
      link:'/accesorios/mascaras',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Estrellas',
      subtitle:'Compralo ahora',
      content:'Para ganar las peleas hay que tener destreza, y eso lo harás practicando con estrellas',
      link:'/accesorios/estrellas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Kunais',
      subtitle:'Compralo ahora',
      content:'Usado por muchos y dominado por pocos, pero los grandes senseis lastiman con kunais poco a poco',
      link:'/accesorios/kunais',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Espadas',
      subtitle:'Compralo ahora',
      content:'El arte de las katana es lo principal, y con esto los objetivos con Cristo rey llevar ',
      link:'/accesorios/espadas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

    {
      title:'Vinilos',
      subtitle:'Compralo ahora',
      content:'te traemos una serie de vinilos shinobis para que puedas hacer todas las decoraciones que te plazcan y dejar tu marca regada.',
      link:'/accesorios/vinilos',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    }
  ]


  home:Card[] = [
    {
      title:'Lámparas',
      subtitle:'Compralo ahora',
      content:`No pierdas más tiempo en comprar tu lámpara ${this.getName.replace('s','')}, ella será tu mejor amiga.`,
      link:'/hogar/lamparas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },
  
    {
      title:'Sábanas',
      subtitle:'Compralo ahora',
      content:`Compra sábanas ${this.getName.slice(3).replace('s','')}, es hora de mimir con sábanas que cumplan tus estándares de diseño y tema.`,
      link:'/hogar/sabanas',
      imgUrl:'./assets/img/user-ninja-solid.svg',
      product:false
    },

  ]

  constructor(
    private mainService:MainService,
    private title:Title,
    private metaDataService:MetaDataService
  ){}

  get getName(){
    return this.mainService.giveName()
  }

  ngOnInit(): void {
    let t:string = `Tienda online de productos ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`Tenemos una serie de productos ${this.getName}, tales como camisetas, sudaderas, vestimenta, disfraces, fundas móviles, lámparas, sabanas y mucho más a buen precio y calidad`,
      slug:location.href,
      image:"https://m.media-amazon.com/images/I/61gFnOvYnJL._AC_UL320_.jpg"
    })
  }
}
