import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/utils/api-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  src = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  states = [
    {name: 'Category', abbreviation: 'CT'},
    {name: 'Sub Category', abbreviation: 'SC'},  
  
  ];
  selected = "Category";
  categoryForm = this.fb.group({
    title: '',
    image : '',
    active: [null, Validators.required],
    parent: [null, Validators.required],
    descriptions: [null, Validators.required],
    address2: null,
    slug: [null, Validators.required],
    type: [null, Validators.required],
 
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder,private apiService : ApiServiceService) {}
  select(e){
    console.log(e);
    
  }
  onFileChanged(event) {
    const file = event.target.files[0];
    var type = file.name.split(".")
    var fileName = "image";
    // console.log(fileName);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var formData = {
        'name': fileName,
        'file': reader.result
      };
      this.apiService.postRequest('upload/image', formData).subscribe(
        (res) => {
          // console.log(res);
          if (res.status == "success") {
            this.src = this.apiService.baseUri + "image/" + res.result;
            // console.log(this.src);
            // this.isuploaded = true;
            this.categoryForm.patchValue({
              image: "image/" + res.result,
            });
          }
        });

    };

  }

  onSubmit() {
    alert('Thanks!');
  }
}
