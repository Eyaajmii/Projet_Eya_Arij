import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
constructor(private http:HttpClient) { }
getPosition(){
  const url='https://apiip.net/api/check'
}
//const api=234ad9e6-c22a-4d5e-a523-e44005f8f6b3
}
