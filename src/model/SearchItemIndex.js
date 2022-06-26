import {ref} from "vue";

class SearchItemIndex {

    currentIndex = null

    constructor(items = []) {

        this.currentIndex = ref(null)
        this.items = items
    }

    next() {
        return this.whenHasCurrentIndex( () => this.increase())
    }

    previous() {
        return this.whenHasCurrentIndex( () => this.decrease(),false)
    }

    hasCurrentIndex(){
        return this.currentIndex.value !== null;
    }

    whenHasCurrentIndex(fn,toFirst = true){
        if (this.hasCurrentIndex()) {
            return fn();
        }

        return toFirst ? this.toFirst() : this.toLast();
    }

    decrease(){
        if (this.currentIndex.value === 0) {
            return this.toLast()
        }
        return this.currentIndex.value--;
    }

    increase(){
        if (this.currentIndex.value === this.lastIndex()) {
            return this.toFirst()
        }

        return this.currentIndex.value ++;
    }

    toFirst(){
        return this.currentIndex.value = 0
    }

    toLast(){
        this.currentIndex.value = this.lastIndex()
    }

    clear(){
        this.currentIndex.value = null
    }

    lastIndex(){
        return this.items.length === 0 ? null : this.items.length - 1  ;
    }

    setItems(items){
       this.items = items
    }








}


export default SearchItemIndex;