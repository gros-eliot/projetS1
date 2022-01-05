//carrousel

function carrousel() {
    var carrousel__content = document.querySelectorAll('.carrousel__content');
    let d = 2000;
    let delta = 1000;

    carrousel__content.forEach(function(img,indice) {
        img.style.zIndex = carrousel__content.length - indice;
    });

    let anim153 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim153.add({
        targets: carrousel__content,
        translateX: [{value: '361', duration: d},
                     {value: '-361', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (2*delta)+d;
                         if (ind == 1) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'easeInOutSine',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}

/*IMAGE ARTICLE 1-1*/
function montrerLegende1() {
    return anime({
        targets: '.legende',
        translateY: -100,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function cacherLegende1() {
    return anime({
        targets: '.legende',
        translateY: 0,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}


/*IMAGE ARTICLE 1-2*/
function montrerLegende2() {
    return anime({
        targets: '.legende2',
        translateY: -100,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function cacherLegende2() {
    return anime({
        targets: '.legende2',
        translateY: 0,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}




/*IMAGE ARTICLE 1-3*/
function montrerLegende3() {
    return anime({
        targets: '.legende3',
        translateY: -100,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function cacherLegende3() {
    return anime({
        targets: '.legende3',
        translateY: 0,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;

}

/*IMAGE ARTICLE 1-4*/
function montrerLegende4() {
    return anime({
        targets: '.legende4',
        translateY: -100,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function cacherLegende4() {
    return anime({
        targets: '.legende4',
        translateY: 0,
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;

}
