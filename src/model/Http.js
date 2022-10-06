class Http {

    constructor() {
        if (this.constructor === Http) {
            throw new Error("Abstract classes can't be instantiated.");
        }
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

    call(closure, ...args) {
        if (typeof closure === 'function') {
            closure(...args)
        }
    }
}

export default Http;