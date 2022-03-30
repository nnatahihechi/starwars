function main() {
    // console.log("GHDHGDJ");

    let result = fetch("https://swapi.dev/api/people")
        .then(function(res) {
            console.log(result)
            return res.json()
        }).then(function(data) {
            let arr = data.results

            let container = document.getElementById('container');
            // let container = document.querySelector('container');

            for (let i = 0; i < arr.length; i++) {
                // arr.forEach(chr => {
                console.log(arr[i].name);


                let card = document.createElement("div");
                card.setAttribute('class', 'person');
                let img = document.createElement("img");
                img.setAttribute('src', `./image/starwarschar/${arr[i].name}.jpeg`);


                let id = arr[i].url;

                // let imageTitle = document.createElement("p");
                // imageTitle.textContent = arr[i].name;
                card.appendChild(img);
                // card.appendChild(imageTitle);
                container.appendChild(card);

                let popupdiv = document.createElement('div');
                popupdiv.setAttribute('class', 'popup');
                popupdiv.innerText = arr[i].name;

                let charDetails = document.createElement('p');
                charDetails.setAttribute('class', 'popuptext');
                charDetails.setAttribute('id', 'char-' + id);
                charDetails.innerText = `Name: ${arr[i].name}
                                    Gender: ${arr[i].gender}
                                    Height: ${arr[i].height}`;

                popupdiv.appendChild(charDetails);

                popupdiv.addEventListener('click', (element) => {
                    let popup = document.getElementById('char-' + id);
                    popup.classList.toggle("show");
                });

                card.appendChild(popupdiv);

            }

        }).catch((error) => {
            if (error) {
                console.log(error.message)
            }
        })
        .catch(err => {
            if (err) console.log("error fetching users")
        });
    console.log(result)
}

main();
module.exports = { main }