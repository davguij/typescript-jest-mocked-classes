import { Http } from './common/http';

export class Users {
    private _http: Http;
    constructor() {
        this._http = new Http();
    }

    public async all() {
        // we actually don't need this intermediate step,
        // we could just
        // return this._http.get('users');
        // but then this method would be too dumb and not very interesting
        const users = await this._http.get('users');
        return users;
    }
}