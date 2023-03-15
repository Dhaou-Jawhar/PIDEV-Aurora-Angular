import { Component, OnInit } from '@angular/core';
import { Emplois } from '../core/model/emploi';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.scss']
})
export class OffreEmploiComponent implements OnInit {

  listEmploi!:Emplois[];
  i:number=0;
  clickMessage = '';
  e!:Emplois;
  Result!:Emplois;
  alertOffer!:number;

  
  constructor(private calcul:CalculService) { }
  ngOnInit(): void {
    this.listEmploi=[
      {reference : "1" , titre : "Responsable" , entreprise : "Actia" , etat : true},
      {reference : "2" , titre : "Ouvrier" , entreprise : "SOTUFAB" , etat : false},
      {reference : "3" , titre : "Directeur" , entreprise : "Hp" , etat : true}
    ]

    this.alertOffer = this.calcul.getNumber(this.listEmploi , 'etat' , false)
  }

  Calcul() {
    this.i=0;
    for (let index = 0; index < this.listEmploi.length; index++) {
      if(this.listEmploi[index].etat==true){
        this.i++;
      }     
    }
    this.clickMessage=this.i.toString();
  }

  Search(search: string){
    if (search) {
      for (let index = 0; index < this.listEmploi.length; index++) {
        if(this.listEmploi[index].entreprise==search){
          this.e=this.listEmploi[index];
          this.listEmploi.length=0;
          this.listEmploi[0]=this.e;
        }     
      }
    }
  }

}
