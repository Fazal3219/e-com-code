import { Component, OnInit } from '@angular/core';
import { faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faChartSimple, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faMagnifyingGlass;
  faPhone=faPhone;
  faHeart=faHeart;
  faChart= faChartSimple
  faBag= faBagShopping;
  faUser= faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
