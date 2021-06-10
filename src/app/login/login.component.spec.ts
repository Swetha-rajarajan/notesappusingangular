
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
                FormsModule,
                ReactiveFormsModule, 
                
              ],
      declarations: [ LoginComponent ]

      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


 //it('should create Login Component', () => {
 //expect(component).toBeTruthy();
// });
 // it('should contains button', () => {
 //   let btn = fixture.debugElement.nativeElement.querySelector("button").textContent;

  //  console.log(btn);

 //   expect(btn).toBe("login")
//  }
  //);
});
