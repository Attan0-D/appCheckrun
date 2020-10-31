import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    'providedIn': 'root',
})

export class ErrosGlobais implements ErrorHandler{

    constructor(private _alert: AlertController){}


    handleError(error: any): void {
        console.log( error);

        if(error instanceof Error){
            const er: Error = error;
            // CHAMANDO FUNCÃO DE ALERTA, PASSANDO ERRO COMO PARAM
            this.mostrarErro(er.message)
        }
        if(error instanceof HttpErrorResponse){
            let er: HttpErrorResponse = error;
            let msg;
            switch(er.status){
                case 404:
                    msg = 'Endereço não encontrado'
                    break;
                case 401:
                    msg = 'Servidor não autorizado'
                    break;
                default:
                    msg = er.error
            }
            this.mostrarErro(er.error)
        }
    }

    // MÉTODO DO ALERTA E SUAS CONFIGURAÇÕES
    async mostrarErro(msg: string) {
        const alert = await this._alert.create({
          cssClass: 'alert-padrao',
          header: 'Atenção',
          message: msg,
          buttons: ['OK']
        });
    
        await alert.present();
    } 
}