import appUrl from '../../appconfig';
import Http from '@/model/Http';

class FetchHttp extends Http {
    getOption() {
        let method = this.method || 'GET';
        if (method === 'GET' || method === 'GET') {
            return {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        }

        return {
            method,
            body: JSON.stringify(this.payload),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }

    fire() {
        this.call(this.beforeCallBack);

        let url = appUrl + this.url;
        fetch(url, this.getOption())
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                this.call(this.failure, response);
                this.call(this.afterCallBack);
                throw Error(response.statusText);
            })
            .then((response) => {
                this.call(this.success, response);
                this.call(this.afterCallBack);
            })
            .catch((error) => {
                this.call(this.failure, error);
                this.call(this.afterCallBack);
            });
    }
}

export default FetchHttp;
