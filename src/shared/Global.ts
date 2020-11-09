export class Global {
    public static ApiUrl = "http://localhost:8000/api/";
    public static hideLoading( loading: HTMLIonLoadingElement ){
        loading.dismiss();
    }
}