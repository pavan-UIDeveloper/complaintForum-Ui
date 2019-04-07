import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  complaint_data:any=[];
  modalData:any={};
  statuses:any=[];
  statusName;
  constructor(private compSer:ComplaintService) { }

  ngOnInit() {
   this.getComplaintDetails()
   this.getStatuses()
  }
  getComplaintDetails(){
    this.compSer.getComplaintDetails().subscribe(data=>{
     this.complaint_data=data;
     console.log(this.complaint_data)
        })
  }

  getStatuses(){
    this.statuses='';
    this.compSer.getStatuses().subscribe(data=>{
      console.log(data)
      this.statuses=data;
    })
  }



  openMdal(complaintId){
    this.modalData='';
    this.complaint_data.filter(element=>{
      if(element.complaintId==complaintId){
          this.modalData=element;
          console.log(this.modalData)
      }
    })
  }

  updateStatus(cid){
    let update = {
      complaintId:cid,
      status:this.statusName
    }
    this.compSer.updateStatus(update).subscribe(data=>{
      console.log(data)
      this.openMdal(cid)
      this.getComplaintDetails()
      
    })
  }

 }
