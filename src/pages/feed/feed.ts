import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  // public/ protected /private
  // any= qualquer valor string= so strings number= so numeros
  public nome_usuario:string = "Warley dos Reis Andrade";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //Exemplos de funcoes basicas---------------------------------------------------
  public somaDoisNumeros1():void{ // toda vez que declara um tipo(number/string) e obrigatorio retornar um valor
    alert("Soma de 5+10= "+(5+20));
  }
  public somaDoisNumeros2(num1:number,num2:number):void{
    alert("A soma dos numeros passados é : "+(num1 + num2));
  }
  //Fim Exemplos de funcoes basicas---------------------------------------------------

  ionViewDidLoad() {//ciclo de vida de uma pagina
    //this.somaDoisNumeros1();  //this e sempre que chama algo de dentro da pagina
    //this.somaDoisNumeros2(10,15);
    
  }

}
