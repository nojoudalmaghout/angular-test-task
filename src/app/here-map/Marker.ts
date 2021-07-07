export class Marker{
    lat:number=0;
    lng:number=0;
    data:string='';
    icon:string='';

    constructor(lat:number,lng:number,data:string,icon:string){
        this.lat=lat;
        this.lng=lng;
        this.data=data;
        this.icon=icon;
    }
}