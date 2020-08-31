import { Component, OnInit } from '@angular/core';
import { DrawtoolService } from '../service/drawtool.service';
import { LoggerService } from '../service/logger.service';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-pagetool',
  templateUrl: './pagetool.component.html',
  styleUrls: ['./pagetool.component.scss'],
})
export class PagetoolComponent implements OnInit {

  constructor(
    public drawtool: DrawtoolService,
    public dc: DocumentService,
    private logger: LoggerService,
  ) { }

  ngOnInit() {}

}