import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2';
import { Rol } from '../../shared/authority.constants';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
    
  matcher = new MyErrorStateMatcher(); 

  // @ViewChild('passFormInput', { static: true })
  // passFormInput: ElementRef;
  loginForm!: FormGroup;
    isLoading = false;

    constructor(
        // private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router
    ) {

    }
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            usuario: ['', [Validators.required]],
            contrasena: ['', Validators.required]
        });


      
    }

    
  send() {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Cargando...',
    });
    Swal.showLoading()
    this.isLoading = true;
    console.log('obj: ' + JSON.stringify(this.loginForm.value));

    // FIXME MANDAR EL VALOR CORRECTO LGH 
    this.loginService.login(this.loginForm.value).subscribe(
      result => this.onLoginSuccess(result),
      result => this.onLoginError(result)
    );
  }

  protected onLoginSuccess(result: any): void {
    // console.log(`SE ENCONTRO EL USUARIO...${JSON.stringify(result.body.resultado)}`);
    let loginPage = '';
  
    if(result.body.resultado === null){
      this.onLoginError(result)
      return;
    }
    if ( result.body.resultado !== null && result.body.resultado.id_rol === Rol.DISTRIBUIDOR ) {
      loginPage = '/sample';
      Swal.close();
      // localStorage.setItem('loginOk', JSON.parse(result.body.resultado));
    } 
    else {
      // loginPage = 'error';
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'No cuentas con permisos suficientes'
      })
    }
    console.log( 'redireccionar a: ' , loginPage);
    this.router.navigate([loginPage]);
    this.isLoading = false;
  }



  protected onLoginError(result: any): void {
    this.isLoading = false;
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña son incorrectos'
      })
    // console.log('Error: ' + this.isLoading);
    // this.passFormInput.nativeElement.focus();
    // this.passFormInput.nativeElement.blur();
    // this.sharedService.log(result);

    // this.snackbar.open('Nombre de usuario o la contraseña no son válidos', this.sharedService.tipoMensaje.aviso, {
    //   duration: this.sharedService.duracionTipoMensaje.aviso,
    // });

    // this.form.markAllAsTouched();
  }
}
