import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  // // PAra formulario en plantillas
  // public usuario: any = {
  //   nombre: '',
  //   email: ''
  // }

  // enviar(){
  //   console.log(this.usuario);
  // }

  formularioContacto: FormGroup;
  // usuarioActivo: any = {
  //   nombre: 'Pedro',
  //   apellido: 'Perez',
  //   dni: '12345678'
  // };

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      dni: [''],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
    // this.formularioContacto.get('apellido')?.setValidators( [Validators.required, Validators.email]);


    /*
    this.formularioContacto.get('apellido')?.clearValidators();
    this.formularioContacto.get('apellido')?.updateValueAndValidity(); 
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni,
    })
    // this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo);
    this.formularioContacto.get('nombre')?.disable();
    // this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();
    */

    // suscripciones
    this.formularioContacto.valueChanges.subscribe( valor =>{
      console.log(valor);
      
    })
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto);
  }
}
