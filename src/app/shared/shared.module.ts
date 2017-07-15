import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MdCardModule],
  exports: [CommonModule, MdCardModule]
})
export class SharedModule { }
