import {ref} from "vue";

class SearchItemIndex {

    currentIndex = null
    // totalItems = 4;

    constructor(items = []) {

        // console.log(currentIndex)
        // this.currentIndex = currentIndex
        this.currentIndex = ref(null)
        // this.lastIndex = items.length === 0 ? null : items.length - 1  ;
        this.items = items
        // this.lastIndex = 3
    }

    next() {
        // console.log(this.hasCurrentIndex())
        if (this.hasCurrentIndex()) {
            if (this.currentIndex.value === this.lastIndex()) {
                return this.toFirst()
            }

            return this.currentIndex.value ++;
        }

        return this.toFirst()
    }

    previous() {

        if (this.hasCurrentIndex()) {
            if (this.currentIndex.value === 0) {
                return this.toLast()
            }
            return this.currentIndex.value--;
        }

        return this.toLast()
    }

    hasCurrentIndex(){
        return this.currentIndex.value !== null;
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