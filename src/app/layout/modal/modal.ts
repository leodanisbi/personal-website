import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  animations: [fadeInAnimation]
})
export class Modal {
  @Input() title: string = '';
  @Output() closeModal = new EventEmitter<void>();

  // Método para cerrar el modal al hacer clic en el fondo
  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal.emit();
    }
  }

}
