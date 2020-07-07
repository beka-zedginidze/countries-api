import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IInfo } from './info-types';



@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {
  imageWidth: number = 170;
  countries: any;
  _listFilter: string;
  moreInfo: boolean = false;
  showMoreLess: boolean = false;

get listFilter(): string {

  return this._listFilter;

}
set listFilter(value:string) {
    this.filterdInfo = this.countries;

 
  this._listFilter = value;
  this.filterdInfo = this.listFilter ? this.performFilter(this.listFilter): this.countries;
  
}

  filterdInfo: IInfo[];

  constructor(private data: DataService) {
  
   }

  performFilter(filterBy: string): IInfo[] {
    
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter((country: IInfo) =>
         country.name.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }
  
  onClick() {
    this.moreInfo = !this.moreInfo;
  
  }

  showMoreless() {
    this.showMoreLess = !this.showMoreLess;
  }

  
  ngOnInit() {
    this.data.getCountries().subscribe(data => {
      this.countries = data
      console.log(this.countries)
      this.filterdInfo = this.countries;

    }
    );
  }

}
