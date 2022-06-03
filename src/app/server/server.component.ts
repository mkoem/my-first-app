import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    //templateUrl: './server.component.html'
    template: `<div class="alert alert-info" role="alert"><h4>This is ServerComponent</h4></div>`,
    styles: [`
    h4 {color: red }
        `]
})
export class ServerComponent {

}