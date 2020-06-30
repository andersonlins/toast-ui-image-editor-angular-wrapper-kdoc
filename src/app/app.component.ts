import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-ui-image-editor-demo';
  options = {
    includeUI: {
      urlUploadImage: 'http://localhost:8000/api/kdoc/step_instruction/1/upload_image/',
      idUploadImage: 2,
      initMenu: 'text',
      menuBarPosition: 'bottom'
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500
  };
}
