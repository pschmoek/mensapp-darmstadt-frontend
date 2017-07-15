import { NgModule } from '@angular/core';
import { 
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdDatepickerModule,
  MdButtonModule,
  MdIconModule,
  MdSelectModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MdCardModule, MdInputModule,
    MdToolbarModule, MdDatepickerModule, ReactiveFormsModule,
    MdButtonModule, MdIconModule, MdSelectModule],
  exports: [CommonModule, MdCardModule, MdInputModule,
    MdToolbarModule, MdDatepickerModule, ReactiveFormsModule,
    MdButtonModule, MdIconModule, MdSelectModule]
})
export class SharedModule { }
