/* eslint-disable prettier/prettier */
import { AfterViewInit, Component, OnInit, Renderer } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line prettier/prettier
import { DataTablesModule } from "angular-datatables";
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcustomers',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './allcustomers.component.html',
  styleUrls: ['./allcustomers.component.css']
})
export class AllcustomersComponent implements AfterViewInit, OnInit {
  dtOptions: DataTables.Settings = {};


  constructor(private renderer: Renderer, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event:any) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }

}
