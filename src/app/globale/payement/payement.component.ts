import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonserviceService } from '../../services/monservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {
  id:any;
  detailpayement: any = 0;
  constructor(private monService:MonserviceService,private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.monService.CommandeById(this.id).subscribe(data => {
      this.detailpayement=data
      console.log(this.detailpayement)
    
    });
  }
  onUpdate(){
   
    this.monService.UpdateMontant(this.id, this.detailpayement).subscribe(
      dataretour=>{
        console.log(dataretour);
        this.presentToast();
        this.router.navigateByUrl("/globale/panier")
        this.ngOnInit();
    }  
  )
 }
 presentToast(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Payement enregistrer avec succès',
    showConfirmButton: false,
    timer: 3000
  })
}
}
