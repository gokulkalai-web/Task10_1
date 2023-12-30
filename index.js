const dogapiUrl = "https://dog.ceo/api/breeds/image/random"
const catapiUrl =  "https://api.thecatapi.com/v1/images/search?api_key=live_c660lWljceASEfAcLoQmFchc2cFnBq1CHfmD32XfKMurzBEGa1FseqKxWznfqkhh"
const homeElements = document.querySelectorAll('.home');
const petElements = document.querySelectorAll('.Pets');
const contactElements = document.querySelectorAll('.contact');
const dogImgElement = document.querySelector('.dog > img');
const catImgElement = document.querySelector('.cat > img');
const dogElement = document.querySelector('.dog');
const catElement = document.querySelector('.cat');
const btnElement = document.querySelector('.footer > .btn');
const mainElement = document.querySelector('.mainContent');


console.log(homeElements)
//based upon query it will retrun a array from that array we need to iterate and do a add Eventlistener process.
homeElements.forEach((element) => {
    console.log(element)
    //Add the eventlistener to the homeElement
    element.addEventListener('click', () => {
        console.log("clicked the home button");
        btnElement.classList.add("btn");
        mainElement.innerHTML = '<h2><i>Welcome to Pet Village Shop....</i></h2><h3>Lets Explore Pets....</h3>';
    });
});

//This url function to fetch the url and get the dogs and cat images
const urlFunction = (DogUrl, catUrl) => {
    petElements.forEach((element) => {
        element.addEventListener('click', () => {
            btnElement.classList.remove("btn");
            console.log(btnElement);
            mainElement.innerHTML = "";
            console.log("clicked the pets button");
            dogElement.style.display = "flex";
            dogElement.style.flexDirection = "column";
            catElement.style.display = "flex";
            catElement.style.flexDirection = "column";
            dogImgElement.src = DogUrl;
            dogImgElement.alt = "Issue with the dog image";
            catImgElement.src = catUrl;
            catImgElement.alt = "Issue with the cat image";
            mainElement.append(dogElement, catElement);
            console.log(mainElement);
            document.body.append(mainElement);
        });
    });
};

try {
    const getDogs = async () => {
        const response = await fetch(dogapiUrl);
        const responseData = await response.json();
        const cat_response = await fetch(catapiUrl);
        const cat_responseData = await cat_response.json();
        urlFunction(responseData.message, cat_responseData[0].url);
    };
    getDogs();
} catch (err) {
    console.log(err);
}

//Contact Details when we click the contact button the will display the contact details.
contactElements.forEach((element) => {
    //addEventListener to the contact element.
    element.addEventListener('click', () => {
        mainElement.innerHTML = "";
        btnElement.classList.add("btn");
        mainElement.innerHTML = '<h2><i>More Details....</i></h2><h3>Contact: 90000 XXXXX</h3>';
    });
});

const btns = document.querySelectorAll('.btn');
console.log(btns);
//when we clikc the button, it will display new the dog and cat images 
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btnElement.classList.remove("btn");
        console.log(btnElement);
        mainElement.innerHTML = "";
        console.log("clicked the pets button");
        dogElement.style.display = "flex";
        dogElement.style.flexDirection = "column";
        catElement.style.display = "flex";
        catElement.style.flexDirection = "column";
        const get = async () => {
            const response = await fetch(dogapiUrl);
            const cat_response = await fetch("https://api.thecatapi.com/v1/images/search?api_key=live_c660lWljceASEfAcLoQmFchc2cFnBq1CHfmD32XfKMurzBEGa1FseqKxWznfqkhh");
            const responseData = await response.json()
            const cat_responseData = await cat_response.json();
            dogImgElement.src = responseData.message;
            dogImgElement.alt = "Issue with the dog image";
            catImgElement.src = cat_responseData[0].url;
            catImgElement.alt = "Issue with the cat image";
        };
        get();
        mainElement.append(dogElement, catElement);
        console.log(mainElement);
        document.body.append(mainElement);
    });
});
