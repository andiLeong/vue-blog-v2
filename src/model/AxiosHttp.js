import Http from '@/model/Http';

class AxiosHttp extends Http {
    fire() {
        this.call(this.beforeCallBack);
        axios[this.method](this.url, this.payload)
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

export default AxiosHttp;
