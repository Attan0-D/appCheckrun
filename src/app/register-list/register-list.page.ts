import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/CategoryService';
import { Category } from 'src/models/Category';
import { List } from 'src/models/List';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.page.html',
  styleUrls: ['./register-list.page.scss'],
})
export class RegisterListPage implements OnInit {
  public category:Category = new Category();

  public listq:List = new List();
  public days:Array<string> = ['D','S','T','Q','Q','S','S'];

  constructor(
    private _router: Router,
    private _categotyService: CategoryService
    ) { }

  ngOnInit() {
  }

  cadastrarPergunta(){
    this._router.navigate(['/create-question'])
  }

  salvar(){
    this._router.navigate(['/show-list'])
  }

  // cadastarList(){ 
  //   this._categotyService.cadastrar(this.category).subscribe(response => {
  //     return response
  //   })
  // }

  saveLista(){
    console.log(this.listq)
  }
  setDays(day:number){
    let diasMarcados:Array<number> = this.listq.days ? JSON.parse(this.listq.days): [];
    
    
    if (diasMarcados.includes(day)){
      let indexDiasMarcados = diasMarcados.findIndex(d => d == day)
      diasMarcados.splice(indexDiasMarcados,1)    
    }else{  
      diasMarcados.push(day); 
    }

    this.listq.days = JSON.stringify(diasMarcados);   
    console.log(day)
  }

  verificarDiaMarcado(day:number){
    let diasMarcados:Array<number> = this.listq.days ? JSON.parse(this.listq.days): [];
    return diasMarcados.includes(day)
  }


}
