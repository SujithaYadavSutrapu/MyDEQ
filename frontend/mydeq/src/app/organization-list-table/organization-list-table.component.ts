import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatRadioModule } from '@angular/material/radio';


export interface Organization {
  placeName: string;
  location: string;
  city: string;
  zipcode: string;
}

@Component({
  selector: 'app-organization-list-table',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatTableModule, MatPaginatorModule, MatRadioModule],
  templateUrl: './organization-list-table.component.html',
  styleUrl: './organization-list-table.component.css'
})
export class OrganizationListTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'placeName', 'location', 'city', 'zipcode'];
  dataSource: MatTableDataSource<Organization>;
  selection = new SelectionModel<Organization>(true, []);
  pageSize = 5;


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
    // Dummy data
    const dummyData: Organization[] = [
      { placeName: 'Org 1', location: 'Location 1', city: 'City 1', zipcode: '11111' },
      { placeName: 'Org 2', location: 'Location 2', city: 'City 2', zipcode: '22222' },
      { placeName: 'Org 3', location: 'Location 3', city: 'City 3', zipcode: '33333' },
      { placeName: 'Org 4', location: 'Location 4', city: 'City 4', zipcode: '44444' },
      { placeName: 'Org 5', location: 'Location 5', city: 'City 5', zipcode: '55555' },
      { placeName: 'Org 6', location: 'Location 6', city: 'City 6', zipcode: '66666' },
      { placeName: 'Org 7', location: 'Location 7', city: 'City 7', zipcode: '77777' },
      { placeName: 'Org 8', location: 'Location 8', city: 'City 8', zipcode: '88888' },
      { placeName: 'Org 9', location: 'Location 9', city: 'City 9', zipcode: '99999' },
      { placeName: 'Org 10', location: 'Location 10', city: 'City 10', zipcode: '10000' }
    ];
    this.dataSource = new MatTableDataSource(dummyData);

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  selectRow(event: any, row: Organization): void {
    this.selection.select(row);
  }

}
