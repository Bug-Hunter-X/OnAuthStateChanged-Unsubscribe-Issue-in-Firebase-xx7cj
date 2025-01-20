let unsubscribe;

const auth = getAuth(); // Assuming you've initialized Firebase

const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('User is signed in:', uid);
    } else {
      console.log('User is signed out');
    }
  });
};

const cleanupAuthListener = () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null; // optional - to avoid accidental future calls
  }
};

// Example usage: Call setupAuthListener when needed, and cleanupAuthListener when done.
setupAuthListener();

// ... some code using the authentication state

cleanupAuthListener();