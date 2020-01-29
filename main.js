const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imgUrl: 'http://www.duckshop.com/shop_cfg/rubberducks/badeente_1001243_0.jpg'
    },
    {
        color: 'yellow',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'worst kid at daycare',
        diet: 'onmivore',
        age: 4,
        featherNum: 24,
        name: 'Ginny',
        imgUrl: 'https://images.unsplash.com/photo-1499334758287-dc8133b315e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'female',
        isMigrator: true,
        socialStatus: 'ig baddie',
        diet: 'vegetarian',
        age: 17,
        featherNum: 2000,
        name: 'Karen',
        imgUrl: 'https://images.unsplash.com/photo-1516469790543-ca60051ec1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to settle down',
        diet: 'vegan',
        age: 24,
        featherNum: 2400,
        name: 'Steve',
        imgUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/501/10539/blue-Rubber-Duck-ad-line-3__84014.1569599632.jpg?c=2&imbypass=on'
    },
    {
        color: 'yellow',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'cutest little terror ever',
        diet: 'carnivore',
        age: 7,
        featherNum: 400,
        name: 'James',
        imgUrl: 'https://images.unsplash.com/photo-1499334758287-dc8133b315e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'has a twin brother that everyone confuses him with',
        diet: 'omnivore',
        age: 68,
        featherNum: 3,
        name: 'Marty',
        imgUrl: 'https://images.unsplash.com/photo-1551823715-5b73d8bbf0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'terrifies all other ducks',
        diet: 'cannibal',
        age: 205,
        featherNum: 100000,
        name: 'Nicholas',
        imgUrl: 'https://i5.walmartimages.com/asr/6e5f6760-bd7d-400f-9969-ba60803d03b4_1.a320117c1fe03e91698d818d2d7850e9.jpeg'
    },
    {
        color: 'yellow',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'might have an STD',
        diet: 'on a vodka cleanse',
        age: 21,
        featherNum: 1000,
        name: 'John',
        imgUrl: 'https://images.unsplash.com/photo-1554453954-3bca4671e5b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'
    }
]

// 8 ducks
// 5 male
// 3 female
// 5 rubber
// 3 real
// pick three colors... blue, yellow, white

console.log(ducks);

// PRINT TO DOM FUNC

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


// CARDS
const cardMaker = (divName, arr) => {
    let domStr = '';
    for (let i = 0; i < arr.length; i++) {
        domStr += '<div class="col-md-6 col-lg-4">';
       domStr += '  <div class="card">';
       domStr +=    `   <img src="${arr[i].imgUrl}" class="card-img-top" alt="...">`;
       domStr +=    '   <div class="card-body">';
       domStr +=        `   <h5 class="card-title">${arr[i].name}</h5>`;
       domStr +=        `   <p class="card-text">${arr[i].socialStatus}</p>`;
       domStr +=        `   <p class="card-text">${arr[i].diet}</p>`;
       domStr +=    '   </div>';
       domStr += '  </div>';
       domStr += '</div>';

    }
    printToDom(divName, domStr);
};


// INIT FUNC - WHEN PAGE LOADS
const init = () => {
    cardMaker('cardContainer', ducks);
}

init();