// Declare your arrays here
let collegeContainer = document.querySelector(".collegeContainer")
let collegeContainerInside = document.querySelector(".collegesList")
let submitButton = document.querySelector(".submit");
let size;
let cost;
let focusChoice;
let newCollege;


let colleges = [
{name: "Harvard University",
img: "https://www.commonapp.org/static/80721cd9dec87ee2b050dd6cdee862b4/harvard-university_116.jpg",
size: "large",
focus: "libArts",
cost:'high',
},
{name: "Yale University",
img: "https://admissions.yale.edu/sites/default/files/styles/flexslider_full/public/2010_05_10_19_03_37_central_campus_1.jpg?itok=1hVNjje6",
size: "large",
focus: "libArts",
cost:'high',
},
{name: "University of Notre Dame",
img: "https://www.usnews.com/dims4/USNEWS/59db7d6/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F53%2Ffff707d9cd1e8e4d55454e57f6c8b7%2Fcollege-photo_154.jpg",
size: "small",
focus: "libArts",
cost: "medium",
},
{name: "Indiana University",
img: "https://admissions.indiana.edu/images/social-media/virtual-tour-fall-social-share.jpg",
size: "large",
focus: "both",
cost: "low",
},
{name: "University of Southern Indiana",
img: "https://www.usi.edu/media/52jh5jzs/library-fountain.jpg?format=webp&width=1000&height=667",
size: "small",
focus: "both",
cost:"low",
},
{name: "Rose Hulman Institute of Technology",
img: "https://media.beam.usnews.com/f3/ff1c3c204b89801905a1f7226db9c9/college-photo_34374.jpg",
size: "small",
focus: "stem",
cost:"medium",
},
{name: "Georgia Tech",
img: "https://www.georgiaencyclopedia.org/wp-content/uploads/2021/02/georgia-tech_002.jpg",
size: "small",
focus: "stem",
cost:"medium",
},
{name: "IUPUI",
img: "https://www.iupui.edu/images/home/redesign/campus-scenics.jpg",
size: "small",
focus: "stem",
cost:"low",
},
{name: "University of Evansville",
img: "https://www.appily.com/sites/default/files/styles/max_1200/public/images/hero/college/150534_hero.jpg?itok=qUayzqgY",
size: "small",
focus: "libArts",
cost:"low",
},
{name: "Purdue University",
img: "https://www.purdue.edu/home/wp-content/uploads/2024/02/about-banner.jpg",
size: "large",
focus: "stem",
cost:"low",
},
{name: "University of Kentucky",
img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_315,q_75,w_375/v1/crm/lexington/115-3-0533_jpeg_17578D3E-A47B-C716-167AD535BEDF18C3-175782a9c0f89f7_1757ca71-e231-2fdd-c479c10ccca0b13a.jpg",
size:"large",
focus: "libArts",
cost: "medium",
},
{name: "University of California: Los Angeles",
img: "https://pyxis.nymag.com/v1/imgs/7a6/825/edd93dff41c44f61a2452a119f29fedee2-ucla-.1x.rsocial.w1200.jpg",
size: "large",
focus: "libArts",
cost: "high",
},
{name: "Williams College",
img: "https://www.usnews.com/dims4/USNEWS/b931113/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F47%2Fae80f6eb2801a59e941594a24d7c8e%2Fcollege-photo_13368.jpg",
size: "small",
focus: "libArts",
cost: "high",
},
{name: "Ivy Tech Community College",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6qa5DEvO9QFpl2pLoWPAimQ9V27Vca9b6Q&s",
size: "small",
focus: "both",
cost: "low",
},
{name: "Carnegie Mellon University",
img: "https://www.cmu.edu/assets/images/site/meta-image-cmu.jpg",
size: "small",
focus: "stem",
cost: "high",
},
{name: "MIT",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapTmka1mz_TPvs-Et7Zsxo_C3mt8FFH89vQ&s",
size: "large",
focus: "stem",
cost: "high",
},
{name: "Wabash College",
img: "https://www.usnews.com/dims4/USNEWS/4c16db8/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F92%2Fa541eb14c19387de31ba394af39c2e%2Fcollege-photo_35209.jpg",
size: "small",
focus: "libArts",
cost: "medium",
},
{name: "Ball State University",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEctzzflSEP0dWpoSU0JqDrXbV20BcMQ4OMA&s",
size: "small",
focus: "stem",
cost: "low",
},
{name: "Northwestern University",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0hjgXiX9w-BUH577krdeqa8IsqdqnJDplw&s",
size: "large",
focus: "both",
cost: "high",
},
{name: "DePauw University",
img: "https://www.depauw.edu/files/pages/depauw-university-2.jpg",
size: "small",
focus: "both",
cost: "high",
},
{name: "Harvey Mudd College",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8v17gCPy0ygYLlcnG7QKCy4y3opLveos-UQ&s",
size: "small",
focus: "stem",
cost: "high",
},
{name: "UT Austin",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp03n6VDet3FNskquwDjUR5R-SfZhG3w63EA&s",
size: "large",
focus: "stem",
cost: "medium",
},
{name: "UNC Chapel Hill",
img: "https://www.appily.com/sites/default/files/styles/max_1200/public/images/hero/college/199120_hero.jpg?itok=GCr9dKl6",
size: "large",
focus: "stem",
cost: "medium",
},
{name: "University of Florida",
img: "https://www.ufl.edu/wp-content/uploads/sites/5/2022/12/2017-04-12_Aerial_UF-0122-scaled.webp",
size: "large",
focus: "libArts",
cost: "low",
},
];

console.log(colleges[colleges.length-2])

let filteredColleges = [];

/* Display settings*/
function showColleges(college){
    return `
    <div class="collegeProfile">
    <div class="college-pic">
    <img class="collegeImg" src="${college.img}">
    </div>
        <div class="collegeInfo">
            <p><b>Name: </b>${college.name}</p>
            <p><b>Size: </b>${college.size}</p>
            <p><b>Focus: </b>${college.focus}</p>
            <p><b>Cost: </b>${college.cost}</p>
        </div>
    </div>
    `
}

// Make sure to declare your HTML elements as variables! 

// Submit Button 
submitButton.addEventListener("click", function() {
    collegeContainer.style.display = "block";
    collegeContainerInside.innerHTML='';
    size = document.querySelector(".optionSize").value
    focusChoice = document.querySelector(".optionFocus").value;
    cost = document.querySelector(".optionCost").value;
    


/* Filter Colleges list for colleges */
    filteredColleges = colleges.filter(college => 
        college.size === size && college.focus === focusChoice && college.cost === cost
    );
    console.log(filteredColleges)

/* display filtered list */
    filteredColleges.forEach((college) => {
        let newCollege = document.createElement('div');
        newCollege.innerHTML = showColleges(college)
        collegeContainerInside.appendChild(newCollege);
        newCollege.classList.add("collegeBox")
    });
    if (filteredColleges.length == 0){
        collegeContainerInside.innerHTML="We're sorry, we couldn't find any colleges matching that description :(";
    }
});