import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service'; 
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: [
    './lamps.component.scss',
    '../../shared/scss/grid-section-card.scss'
    ]
})
export class LampsComponent {
  lamps:Card[] = [
    {
      title:'Deadpool Luz de la Noche 3D Lámpara de Mesa Ilusión Óptica Mesita de Noche Lampy Decoración LED Bulbing Sensor de Movimiento Luz Interruptor Táctil',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Deadpool-L%C3%A1mpara-Decoraci%C3%B3n-Movimiento-Interruptor/dp/B0888WJSM9/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1S6TCVBJLIPKA&keywords=lamparas+deadpool&qid=1644359748&s=kitchen&sprefix=lamparas+deadpool%2Ckitchen%2C313&sr=1-2',
      imgUrl:'https://m.media-amazon.com/images/I/613ysATXn2L._AC_UL320_.jpg',
      product:true
    },

    {
      title:'3DLIGHTFX - Lámpara 3D Ninja Rafael',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3DLIGHTFX-L%C3%A1mpara-3D-Ninja-Rafael/dp/B00HVJBJAI/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=15WNQTQQNE01L&keywords=lamparas+ninja&qid=1644359821&s=kitchen&sprefix=lamparas+ninja%2Ckitchen%2C329&sr=1-1',
      imgUrl:'https://m.media-amazon.com/images/I/81cA1U7AOsL._AC_UL320_.jpg',
      product:true
    },
    {
      title:'3D Light FX RD-RS261002 3DLIGHTFX - Lámpara 3D Ninja Leonardo, 10 W, Verde/Azul, único',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3DLIGHTFX-L%C3%A1mpara-3D-Ninja-Leonardo/dp/B00HVKAS5E/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=15WNQTQQNE01L&keywords=lamparas+ninja&qid=1644359821&s=kitchen&sprefix=lamparas+ninja%2Ckitchen%2C329&sr=1-2',
      imgUrl:'https://m.media-amazon.com/images/I/511cerP87GL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'3DLIGHTFX - Lámpara 3D Ninja Donatello',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3DLIGHTFX-L%C3%A1mpara-3D-Ninja-Donatello/dp/B00HVJQD8G/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=15WNQTQQNE01L&keywords=lamparas+ninja&qid=1644359821&s=kitchen&sprefix=lamparas+ninja%2Ckitchen%2C329&sr=1-4',
      imgUrl:'https://m.media-amazon.com/images/I/81+XFFEmH4L._AC_UL320_.jpg',
      product:true
    },
    {
      title:'JYDNBGLS 3D lámpara anime naruto uchiha Itachi LED noche luz con control remoto 16 colores lámpara de mesa niños dormitorio decoración',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/JYDNBGLS-l%C3%A1mpara-control-dormitorio-decoraci%C3%B3n/dp/B098LJ7Y8T/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358403&s=kitchen&sr=1-12',
      imgUrl:'https://m.media-amazon.com/images/I/51uNI+Ja7zS._AC_UL320_.jpg',
      product:true
    },
    {
      title:'Naruto Anime Whirlpool Naruto Statue Doll 3D Illusion Light Led 7 Color Usb Touch Control Remoto Lámpara Niño Niño Cumpleaños Regalo De Navidad',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Whirlpool-Illusion-Control-L%C3%A1mpara-Cumplea%C3%B1os/dp/B084TYMW9B/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358403&s=kitchen&sr=1-15',
      imgUrl:'https://m.media-amazon.com/images/I/71A0Q5jPkBL._AC_UL320_.jpg',
      product:true
    },
    {
      title:'JYDNBGLS 3D ilusión luz LED noche Gaara estatuilla japonesa anime Naruto lámpara Otaku dormitorio decoración manga arte regalo hogar oficina lámpara decoración niños s cumpleaños',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/JYDNBGLS-estatuilla-dormitorio-decoraci%C3%B3n-cumplea%C3%B1os/dp/B098LJDFDG/ref=sr_1_19?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358403&s=kitchen&sr=1-19',
      imgUrl:'https://m.media-amazon.com/images/I/61+YVNDJaES._AC_UL320_.jpg',
      product:true
    },

    {
      title:'JYDNBGLS Lámpara 3D Anime Naruto Kakashi Hatake Figura japonesa LED noche luz Icha Icha Paradaisu noche para niños dormitorio decoración escritorio 16 colores',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/JYDNBGLS-Paradaisu-dormitorio-decoraci%C3%B3n-escritorio/dp/B098LKQSV8/ref=sr_1_20?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358403&s=kitchen&sr=1-20',
      imgUrl:'https://m.media-amazon.com/images/I/61RYJe0rc8S._AC_UL320_.jpg',
      product:true
    },

    {
      title:'3D Illusion Night Light Vortex Naruto Led Night Light 7 Cambio De Color Control Remoto Lámpara De Escritorio Usb Hogar Dormitorio Lámpara De Noche Juguetes Para Niños Regalo De Cumpleaños De Navidad',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Illusion-Escritorio-Dormitorio-Juguetes-Cumplea%C3%B1os/dp/B084TYN1X4/ref=sr_1_29?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-29',
      imgUrl:'https://m.media-amazon.com/images/I/61DzBUGoXbL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Anime Naruto Akatsuki Logo - Lámpara 3D para habitación infantil (acrílico), diseño con logotipo de Naruto D',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Anime-Naruto-Akatsuki-Logo-habitaci%C3%B3n/dp/B088MBHNCN/ref=sr_1_33?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-33',
      imgUrl:'https://m.media-amazon.com/images/I/61pKxx9uzmL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Haili Luces Decorativas/Noche llevó la lámpara lámpara del Humor del Cambio de 7 Colores Creativo lámpara de Escritorio Presente de cumpleaños de los niños Juguetes Minato Naruto',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Decorativas-Creativo-Escritorio-Presente-cumplea%C3%B1os/dp/B08LHHMKF5/ref=sr_1_25?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-25',
      imgUrl:'https://m.media-amazon.com/images/I/61zt+7h-P7L._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Anime Naruto 3D lámpara Uchiha spot LED noche luz dormitorio niños lámpara de mesa decoración regalo cumpleaños 16 colores',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/l%C3%A1mpara-dormitorio-decoraci%C3%B3n-cumplea%C3%B1os-colores/dp/B09CLNJ716/ref=sr_1_28?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-28',
      imgUrl:'https://m.media-amazon.com/images/I/614blBb-9tL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Lámpara De Ilusión Óptica 3D-Anime Naruto Carácter Luz Led-Luz Nocturna Para Niños Decoración Del Hogar Luz Regalo-Control Remoto',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3D-Anime-Car%C3%A1cter-Nocturna-Decoraci%C3%B3n-Regalo-Control/dp/B08MZT4BTT/ref=sr_1_27?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-27',
      imgUrl:'https://m.media-amazon.com/images/I/61HWxLKEUBL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Lámpara De Ilusión Óptica 3D-Dibujos Animados Anime Naruto Boy Lámpara Led-Luz Nocturna Para Niños Lámpara De Decoración Del Hogar-El Regalo Más Genial-Control Remoto',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3D-Dibujos-Animados-Nocturna-Decoraci%C3%B3n-Genial-Control/dp/B08KYDL9CF/ref=sr_1_29?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-29',
      imgUrl:'https://m.media-amazon.com/images/I/61UDKG-HzOL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Lámpara De Ilusión Óptica 3D-Dibujos Animados Anime Naruto Boy Lámpara Led-Luz Nocturna Para Niños Lámpara De Decoración Del Hogar-El Regalo Más Genial-Control Remoto',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3D-Dibujos-Animados-Nocturna-Decoraci%C3%B3n-Genial-Control/dp/B08KYD3R1X/ref=sr_1_30?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-30',
      imgUrl:'https://m.media-amazon.com/images/I/616gFf2xs0L._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Lámpara De Ilusión Óptica 3D-Dibujos Animados Anime Naruto Boy Lámpara Led-Luz Nocturna Para Niños Lámpara De Decoración Del Hogar-El Regalo Más Genial-Control Remoto',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/3D-Dibujos-Animados-Nocturna-Decoraci%C3%B3n-Genial-Control/dp/B08KYD2QTK/ref=sr_1_31?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-31',
      imgUrl:'https://m.media-amazon.com/images/I/61Ayc2vD4CL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Luz nocturna LED de doble color, mitad cara, Obito Uchiha y cacashi Hatake, luz nocturna para niños, dormitorio, decoración, lámpara de escritorio de Naruto a',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/nocturna-cacashi-dormitorio-decoraci%C3%B3n-escritorio/dp/B088M9MPZS/ref=sr_1_34?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-34',
      imgUrl:'https://m.media-amazon.com/images/I/614kZ5B0irL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'7 Colores Que Cambian 3D Naruto Modelado Visual Led Anime Night Lights Kids Touch Button Lámpara Usb Lámpara De Mesa Decoración Para El Hogar Iluminación',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Colores-Cambian-Modelado-Decoraci%C3%B3n-Iluminaci%C3%B3n/dp/B084TYRQ4Q/ref=sr_1_36?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-36',
      imgUrl:'https://m.media-amazon.com/images/I/61wZaIsdnNL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'Luz De Noche Para Niños 3D Naruto Y I Love Luo Luz De Ilusión Led Luz De Humor 7 Colores Control Remoto Táctil Lámpara De Mesa Usb Lámpara De Mesilla Para Niños Regalo De Cumpleaños De Navidad',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Ilusi%C3%B3n-Colores-Control-L%C3%A1mpara-Cumplea%C3%B1os/dp/B084TYNYM8/ref=sr_1_37?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644358987&s=kitchen&sr=1-37',
      imgUrl:'https://m.media-amazon.com/images/I/61tAt5QR1eL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'3D LED Luz de la Noche Naruto Sasuke Itachi Figura de Acción 16 Colores Touch Illusion Optical Table Lamp Home Decoration Model',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Naruto-Colores-Illusion-Optical-Decoration/dp/B0888XWB7V/ref=sr_1_54?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644359593&s=kitchen&sr=1-54',
      imgUrl:'https://m.media-amazon.com/images/I/51QojoYXTRL._AC_UL320_.jpg',
      product:true
    },

    {
      title:'3D Led Sasuke Naruto Accesorios De Iluminación De Luz Nocturna 7 Colores Cambiantes Para Niños Mesita De Noche Visual Anime Usb Lámpara De Escritorio Inicio De',
      subtitle:'Compralo ahora',
      link:'https://www.amazon.es/Accesorios-Iluminaci%C3%B3n-Nocturna-Cambiantes-Escritorio/dp/B0837JY8H5/ref=sr_1_77?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lampara+naruto&qid=1644359674&s=kitchen&sr=1-77',
      imgUrl:'https://m.media-amazon.com/images/I/41xkwhknO5L._AC_UL320_.jpg',
      product:true
    },   
  
  ]

  constructor(
    private mainService:MainService,
    private metaDataService: MetaDataService,
    private title:Title
  ){}

  ngOnInit(): void {
    let t:string = `Lámparas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title:t,
      description:`Seguro que los clásicos bombillos de siempre ya te tienen casado no, ya es hora probar una de nuestras lámparas ${this.getName.replace('s','')}`,
      slug:location.href,
      image:this.lamps[20].imgUrl
    })
  }

  get getName(){
    return this.mainService.giveName()
  }
}
