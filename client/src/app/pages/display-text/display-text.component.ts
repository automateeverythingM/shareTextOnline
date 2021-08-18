import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextShareService } from 'src/app/components/editor/texts-hare.service';
import { BypassStyleSanitizePipe } from 'src/app/pipes/bypass-style-sanitize.pipe';
import { ITextResponse } from 'src/types/text';

@Component({
  selector: 'app-display-text',
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.scss'],
})
export class DisplayTextComponent implements OnInit {
  sharedText: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private textService: TextShareService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.textService.getTextById(id).subscribe((response: any) => {
        this.sharedText = response.text;
      });
    }
  }
}
