window.onload = function(){
    const caseSliderCtrlsBottom = document.querySelector('.caseSliderCtrls-bottom');

    function deletCurrentIcoActive(){
        const currentIcoActive = document.querySelector('.icoActive');
        const currentItemActive = document.querySelector('.itemActive');
        currentIcoActive.classList.remove('icoActive');
        currentItemActive.classList.remove('itemActive')
    }

    caseSliderCtrlsBottom.addEventListener('click', function(e){
        const elem = e.target.className.replace(/ctrlMob__ico ctrlMob__ico-/gi,'');
        //let barCtrls = document.querySelector('')
        let icoActive = null;
        let activItem = null;
        switch(elem){
            case 'mob':
                activItem = document.querySelector('.caseSliderItems__item-3')
                icoActive = document.querySelector('.icoCtrlActive-mob');
                deletCurrentIcoActive()
                activItem.classList.add('itemActive');
                icoActive.classList.add('icoActive');
                caseSliderCtrlsBottom.classList.add('barPosition-1')
                break;
            case 'tabl':
                activItem = document.querySelector('.caseSliderItems__item-2')
                icoActive = document.querySelector('.icoCtrlActive-tabl');
                deletCurrentIcoActive()
                activItem.classList.add('itemActive')
                icoActive.classList.add('icoActive');
                caseSliderCtrlsBottom.classList.remove('barPosition-1')
                break;
            case 'desc':
                activItem = document.querySelector('.caseSliderItems__item-1')
                icoActive = document.querySelector('.icoCtrlActive-desc');
                deletCurrentIcoActive()
                activItem.classList.add('itemActive')
                icoActive.classList.add('icoActive');
                caseSliderCtrlsBottom.classList.remove('barPosition-1')
                break;
            default: return null;
        }
    })
    








    //video slider
    $('.slidersBox').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        lazyLoad: 'progressive'
    });
}