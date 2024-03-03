function home() {
    window.location = "index.html"
}

const firebaseConfig = {
    apiKey: "AIzaSyCUgnAGv3wdgN3ocBj_rYZhBPxN99jwVFg",
    authDomain: "library-books-data.firebaseapp.com",
    databaseURL: "https://library-books-data-default-rtdb.firebaseio.com",
    projectId: "library-books-data",
    storageBucket: "library-books-data.appspot.com",
    messagingSenderId: "269240890264",
    appId: "1:269240890264:web:8641befad7ebf2466031ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("children").on('value', fetchData);
}

function fetchData(Snapshot) {
    data_object = Snapshot.val();
    console.log(data_object);
    lib_value = Object.values(data_object);
    lib_key = Object.keys(data_object);
    console.log(lib_value);
    document.getElementById("output").innerHTML = "";
    for (i = 0; i < lib_value.length; i++) {
        book_name = lib_value[i].book_name;
        number_copy = lib_value[i].number_copy;
        book_key = lib_key[i];
        h2_tag = `<h3 id=${book_key} onclick='callMe(this.id, ${number_copy})'> ${book_name} : ${number_copy} </h3> <hr> `
        document.getElementById("output").innerHTML += h2_tag;
    }
}

function callMe(id, copy) {
    text = "If You Want To Borrow This Book Click- Ok ... If You Don't Click- Cancel"

    if (copy == 0) {
        alert("Sorry No More Books Are Available");
    }
    else {
        if (confirm(text) == true && copy > 0) {
            copy = copy - 1;
            firebase.database().ref("children").child(id).update({ number_copy: copy });
            console.log(id);
        }
    }
}

getData();