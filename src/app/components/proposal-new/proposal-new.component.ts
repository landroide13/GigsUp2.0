import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal/Proposal'

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html'
})
export class ProposalNewComponent implements OnInit {

  proposal = new Proposal

  constructor() { }

  ngOnInit() {
  }

}
