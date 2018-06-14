import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private _url = 'https://picsum.photos/list';

  constructor(private _http: HttpClient) { }

  getImages() {
    return this._http.get(this._url)
      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)));
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}
