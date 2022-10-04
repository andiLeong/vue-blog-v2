class KeyDownForSearchModal
{
    enterPressed(e,slug) {
        if(!e.target.classList.contains('js-search-input')){
            return;
        }
        console.log('enter is press')
        if(slug){
            window.location.assign(`/posts/${slug}`)
        }
    }

    arrowUpPressed(event,searchItemIndex) {
        if(!event.target.classList.contains('js-search-input')){
            return;
        }
        console.log('up is press')
        searchItemIndex.previous()
    }

    arrowDownPressed(event,searchItemIndex) {
        if(!event.target.classList.contains('js-search-input')){
            return;
        }
        console.log('down is press')
        searchItemIndex.next()
    }

    forwardSlashPressed(e,modal){
        if( e.target.matches('input,textarea') || e.target.classList.contains('js-editable')){
            return;
        }
        console.log('slash is press')
        modal.opens()
    }

    escPressed(modalShow,fn){
        if(modalShow){
            console.log('esc pressed')
            fn()
        }
    }
}


export default KeyDownForSearchModal;