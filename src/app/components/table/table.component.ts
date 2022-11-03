import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LoginService } from 'src/app/services/login.service';
import { Table } from 'src/app/Login';

// import { TRAIL } from 'src/app/mock-data';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface Trail {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  jobTitle: string;
}

export const TRAIL_DATA: Trail[] = [
  {
    id: 1,
    firstName: 'Johannah',
    lastName: 'Kiffin',
    email: 'jkiffin0@google.pl',
    gender: 'F',
    jobTitle: 'Administrative Assistant I',
  },
  {
    id: 2,
    firstName: 'Eldin',
    lastName: 'Astbery',
    email: 'eastbery1@geocities.jp',
    gender: 'M',
    jobTitle: 'Senior Editor',
  },
  {
    id: 3,
    firstName: 'Nahum',
    lastName: 'Mounce',
    email: 'nmounce2@vk.com',
    gender: 'M',
    jobTitle: 'Programmer II',
  },
  {
    id: 4,
    firstName: 'Gallard',
    lastName: 'Standell',
    email: 'gstandell3@europa.eu',
    gender: 'M',
    jobTitle: 'Account Representative II',
  },
  {
    id: 5,
    firstName: 'Koenraad',
    lastName: 'Domleo',
    email: 'kdomleo4@cornell.edu',
    gender: 'M',
    jobTitle: 'Quality Control Specialist',
  },
  {
    id: 6,
    firstName: 'Uriah',
    lastName: 'Turbat',
    email: 'uturbat5@aol.com',
    gender: 'M',
    jobTitle: 'Accounting Assistant II',
  },
  {
    id: 7,
    firstName: 'Waldemar',
    lastName: 'Fowley',
    email: 'wfowley6@sun.com',
    gender: 'M',
    jobTitle: 'Account Coordinator',
  },
  {
    id: 8,
    firstName: 'Rodolfo',
    lastName: 'Trenchard',
    email: 'rtrenchard7@yandex.ru',
    gender: 'M',
    jobTitle: 'Data Coordiator',
  },
  {
    id: 9,
    firstName: 'Konstance',
    lastName: 'Dudek',
    email: 'kdudek8@techcrunch.com',
    gender: 'F',
    jobTitle: 'Administrative Assistant I',
  },
  {
    id: 10,
    firstName: 'Monti',
    lastName: 'Perton',
    email: 'mperton9@youtube.com',
    gender: 'M',
    jobTitle: 'Operator',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output() onLogin: EventEmitter<Table> = new EventEmitter();
  //Original
  map: object;
  SearchCriteria: Array<object>;
  Parameter: string;
  Condition: string;
  Values: Array<string>;
  Size: number;
  Page: number;

  username: string;
  password: string;
  grant_type: string;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'jobTitle',
  ];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(TRAIL_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  getTable() {
    const tableDetails = {
      map: {
        SearchCriteria: [
          {
            Parameter: 'EntityPayload.UserId',
            Condition: 'Equals',
            Values: ['AuditDemo3'],
          },
        ],
        Size: 2,
        Page: 0,
      },
    };
    // console.log('Datasource: ', this.dataSource);
    const res = this.loginService
      .tableAuth({
        map: {
          SearchCriteria: [
            {
              Parameter: 'EntityPayload.UserId',
              Condition: 'Equals',
              Values: ['AuditDemo3'],
            },
          ],
          Size: 2,
          Page: 0,
        },
      })
      .subscribe((users) => {
        const token = localStorage.getItem('access_token');
        console.log('token: ', token);
        return users;
      });

    console.log('res: ', res);
  }
}
