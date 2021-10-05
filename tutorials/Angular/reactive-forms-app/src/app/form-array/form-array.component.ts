import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }

  removeTopic(topic:FormControl) {
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
  ngOnInit() {

  }
}
