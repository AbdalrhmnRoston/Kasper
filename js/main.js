





// Header //
let header = document.querySelector('header');

// Expend Position Header With Class Name "header-fixed"

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 602) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
})

// Ul Links 
let ulLinksMobile = document.getElementById('header-links');
let headerLinks = document.querySelectorAll('#header-links li a');

headerLinks.forEach((el) => {
    el.addEventListener('click', () => {
        activeClass(headerLinks, el);
        // Close Ul Mobile On Click Any Link
        ulLinksMobile.classList.remove('active');
    });
})

function activeClass (arr, el) {
    arr.forEach((el) => el.classList.remove('active'))
    if (el) {
        el.classList.add('active');
    }
}

// Toggel Menu In Mopile
let iconToggel = document.querySelector('header i.toggle-menu');

// Show And Display Ul Links In Molbile
iconToggel.addEventListener('click', () => ulLinksMobile.classList.toggle('active'));

// Landing //
let landing = document.querySelector('.landing')

// Chieng Background Image With Bullets 
let bullets = document.querySelectorAll('.bullets li');


bullets.forEach((el) => {
    el.addEventListener('click', () => changeBackWithBullets(bullets, el));
})

function changeBackWithBullets (arr, el) {
    arr.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
    let chooset = el.getAttribute('data-target');
    landing.style.cssText = `background-image: url(../img/landing${chooset}.jpg);`;
}

// Chieng Background Image With Arrows Left And Right
let arrows = document.querySelectorAll('.landing > i');

arrows.forEach((el) => el.addEventListener('click', () => changeBackWithArrows(el)));

let gener = 1;
function changeBackWithArrows (el) {

// If Target Arrow === Right
    if (el.classList.contains('fas')) {
    ++gener
        if (gener <= 3) {
            landing.style.cssText = `background-image: url(../img/landing${gener}.jpg);` 
            changebullWithArrows(gener);
        } if (gener === 3) {
            gener = 0;
        }
    }
}
// Add Class Active In Bullets Target
function changebullWithArrows (num) {
    bullets.forEach((el) => el.classList.remove('active'));
    bullets[num - 1].classList.add('active')
}


// PORTFOLIO Section //

// Shuffle Photos 
let shufflePortf = document.querySelectorAll('.portfolio .shuffle li');
let shuffleBoxs = document.querySelectorAll('.portfolio .imgs-portfolio .box');


shufflePortf.forEach((el) => {
    el.addEventListener('click', () => {
    // Remove All Class Active Wiht Lis And Add From Target Li
    activeClass(shufflePortf, el)
    // Clear All Photos In Section
    clearAllPhotos();
    // Add Photos Target In Section
    showPhotosTarget(el)
    })
})

function clearAllPhotos () {
    shuffleBoxs.forEach((el) => el.style.display = 'none');
}

// Choose Target Groupe Image
function showPhotosTarget (el) {
    let target = el.getAttribute('data-target');
        shuffleBoxs.forEach((el) =>{
            target === 'all' ? el.style.display = 'block' : el.style.display = 'none';
            if (el.classList.contains(target)) {
                el.style.display = 'block';
            }
        });
}


// Stats Section //
let sectionStats = document.querySelector('.stats');
let statsNums = document.querySelectorAll('.stats .box .number');
let started = false;

window.onscroll = () => {
    // Run On Arrival In Section Stats
    if (window.pageYOffset >= sectionStats.offsetTop) {
        if (!started) {
            statsNums.forEach((el) => generStatsNums(el));
        }
        // If Counter Stats Is Done
        started = true;
    }
}

// Counter Stats Numbers
function generStatsNums (el) {
    let targetSave = el.getAttribute('data-save');
    let statsSetNum = setInterval(() => {
        el.textContent++;
        if (el.textContent === targetSave) {
            clearInterval(statsSetNum);
        }
    }, 3000 / targetSave)
}



// Section Skills //
let sectionSkils = document.querySelector('.skills');

// Skills Progres
let SkillsProgres = document.querySelectorAll('.skills .prog span');

// Fill Div Skill On Arrival Section
window.addEventListener('scroll', () => {
    window.pageYOffset >= sectionSkils.offsetTop ? progresSkills() : '';
})

function progresSkills () {
    SkillsProgres.forEach((el) => el.style.width = el.dataset.progress);
}