import {useSearchModalStore} from '@/store/SearchModal'

class SearchModal{

    constructor() {
        this.store = useSearchModalStore()
        this.open = this.store.show
    }

    opens(){
        return this.store.setTo()
    }

    close(){
        return this.store.setTo(false)
    }

    // toggle() {
    //
    //     if (this.isOpen()) {
    //         return this.close()
    //     }
    //
    //     return this.opens()
    // }

    isOpen(){
        return this.store.show
       // return this.open
    }

    // isClose(){
    //    return !this.isOpen()
    // }

}


export default SearchModal;