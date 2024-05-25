ScrollReveal({ 
    reset: true,
    distance :"60px",  
    duration :2000,
    delay :400 ,
     easing:'ease-in-out'
 });
    ScrollReveal().reveal('.banner1 h1,.course1 h2,.about1 img,#about2 h2,.card2_hed h2,.gallery1 h2', {   origin:'top'});
    ScrollReveal().reveal('.about2', {  origin:'bottom'  });
    ScrollReveal().reveal('.card,.gallery img,.gallery2 img,#card1,#card2,#card3', {  opacity:0, scale:0.8 ,interval: 600  });

