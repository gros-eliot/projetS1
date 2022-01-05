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
