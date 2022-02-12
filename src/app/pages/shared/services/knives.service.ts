import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
    providedIn: 'root'
})
export class KnivesService {
    knives():Card[] {
        return []
    }

    knives2():Card[]{
        return []
    }
}