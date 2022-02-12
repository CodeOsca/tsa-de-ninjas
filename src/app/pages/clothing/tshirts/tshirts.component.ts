import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { MainService } from '../../shared/services/main.service';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../shared/services/meta-data.service';


@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: [
    './tshirts.component.scss',
    '../../shared/scss/grid-section-card.scss'
  ]
})
export class TshirtsComponent {
  tsShirts: Card[] = [
    {
      title: 'Camiseta Superheroe Hombre - Manga Corta - Itachi - Regalos Frikis',
      subtitle: '',
      link: 'https://www.amazon.es/Camiseta-Superheroe-Hombre-Itachi-Regalos/dp/B07DHRV43R/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFERFRXVzhLUTkwWUkmZW5jcnlwdGVkSWQ9QTA2ODcyMjAyRkVQTThKRUJaWTJRJmVuY3J5cHRlZEFkSWQ9QTA5NDE0NTIzNTBZTkZPQVZOVzdUJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
      imgUrl: 'https://m.media-amazon.com/images/I/61t2y+uAo4L._AC_UL320_.jpg',
      product: true
    },

    {
      title: 'cotton division Camiseta para Niños',
      subtitle: '',
      link: 'https://www.amazon.es/cotton-division-BONARUTTS015-Camiseta-Negro/dp/B08CTPMVS4/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-4',
      imgUrl: 'https://m.media-amazon.com/images/I/61b7qcoZjZS._AC_UL320_.jpg',
      product: true
    },

    {
      title: 'Naruto Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/Naruto-MENARUTTS115-Camiseta-Negro-Hombre/dp/B099X1QM9L/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-5',
      imgUrl: 'https://m.media-amazon.com/images/I/81f+45GJrGL._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'Naruto Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/Naruto-MENARUTTS093-Camiseta-Blanco-Hombre/dp/B099X115J1/ref=sr_1_6?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-6',
      imgUrl: 'https://m.media-amazon.com/images/I/71Ydsa2u4+L._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'cotton division Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/cotton-division-MENARUTTS010-Camiseta-Hombre/dp/B08BTR6JJG/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-9',
      imgUrl: 'https://m.media-amazon.com/images/I/41NU8yVNhgL._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'Naruto Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/Naruto-MENARUTTS118-Camiseta-Naranja-Hombre/dp/B099WZN7RH/ref=sr_1_8?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-8',
      imgUrl: 'https://m.media-amazon.com/images/I/61qHpt2M70L._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'Naruto Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/Naruto-Menarutts119-Camiseta-Negro-Hombre/dp/B099WZ92K1/ref=sr_1_10?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-10',
      imgUrl: 'https://m.media-amazon.com/images/I/81QvVKdh92L._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'Naruto Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/Naruto-MENARUTTS109-Camiseta-Negro-Hombre/dp/B099WY8XZH/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-11',
      imgUrl: 'https://m.media-amazon.com/images/I/41IhcY3bvaL._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'Naruto Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/Naruto-MENARUTTS148-Camiseta-Melange-Hombre/dp/B099WYRZZ6/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-12',
      imgUrl: 'https://m.media-amazon.com/images/I/712y2m9D3UL._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'cotton division Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/cotton-division-MENARUTTS013-Camiseta-Hombre/dp/B08BTR9D62/ref=sr_1_14?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-14',
      imgUrl: 'https://m.media-amazon.com/images/I/41i-jXGC1ZL._AC_UL320_.jpg',
      product: true
    },


    {
      title: 'Regalos Nerd - Camiseta Manga Corta - Naru Ninja Anime T-Shirt',
      subtitle: '',
      link: 'https://www.amazon.es/Regalos-Nerd-Camiseta-Manga-T-Shirt/dp/B072FQY3HV/ref=sr_1_16?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-16',
      imgUrl: 'https://m.media-amazon.com/images/I/61crCRFQRiL._AC_UL320_.jpg',
      product: true
    },

    {
      title: 'cotton division Camiseta para Hombre',
      subtitle: '',
      link: 'https://www.amazon.es/cotton-division-MENARUTTS027-Camiseta-Hombre/dp/B08NR6GB7G/ref=sr_1_19?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=249F3E64O7DIU&keywords=Camisetas+naruto&qid=1644538868&sprefix=camisetas+naruto%2Caps%2C246&sr=8-19',
      imgUrl: 'https://m.media-amazon.com/images/I/51h0zLh39UL._AC_UL320_.jpg',
      product: true
    },

  ]

  constructor(
    private mainService: MainService,
    private metaDataService: MetaDataService,
    private title: Title) { }

  ngOnInit(): void {
    let t: string = `Camisetas ${this.getName}`
    this.title.setTitle(t)
    this.metaDataService.generateTags({
      title: t,
      description: `Llevar una prenda única significa tener que destacar entre los demás y que mejor forma de hacerlo con una camiseta ${this.getName}, demuestra que tienes el mejor look de tu zona`,
      slug: location.href,
      image: this.tsShirts[0].imgUrl
    })
  }

  get getName() {
    return this.mainService.giveName()
  }

}
