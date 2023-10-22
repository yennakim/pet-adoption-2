const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dino",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dinosaur"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dinosaur"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://loremflickr.com/300/200/dog"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dinosaur"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://loremflickr.com/300/200/cat"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dinosaur"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://loremflickr.com/300/200/cat"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dinosaur"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://loremflickr.com/300/200/cat"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://loremflickr.com/300/200/dog"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://loremflickr.com/300/200/cat"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://loremflickr.com/300/200/dinosaur"
    }
  ];


    const app = document.querySelector("#app");

    const renderToDom = (pets) => {
      let domString = "";      
      for (pet of pets) {
        domString += `<div class="card" style="width: 18rem;">
        <h5 class="card-header">${pet.name}</h5>
        <img src="${pet.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pet.color}</h5>
          <p class="card-text">${pet.specialSkill}</p>
          <p class="card-text"> ${pet.type}</p>
          <div class="card-footer text-body-secondary">
          <button type="button" class="btn btn-outline-danger" id="delete--${pet.id}">Delete</button>
      </div>
        </div>
      </div>`;
      }
      app.innerHTML = domString;

    }

renderToDom(pets);

const filter = (pets, typeString) => {
  let newPetArray = [];

  for(pet of pets) {
    if(pet.type === typeString) {
      newPetArray.push(pet);
    }
  }

  renderToDom(newPetArray);
}

const catsBtn = document.querySelector("#catsBtn");
const dogsBtn = document.querySelector("#dogsBtn");
const dinsBtn = document.querySelector("#dinosBtn");
const showAllBtn = document.querySelector("#showAllBtn");

catsBtn.addEventListener("click", () => {
  filter(pets, "cat");
  renderToDom(newPetArray);
})



showAllBtn.addEventListener("click", () => {
  renderToDom(pets);
})

dogsBtn.addEventListener("click", () => {
  filter(pets, "dog");
  renderToDom(newPetArray);
})

dinosBtn.addEventListener("click", () => {
  filter(pets, "dino");
  renderToDom(newPetArray);
})

// CREATE


const form = document.querySelector("form");

const createPet = (e) => {
    e.preventDefault();
  const newPetObj = {
  
      id: pets.length + 1,
      name: document.querySelector("#petName").value,
      color: document.querySelector("#petColor").value,
      specialSkill: document.querySelector("#petSkill").value,
      type: document.querySelector("#petType").value,
      imageUrl: document.querySelector("#petImage").value,

  }

    console.log(newPetObj.name);
    pets.push(newPetObj);
    console.log(pets.length);
    renderToDom(pets);
    form.reset();
}

form.addEventListener("submit", createPet);





// DELETE 


const deletePet = (e) => {
  // console.log(e); shows event properties; look at target property in dev tools

  if(e.target.id.includes("delete")) {

      // 1.  Determine which object I'm deleting by the ID (target.id)
            // id = "delete--3"

      const [, id] = e.target.id.split("--") // -- is the delineator which split the id into two strings (delete, and the id number)

      // const [firstString, secondString]
      // We don't care about the first string ("delete") and only want to grab the number (id number) which is why it is empty ([, id]); CALLED DESTRUCTURING


      // 2. Identify where in the array that object is by the index
      const index = pets.findIndex(obj => obj.id === Number(id));        // obj is a taco; obj.id is a number, and id is a string so we converted id into a number using Number()




      // 3. Remove the object from the array
      pets.splice(index, 1);
      // Splice takes 2 parameters, first one is index, second one is the number of items to remove



      // 4. Re-render with the array
      renderToDom(pets);

  }
}

app.addEventListener("click", deletePet);
