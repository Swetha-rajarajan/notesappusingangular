import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { NotesService } from '../services/notes.service'


@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {
  textbg = "blue";
  // noteTittle: string = "";
  // noteDesc: string = "";

  note: Notes = new Notes();
  notesList: Array<Notes> = [];
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }


  // onChangeText(event: any) {
  //   if (event.target.name == "txtnote") {
  //     this.noteTittle = event.target.value;
  //   }
  //   else if (event.target.name == "txtdesc") {
  //     this.noteDesc = event.target.value;
  //   }
  // }

  getAllNotes() {
    this.notesService.getALlNotes()
      .subscribe(resp => {
        console.log(resp);
        this.notesList= resp;

      },
        error => {
          console.log(error);

        })
  }

  addNotes() {
    console.log(this.note.title);
    this.notesList.push(this.note);
    this.notesService.addNotes(this.note)
      .subscribe(resp => {
        console.log(resp);
      },
        error => {
          console.log(error);

        })
    this.note = new Notes();
  }

  deleteNotes(){
    this.notesList.pop();

  }

}
