import {serveWebpackBrowser} from "@angular-devkit/build-angular/src/dev-server";


export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string){
    this.name= name;
    this.description= desc;
    this.imagePath= imagePath;
  }
}

