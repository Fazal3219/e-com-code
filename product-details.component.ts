import { Component, OnInit } from '@angular/core';
import 
{ faCcMastercard, faCcPaypal, faCcVisa, faFacebookF, faGooglePay, faLinkedin, faPinterest, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faBox, faChartSimple, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { PDataService } from '../service/p-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  faHeart= faHeart;
  faBar= faChartSimple;
  faFastTruck= faTruckFast;
  faBox= faBox;
  faVisa= faCcVisa;
  faPaypal= faCcPaypal;
  faMater= faCcMastercard;
  faGpay = faGooglePay;
  faFb= faFacebookF;
  faTwetter= faSquareTwitter;
  falinkdin=faLinkedin;
  faPinterest=faPinterest;
  faStar=faStar;
  faHalfStar=faStarHalfStroke

  prodectDetails:any;
 
  id = '01';
  name = "I phone 12 Pro";
  details = "6.1-inch (15.5 cm diagonal) Super Retina XDR display"
  price ="$450";
  off = "25%";
  catogary="SmartPhone";
  dilevery = "in 4 days";
  shippingcharge= "$10";
   img0='https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp_1_.jpg';

   img1="https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp1_1_.jpg";

   img2="https://www.luluhypermarket.in/medias/1058437-02.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjUxNTl8aW1hZ2UvanBlZ3xoYTkvaDA5Lzg5MzMxOTAxMDcxNjYvMTA1ODQzNy0wMi5qcGdfMTIwMFd4MTIwMEh8NjAxZWMzNTAxOTc2MzgwNmIxZTVlMGY0YTQyNDdlZDRhZDQ0YTRlMGY0N2NmNmFmZjZkMjJlZjliMzg4NjhjMQ";

   img3="https://media.istockphoto.com/photos/the-new-iphone-12-pro-max-pacific-blue-colour-picture-id1315953861?k=20&m=1315953861&s=170667a&w=0&h=X0UfYcLrfk4z4Vo-gS6R8cpMw1AU7SB9e7KX5FizgRc=";
    
   img4="https://media.istockphoto.com/photos/the-new-iphone-12-pro-max-pacific-blue-colour-picture-id1315953861?k=20&m=1315953861&s=170667a&w=0&h=X0UfYcLrfk4z4Vo-gS6R8cpMw1AU7SB9e7KX5FizgRc=";
   img5="https://5.imimg.com/data5/SELLER/Default/2021/4/PT/XD/ME/127651858/apple-iphone-12-pro-max-pacific-blue-png-500x500.png";


   desc= `" 6.1-inch (15.5 cm diagonal) Super Retina XDR display
   Ceramic Shield, tougher than any smartphone glass
   A14 Bionic chip, the fastest chip ever in a smartphone
   Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording
   LiDAR Scanner for improved AR experiences, Night mode portraits
   12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
   Industry-leading IP68 water resistance
   Supports MagSafe accessories for easy attach and faster wireless charging
   iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"`
  

  constructor(private api:PDataService) { 
    this.api.getProduct().subscribe(res=>{
      this.prodectDetails=res;
    })
  }

  ngOnInit(): void {
  }
  count=0;
  counter(type:string){
    type=== 'add'?this.count++: this.count--;
     
  }
  onDescription(){
    
  }

}
