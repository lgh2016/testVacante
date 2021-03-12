import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<any>;

@Injectable({ providedIn: 'root' })
export class LoginService {
  public resourceUrl = environment.apiUrl + 'user/validarUsuario';
  constructor(
    // private accountService: AccountService,
    // private authServerProvider: AuthServerProvider,
    // private dialogRef: MatDialog
    protected http: HttpClient
  ) {}

  // login(credentials: any): Observable<Account | null> {
  // login(credentials: any): any {
  //   return this.authServerProvider.login(credentials).pipe(mergeMap(() => this.accountService.identity(true)));

  // }

  login(credentials: any): Observable<EntityResponseType> {
    // const copy = this.convertDateFromClient(hotel);
    return this.http
      .post<any>(this.resourceUrl, credentials, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => (res)));
  }

  logout(): void {
    // Hack para cerrar todos los dialogos
    // this.dialogRef.closeAll();
    // this.authServerProvider.logout().subscribe(null, null, () => this.accountService.authenticate(null));
  }
}
