import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AppService{
    API_URL = environment.apiUrl;
    constructor(private http: HttpClient){}
    getCarDetails(): Observable<any>{
        return this.http.get(this.API_URL+ '/resource/h9gi-nx95.json');
    }

    getFilteredData(date: any): Observable<any>{
        return this.http.get(this.API_URL+ '/resource/h9gi-nx95.json?crash_date='+date );
    }

}