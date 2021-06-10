import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Notes } from "../models/notes";

@Injectable()
export class NotesService {
  constructor( private httpClient:HttpClient){}

  addNotes(newNotes:Notes) {
    // http post

    return this.httpClient.post<Notes>('http://localhost:3000/notes',newNotes);
    
  }

  getALlNotes() {
    // http get
    return this.httpClient.get<Array<Notes>>('http://localhost:3000/notes')
  }

  deleteNotes() {
    // http delete
    return this.httpClient.delete<Notes>('http://localhost:3000/notes')
  }

}
