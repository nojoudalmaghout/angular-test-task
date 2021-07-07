import { PageTable } from "./PageTable";
import { Vehicle } from "./Vehicle";

export class VehicleResponse{
    totalPages:number=0;
    totalElements:number=0;
    pageable:PageTable =new PageTable();
    content:Vehicle[]=[];
}