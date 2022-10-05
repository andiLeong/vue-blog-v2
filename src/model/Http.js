import appUrl from '../../appconfig';

class Http {

    constructor(http) {
        this.http = http
    }

    setContentType(type) {
        this.contentType = type;
        return this;
    }

    via(method) {
        this.method = method
        return this;
    }

    payload(payload) {
        this.payload = payload
        return this;
    }

    to(url) {
        this.url = url
        return this;
    }

    before(before) {
        this.beforeCallBack = before
        return this;
    }

    after(after) {
        this.afterCallBack = after
        return this;
    }

    onSuccess(success) {
        this.success = success
        return this;
    }

    onFailure(failure) {
        this.failure = failure
        return this;
    }

    getOption() {

        let method = this.method || 'GET'
        if (method === 'GET' || method === 'GET') {
            return {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        }

        return {
            method,
            body: JSON.stringify(this.payload),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }

    fire() {

        this.call(this.beforeCallBack);

        let url = appUrl + this.url
        fetch(url, this.getOption())
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                this.call(this.failure, response)
                this.call(this.afterCallBack)
                throw Error(response.statusText);
            })
            .then(response => {
                this.call(this.success, response)
                this.call(this.afterCallBack)
            })
            .catch(error => {
                this.call(this.failure, error)
                this.call(this.afterCallBack)
            });

    }

    call(closure, ...args) {
        if (typeof closure === 'function') {
            closure(...args)
        }
    }
}

export default Http;