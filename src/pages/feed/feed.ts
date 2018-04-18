import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objFeed = {
    titulo: "Diego Toledo",
    data: "November 5, 1955",
    descricao: "Estou criando um app com Ionic 3.",
    qtdLikes: 12,
    qtdComments: 4,
    timeComment: "11h ago"
  }

  public listaFilmes = new Array<any>();

  public nomeUsuario:string = "Diego Toledo";

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.obterFilmes().subscribe(
      data=>{
        const objRetorno = JSON.parse((data as any)._body);
        this.listaFilmes = objRetorno.results;
        console.log(objRetorno);
        }, error => {
        console.log(error);
      }
    )
  }

}
