import { Component, OnInit } from '@angular/core';
import { TextShareService } from './texts-hare.service';
import * as copy from 'copy-to-clipboard';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  constructor(private textShareService: TextShareService) {}

  ngOnInit(): void {}

  onClick(editor: HTMLDivElement) {
    let content = editor.innerHTML;
    this.textShareService.postTextShare(content).subscribe((response: any) => {
      copy('http://localhost:4200/' + response.id);
      editor.innerHTML = '';
    }, console.error);
  }
}
