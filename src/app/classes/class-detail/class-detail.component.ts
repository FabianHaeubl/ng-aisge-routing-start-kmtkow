import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../model/student.model';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css'],
})
export class ClassDetailComponent implements OnInit {
  className = '4AHITM';
  students: Array<Student>;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.className = this.route.snapshot.params['classname'];
    this.students = this.dataService.getStudentsOfClass(this.className);
  }
}
