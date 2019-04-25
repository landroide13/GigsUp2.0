import { Component, OnInit } from '@angular/core';
import { Proposal } from "../proposal/Proposal";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html'
})
export class ProposalListComponent implements OnInit {

  proposalOne: Proposal = new Proposal(15, 'Verga Corp', 'http://Acm1pt.com', 'AngularRoR', 150, 120, 16, 'Eltro@Lazo.nz');

  proposalTwo: Proposal = new Proposal(17, 'Putifo Corp', 'http://Acm1pt.com', 'AngularRoR', 150, 120, 16, 'Eltro@Lazo.nz');

  proposalThree: Proposal = new Proposal(35, 'Japi Corp', 'http://Acm1pt.com', 'AngularRoR', 150, 120, 16, 'Eltro@Lazo.nz');

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]

  constructor() { }

  ngOnInit() {
  }

}
