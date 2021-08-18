/*
https://docs.nestjs.com/providers#services
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextShareService {
  constructor(private http: HttpClient) {}

  postTextShare(text: string) {
    return this.http.post(
      window.location.hostname + '/shared',
      JSON.stringify({ text: text }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  getTextById(id: string) {
    return this.http.get(window.location.host + '/shared/' + id);
  }
}
