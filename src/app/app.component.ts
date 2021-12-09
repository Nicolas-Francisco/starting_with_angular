import { not } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Wojak } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'my-store';
  public img = 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F031%2F671%2Fcover1.jpg';
  public b_disable = true;
  public main_name = "BlackFire";

  stands: string[] = ['Tusk', 'D4C', 'THE WORLD'];
  new_stand = "";

  person = {
    name: 'BlackFire',
    age: '22',
    num_semesters: 11,
    my_semester: 8
  };

  wojaks: Wojak[] = [
    {
      name: "cryjak",
      price: 99.9,
      image: './assets/images/cryjak.jpg'
    },
    {
      name: "darkjak",
      price: 139.99,
      image: './assets/images/darkjak.jpg'
    },
    {
      name: "tradgirljak",
      price: 199.9,
      image: './assets/images/tradgirljak.jpg'
    },
    {
      name: "twinkjak",
      price: 56.99,
      image: './assets/images/twinkjak.jpg'
    }
  ]

  public onClick() {
    this.b_disable = !this.b_disable;
  }

  public add_stand(){
    this.stands.push(this.new_stand);
    this.new_stand = "";
  }

  public delete_stand(index: number){
    this.stands.splice(index, 1);
  }
}
