import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { Table } from 'src/app/Login';
import { data } from 'src/app/mock-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output() onLogin: EventEmitter<Table> = new EventEmitter();
  //Original
  map: {
    SearchCriteria: {
      Parameter: string;
      Condition: string;
      Values: string[];
    }[];
    Size: number;
    Page: number;
  };

  displayedColumns: string[] = [
    'updatedBy',
    'updatedOn',
    'entityName',
    'entityId',
    'changedParameter',
    'type',
    'oldValue',
    'newValue',
  ];
  dataSource = new MatTableDataSource(data);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  constructor(private tableService: TableService) {}

  ngOnInit(): void {
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
    const res = this.tableService.tableAuth(tableDetails).subscribe((users) => {
      return users;
    });
    if (res) {
      console.log(res);
    } else {
      console.log('Unable to fetch user');
    }
  }
}
