/*
https://docs.nestjs.com/providers#services
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextShareService {
  constructor(private http: HttpClient) {}

  getTextById(id: string) {
    return this.http.get(process.env.domain + '/shared/' + id);
  }
}
