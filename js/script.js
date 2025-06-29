
const usuarios = [
    { name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", phone: "1-770-736-8031", company: "Romaguera-Crona", address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough" } },
    { name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", company: "Deckow-Crist", address: { street: "Victor Plains", suite: "Suite 879", city: "Wisokyburgh" } },
    { name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", phone: "1-463-123-4447", company: "Hoeger LLC", address: { street: "Douglas Extension", suite: "Suite 847", city: "McKenziehaven" } },
    { name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", phone: "493-170-9623", company: "Robel-Corkery", address: { street: "Hoeger Mall", suite: "Apt. 692", city: "South Elvis" } },
    { name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", phone: "254-954-1289", company: "Keebler LLC", address: { street: "Skiles Walks", suite: "Suite 351", city: "Roscoeview" } }
];


function generarEdadAleatoria() {
    return Math.floor(Math.random() * (80 - 18 + 1)) + 18; 
}


usuarios.forEach(usuario => {
    usuario.age = generarEdadAleatoria();
    usuario.img = `https://thispersondoesnotexist.com/image?random=${Date.now() + Math.random()}`; // 
    usuario.address.full = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
});


const usuarioList = document.getElementById('usuario-list');
usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${usuario.img}" alt="${usuario.name}" onerror="this.src='https://via.placeholder.com/50';">
        <div>
            <strong>Nombre:</strong> ${usuario.name}<br>
            <strong>Edad:</strong> ${usuario.age}<br>
            <strong>Usuario:</strong> ${usuario.username}<br>
            <strong>Teléfono:</strong> ${usuario.phone}<br>
            <strong>Email:</strong> ${usuario.email}<br>
            <strong>Compañía:</strong> ${usuario.company}<br>
            <strong>Dirección:</strong> ${usuario.address.full}
        </div>
    `;
    usuarioList.appendChild(li);
});