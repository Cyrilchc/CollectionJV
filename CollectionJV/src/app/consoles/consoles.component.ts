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
  consolesAny: any[] = [];
  consolesToDisplay: Console[];
  constructor(public dialog: MatDialog, private consoleservice: ConsoleserviceService) { }

  ngOnInit(): void {
    this.getConsoles()
    console.log(this.consolesAny);
  }

  getConsoles() {
    this.consoleservice.getConsoles().then((response: any) => {
      this.consolesAny = response.map((ev) => {
        ev.body = ev;
        return ev;
      });
      console.log(this.consolesAny);
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddconsoledialogComponent, {
      width: '60em',
      data: { console: this.console }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.console = result;
      console.log(this.console);
      let response = this.consoleservice.createConsole(this.console)
      this.getConsoles();
      console.log(response);
    });
  }
}
