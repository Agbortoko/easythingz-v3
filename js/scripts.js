window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    const logoImage = document.querySelector('.logo');
    const logoImageDark = document.querySelector('.logo-dark');

    const goUpBtn = document.getElementById("goUpBtn");

    logoImageDark.classList.add('d-none');

    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');

                logoImage.classList.add('d-none');
                logoImageDark.classList.remove('d-none');
                logoImageDark.classList.add('d-block');
    
            } else {
               
                mainNav.classList.remove('is-visible', 'is-fixed');
                logoImage.classList.remove('d-none');
                logoImage.classList.add('d-block');
                logoImageDark.classList.remove('d-block');
                logoImageDark.classList.add('d-none');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;


        // The scroll to to button

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            goUpBtn.style.display = "block";
        } else {
            goUpBtn.style.display = "none";
        }
    
       // When the user clicks on the button, scroll to the top of the document
       goUpBtn.addEventListener('click', ()=>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
       });

    });



   
   
})
