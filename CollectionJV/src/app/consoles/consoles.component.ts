import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Console } from '../console';
import { AddconsoledialogComponent } from '../addconsoledialog/addconsoledialog.component'
import { ConsoleserviceService } from '../consoleservice.service'

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
  console: Console;
  constructor(public dialog: MatDialog, private consoleservice: ConsoleserviceService) { }

  ngOnInit(): void {
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddconsoledialogComponent, {
      width: '60em',
      data: {console: this.console}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.console = result;
      console.log(this.console);
      let response = this.consoleservice.createConsole(this.console)
      console.log(response);
    });
  }
}
