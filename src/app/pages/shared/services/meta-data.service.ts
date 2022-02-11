import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaTag } from '../interfaces/meta-tag';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService { 

  constructor( private meta:Meta ){}

  generateTags(config:MetaTag){
    this.meta.updateTag({ name:'twitter:title', content:config.title })
    this.meta.updateTag({ name:'twitter:description', content:config.description })
    this.meta.updateTag({ name:'twitter:image', content:config.image })
    this.meta.updateTag({ name:'description', content:config.description })

    this.meta.updateTag({ property:'og:type', content:'article' })
    this.meta.updateTag({ property:'og:site_name', content:'DeNinjas' })
    this.meta.updateTag({ property:'og:title', content:config.title })
    this.meta.updateTag({ property:'og:description', content:config.description })
    this.meta.updateTag({ property:'og:image', content:config.image })
    this.meta.updateTag({ property:'og:url', content:'' })
  }
}
