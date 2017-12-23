import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) { }
  public name: string = '';
  public age: number;
  public found: boolean;
  onNameKeyUp(event: any) {
    this.name = event.target.value;
    this.found = false;
  }

  getProfile() {
    this.httpClient.get('https://api.myjson.com/bins/rdcw7/?name=${this.name}')
      .subscribe((data: any[]) => {
        if (data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      });
  }

  postProfile() {
    this.httpClient.post('https://api.myjson.com/bins/rdcw7',
     {
      name: 'mark',
      age: 41
    })
      .subscribe(
        (data: any) => {
        console.log(data);
      });
  }

}
