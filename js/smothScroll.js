const linksHead=document.querySelectorAll('.menu-list__link')

const mainScroll=document.querySelectorAll('.main__scroll')


linksHead .forEach(link => {
    link.addEventlistener('click',(event)=>{
        event.preventdefault()
        
        const ID = event.target.getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior:'smooth',
            block: 'start'
        })
    })
});