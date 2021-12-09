import { not } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'my-store';
  public img = 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F031%2F671%2Fcover1.jpg';
  public b_disable = true;

  person = {
    name: 'BlackFire',
    age: '22',
    num_semesters: 11,
    my_semester: 8
  }

  public onClick() {
    this.b_disable = !this.b_disable
  }
}
