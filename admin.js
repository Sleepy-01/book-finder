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

  function submit() {
    section = document.getElementById("section").value;
    book_name = document.getElementById("book_name").value;
    number_copy = document.getElementById("number_copy").value;

    firebase.database().ref("/").child(section).push({book_name:book_name, number_copy:number_copy});
  }