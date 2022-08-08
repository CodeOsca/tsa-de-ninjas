import { Component } from '@angular/core';
import { MetaDataService } from '../shared/services/meta-data.service';
import { Card } from '../shared/interfaces/card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../shared/scss/grid-section-card.scss']
})
export class HomePageComponent {
  clothings:Card[] = [
    {
      title:'Sudaderas',
      subtitle:'Compralo ahora',
      content:'No solo te cubrirán del sol, si no que te harán lucir de una forma espectacula, Porque así son estas sudaderas',
      link:'/ropa/sudaderas',
      imgUrl:'https://m.media-amazon.com/images/I/61VQhA3Fs+L._AC_UL320_.jpg',
      isProduct:false
    },

    {
      title:'Camisetas',
      subtitle:'Compralo ahora',
      content:'Por más cambios que sufra la moda actual, estas camisetas siempre relucirán',
      link:'/ropa/camisetas',
      imgUrl:'https://m.media-amazon.com/images/I/61t2y+uAo4L._AC_UL320_.jpg',
      isProduct:false
    },

    {
      title:'Zapatos',
      subtitle:'Compralo ahora',
      content:'Para todo camino y lucir genial, mejor que estos zapatos no vas a encontrar nada',
      link:'/ropa/zapatos',
      imgUrl:'https://m.media-amazon.com/images/I/51408jBqJpL._AC_UL320_.jpg',
      isProduct:false
    },

    {
      title:'Pijamas',
      subtitle:'Compralo ahora',
      content:'Dormir con tranquilidad y con ganas de luchar, eso es lo que pasa cuando usas estas pijamas',
      link:'/ropa/pijamas',
      imgUrl:'https://m.media-amazon.com/images/I/91g-ATYoBOL._AC_UL320_.jpg',
      isProduct:false
    },

    {
      title:'Disfraces',
      subtitle:'Compralo ahora',
      content:'La fantasía es traída a la vida, cuando se trata de un disfraz de ninja muy realista',
      link:'/ropa/disfraces',
      imgUrl:'https://m.media-amazon.com/images/I/71DgAGasAdL._AC_UL320_.jpg',
      isProduct:false
    }
  ]

  accessories:Card[] = [
    {
      title:'Máscaras',
      subtitle:'Compralo ahora',
      content:'Causales miedo con tan solo una vista y luce misterioso con estas máscaras de ninjas',
      link:'/accesorios/mascaras',
      imgUrl:'https://m.media-amazon.com/images/I/51LumusnOsL._AC_UL320_.jpg',
      isProduct:false
    },

    {
      title:'Espadas',
      subtitle:'Compralo ahora',
      content:'El arte de las katana es lo principal, y con esto los objetivos con Cristo rey llevar',
      link:'/accesorios/espadas',
      imgUrl:'https://m.media-amazon.com/images/I/414eKr5EFuL._AC_UL320_.jpg',
      isProduct:false
    },

    {
      title:'Fundas móviles',
      subtitle:'Compralo ahora',
      content:'A pesar de que le des muchos coñazos la funda sigue aguantando',
      link:'/accesorios/fundas-moviles',
      imgUrl:'https://m.media-amazon.com/images/I/31QYEBOqtzL._AC_UL320_.jpg',
      isProduct:false
    },

  ]


  home:Card[] = [
    {
      title:'Lámparas',
      subtitle:'Compralo ahora',
      content:`No pierdas más tiempo en comprar tu lámpara de ninja, ella será tu mejor amiga.`,
      link:'/hogar/lamparas',
      imgUrl:'https://m.media-amazon.com/images/I/51QojoYXTRL._AC_UL320_.jpg',
      isProduct:false
    },
  
    {
      title:'Sábanas',
      subtitle:'Compralo ahora',
      content:`Compra sábanas ninja, es hora de mimir con sábanas que cumplan tus estándares de diseño y tema.`,
      link:'/hogar/sabanas',
      imgUrl:'https://m.media-amazon.com/images/I/811pQi8fQUL._AC_UL320_.jpg',
      isProduct:false
    },
  ]

  constructor( private metaDataService:MetaDataService ){}


  ngOnInit(): void {
    let t:string = `Tienda online de productos de ninjas`
    this.metaDataService.generateTags({
      title:t,
      description:`Tenemos una serie de productos de ninjas, tales como camisetas, sudaderas, vestimenta, disfraces, fundas móviles, lámparas, sabanas y mucho más a buen precio y calidad`,
      slug:`${this.metaDataService.nameSite}` ,
      image:"https://m.media-amazon.com/images/I/61gFnOvYnJL._AC_UL320_.jpg"
    })
  }
}
