import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Array<Object>
}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { 

  }

  getData() {
    return this.http.get<myData>('/api/file.php')
  }

}
