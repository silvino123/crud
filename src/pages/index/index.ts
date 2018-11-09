import { Component,OnInit } from '@angular/core';
import { ProductService } from "../../app/services/product.service";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../app/models/product';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from 'ionic-angular';
import { EditarPage } from '../../pages/editar/editar';

//import { ProductService } from "../../app/services/product.service";
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
product = {} as Product;
products = [];
editing: boolean = false;
editingProduct: Product;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFirestore,private productService: ProductService,public modalCtrl: ModalController) {
    
  }
  
  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });    
  }
  
  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    if(this.product.name !="" && this.product.price != 0 && this.product.description !="") {
      this.productService.addProduct(this.product);
      this.product = {} as Product;
    } 
    else{
      this.navCtrl.resize();
     
    }
    
    
  }

  deleteProduct(event, product) {
    this.productService.deleteProduct(product);
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }

  editProduct(event, product){
    this.editing = !this.editing;
    this.editingProduct = product;

  }
  }


