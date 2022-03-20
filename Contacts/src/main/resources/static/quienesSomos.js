let contacts = [];

const addContact = (contact) => {
    contacts.push(contact);
};

const postContact = async (nombre, apellidos, mail, direccion, ciudad, provincia, cp) => {
    let request = await fetch("/contacts/", {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            apellidos: apellidos,
            mail: mail,
            direccion: direccion,
            ciudad: ciudad,
            provincia: provincia,
            cp: cp,
        }),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json", // Indico que mis datos van a estar en JSON
        },
        dataType: "json",
    });

    let contact = [nombre, apellidos, mail, direccion, ciudad, provincia, cp];
    if (request.status === 200) {
        let data = await request.json();
        addContact(contact);
    }
};

const getContact = async () => {
    let request = await fetch("/contacts/");
    if (request.status === 200) {
        let data = await request.json();
        addContact(data);
    }
};

$("#liveAlertBtn").on("click", () => {
    parseContact();
});

const parseContact = () => {
    const nombre = $("#fname").val();
    const apellidos = $("#lname").val();
    const mail = $("#inputEmail").val();
    const direccion = $("#inputAddress").val();
    const ciudad = $("#inputCity").val();
    const provincia = $("#inputState").val();
    const cp = $("#inputZip").val();

    // Post new contact
    postContact(nombre, apellidos, mail, direccion, ciudad, provincia, cp);
};