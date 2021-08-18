import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import * as copy from 'copy-to-clipboard';
import { TextShareService } from 'src/app/components/editor/texts-hare.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private textService: TextShareService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {}

  sendText(text: string): void {
    this.textService.postTextShare(text).subscribe((response: any) => {
      copy(process.env.domain + response.id);
      this.notifier.notify('success', 'Link copied to clipboard!');
    }, console.error);
  }
}
