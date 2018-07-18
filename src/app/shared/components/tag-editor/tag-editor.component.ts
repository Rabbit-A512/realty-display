import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutputType } from '@angular/core/src/view';

@Component({
  selector: 'app-tag-editor',
  templateUrl: './tag-editor.component.html',
  styleUrls: ['./tag-editor.component.css']
})
export class TagEditorComponent implements OnInit {
  @Input() tags: string[];
  @Output() tags_change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTag(new_tag: HTMLInputElement) {
    this.tags.push(new_tag.value);
    new_tag.value = '';
    this.tags_change.emit({ tags_string: this.tags.join(',') });
  }

  deleteTag(tag: string) {
    const i = this.tags.indexOf(tag);
    this.tags.splice(i, 1);
    this.tags_change.emit({ tags_string: this.tags.join(',') });
  }

}

export interface TagChangeEventArgs {
  tags_string: string;
}
