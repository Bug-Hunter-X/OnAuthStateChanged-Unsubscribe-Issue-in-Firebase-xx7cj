const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User is signed in:', uid);
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  }
});

// unsubscribe from the listener when you no longer need it
// This prevents memory leaks and ensures that your app behaves as expected.
// unsubscribe();