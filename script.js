const button = document.getElementById('add-b')

function Person (name, age, photo) {
    this.name = name
    this.age = age
    this.photo = photo
    
}

button.onclick =  () =>{
    const pname = document.getElementById('name').value
    const page =  document.getElementById('age').value
    const file = document.getElementById('photo').files[0]
    console.log(file)
    const pphoto =  URL.createObjectURL(file)
    const human = new Person(pname, page, pphoto)
    console.log(human)
    Meple = document.createElement("div")
    Meple.className = "person"
    document.body.appendChild(Meple)
    Mname = document.createElement("h3")
    Mname.innerHTML = human.name
    document.body.lastChild.appendChild(Mname)
    Mage = document.createElement("p")
    Mage.innerHTML = "Age: " + human.age
    document.body.lastChild.appendChild(Mage)
    Mphoto = document.createElement("img")
    Mphoto.src = human.photo
    Mphoto.alt = "Something wrong"
    document.body.lastChild.appendChild(Mphoto)

}