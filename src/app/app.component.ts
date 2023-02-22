import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cards';
  randomText:string="this is a test for checking your type duration";
  /*  result:boolean = false;*/
  inputText:string="";





  getText()
  {
    return this.randomText;
  }
  onChangeInput(text:string)
  {
    this.inputText=text;
    /*
    if(text===this.randomText)
    {
      this.result=true
    }
    else {
      this.result=false;
    }
     */
  }
  compare(letter:string,inputText:string)
  {
    if(!inputText)
    {
      return 'pending';
    }
    return inputText===letter?'correct':'incorrect';
  }
}
