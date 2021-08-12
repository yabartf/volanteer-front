import { Component, OnInit, ViewChild } from '@angular/core';
import { USERS, user, point } from "../mock";
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  displayedColumns: string[] = Object.keys(USERS[0])
  dataSource = new MatTableDataSource(USERS);
  constructor(private fb: FormBuilder) { }

  mm: user[] = USERS

  form = this.fb.group({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "mail": new FormControl("", [Validators.required, Validators.email]),
    "location": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "admin": new FormControl()
  })

  ngOnInit(): void {
  }

  @ViewChild(MatTable) table: MatTable<user>

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addData() {
    alert(this.form.value['admin'] === false)
    console.log(this.form.value)
    var newuser: user = this.form.value
    this.mm.push(newuser)
    this.dataSource = new MatTableDataSource(this.mm)
    this.table.renderRows();
  }

  defaultUser: user = { location: { long: 0, lat: 0 }, firstName: "", lastName: "", password: "", mail: "", admin: false }
  selectedUser: user = this.defaultUser

  onSelect(element: user, event: Event) {
    var rows = document.getElementsByClassName('table')
    var selected = rows[this.mm.indexOf(element)]


    if (element === this.selectedUser) {
      if (selected) {
        selected.classList.remove("show");
      }
      this.selectedUser = this.defaultUser
    }
    else {
      for (let index = 0; index < rows.length; index++) {
        rows[index].classList.remove("show")
      }
      if (selected) {
        selected.classList.add("show");
      }
      this.selectedUser = element
    }
  }

}
