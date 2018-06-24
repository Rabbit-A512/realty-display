import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private _url = 'https://picsum.photos/list';
  private project_carousel_url = 'http://120.78.187.115:5000/api/project_images';
  private house_carousel_url = 'http://120.78.187.115:5000/api/house_type_images';
  private home_carousel_url = 'http://120.78.187.115:5000/api/carousels';

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

  deleteProjectCarousel(id: string) {
    return this._http.delete(`${this.project_carousel_url}/${id}`);
  }

  deleteHouseCarousel(id: string) {
    return this._http.delete(`${this.house_carousel_url}/${id}`);
  }

  showHomeCarousel(id) {
    return this._http.post(`${this.home_carousel_url}/${id}`, {});
  }

  unshowHomeCarousel(id) {
    return this._http.delete(`${this.home_carousel_url}/${id}`);
  }

  get shownCarousels() {
    return this._http.get(`${this.home_carousel_url}`);
  }
}
