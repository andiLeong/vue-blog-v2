import {ref} from "vue";

class SearchItemIndex {

    currentIndex = null
    // totalItems = 4;

    constructor(totalItems) {

        // console.log(currentIndex)
        // this.currentIndex = currentIndex
        this.currentIndex = ref(null)
        this.lastIndex = totalItems - 1;
        // this.lastIndex = 3
    }

    next() {
        // console.log(this.hasCurrentIndex())
        if (this.hasCurrentIndex()) {
            if (this.currentIndex.value === this.lastIndex) {
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
        // console.log('inside tofirst ' + this.currentIndex)
        return this.currentIndex.value = 0
    }

    toLast(){
        this.currentIndex.value = this.lastIndex
    }







}


export default SearchItemIndex;