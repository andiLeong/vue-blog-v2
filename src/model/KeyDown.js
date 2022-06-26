class KeyDown {

    keys = [];

    fire() {
        this.keys.forEach((key) => {
            document.addEventListener("keydown", function (e) {
                if (e.key === key.key && e.keyCode === key.keyCode) {
                    // console.log(key)
                    key.fn(e)
                }
            })
        })
    }

    onEnter(callback) {
        this.keys.push({
            key: 'Enter',
            keyCode: 13,
            fn: callback
        })
        return this;
    }

    onEsc(callback) {
        this.keys.push({
            key: 'Escape',
            keyCode: 27,
            fn: callback
        })
        return this;
    }

    onArrowUp(callback) {
        this.keys.push({
            key: 'ArrowUp',
            keyCode: 38,
            fn: callback
        })
        return this;
    }

    onArrowDown(callback) {

        this.keys.push({
            key: 'ArrowDown',
            keyCode: 40,
            fn: callback
        })
        return this;
    }

    onForwardSlash(callback){
        this.keys.push({
            key: '/',
            keyCode: 191,
            fn: callback
        })
        return this;
    }
}


export default KeyDown;