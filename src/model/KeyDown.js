class KeyDown {

    keys = [];

    fire() {
        this.keys.forEach((key) => {
            if (key.multiple === false) {
                this.registerSingleKeydown(key)
            } else {
                this.registerMultipleKeydown(key)
            }
        })
    }

    onEnter(callback) {
        this.keys.push(this.key('Enter', callback))
        return this;
    }

    onControlZ(callback) {
        this.keys.push(this.multipleKey(['Control', 'z'], callback))
        return this;
    }

    onEsc(callback) {
        this.keys.push(this.key('Escape', callback))
        return this;
    }

    onArrowUp(callback) {
        this.keys.push(this.key('ArrowUp', callback))
        return this;
    }

    onArrowDown(callback) {
        this.keys.push(this.key('ArrowDown', callback))
        return this;
    }

    onForwardSlash(callback) {
        this.keys.push(this.key('/', callback))
        return this;
    }

    key(key, fn, multiple = false) {
        key = this.wrapsToArray(key)
        return {
            key,
            fn,
            multiple,
        }
    }

    registerSingleKeydown(key) {
        document.addEventListener("keydown", function (e) {
            if (e.key === key.key[0]) {
                // console.log(key)
                key.fn(e)
            }
        })
    }

    wrapsToArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
        return [value];
    }

    multipleKey(key, fn) {
        return this.key(key, fn, true);
    }

    registerMultipleKeydown(key) {
        let keysPressed = {};
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;

            if (keysPressed[key.key[0]] && keysPressed[key.key[1]]) {
                console.log(event.key);
                key.fn(event)
            }
        });

        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
    }
}


export default KeyDown;