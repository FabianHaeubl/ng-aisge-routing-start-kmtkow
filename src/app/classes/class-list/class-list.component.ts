import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css'],
})
export class ClassListComponent implements OnInit {
  classNames: Array<string>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.classNames = this.dataService.getClassNames();
  }

  openDetail(classname: string): void {
    this.router.navigate(['class-detail', classname]);
  }
}
