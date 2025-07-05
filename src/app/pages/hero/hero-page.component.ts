import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styles: `
    h1 {
      color: blue;
    }

    h2 {
      color: green;
    }

    dl {
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
    }
  `,
  imports: [ UpperCasePipe ],
})
export class HeroPageComponent {
[x: string]: any;
  name = signal('ironman');
  age = signal(22);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description
  })

  capitalizedName = computed(() => this.name().toUpperCase());

  resetForm() {
    this.name.update(() => 'ironman');
    this.age.update(() => 22);
  }

  changeHero() {
    this.name.update(() => 'spiderman');
  }

  changeAge() {
    this.age.update(() => 60);
  }

  changeNameCapitalized() {
    this.name.update(() => this.name().toUpperCase())
  }

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

}
