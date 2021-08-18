import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextShareService } from './texts-hare.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @Output() getText: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(editor: HTMLDivElement) {
    let content = editor.innerHTML;
    this.getText.emit(content);
    editor.innerHTML = '';
  }
}
