const wrapper = document.querySelector(".wrapper")

const func = async () => {
    const reasponse = await fetch("https://dummyjson.com/users")

    const data = await reasponse.json()

    console.log(data.users)


    data.users.map((el) =>{
        wrapper.innerHTML += `
        <div class="card">
        <img src=${el.image} alt="">
        <h2>${el.firstName} ${el.lastName}</h2>
        <h3>${el.birthDate}</h3>
        <b>${el.university}</b>
        <p>${el.email}</p>
        <button> BUy </button>
    </div>

        
        `

    })

}
func()


