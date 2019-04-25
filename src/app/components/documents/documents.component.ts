import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent implements OnInit {

  title = "Documents Dashboard";

  documents: Document[] = [
    {
      title: "Doc 1",
      description: "Acm1pt",
      fileUrl: 'http://google.com',
      updated_at: '23/04/19',
      image_url: 'http://google.com'
    },
    {
      title: "Doc 2",
      description: "Acm1pt",
      fileUrl: 'http://google.com',
      updated_at: '23/04/19',
      image_url: 'http://google.com'
    },
    {
      title: "Doc 3",
      description: "Acm1pt",
      fileUrl: 'http://google.com',
      updated_at: '23/04/19',
      image_url: 'http://google.com'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
