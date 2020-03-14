import * as firebase from 'firebase';
import 'firebase/firestore';

export default class FirebaseWrapper {
  constructor() {
    this.initialized = false;
    this._firebaseInstance = null;
    this._firebaseWrapperInstance = null;
    this._firestore = null;
  }

  Initialize(config) {
    if (!this.initialized) {
      this._firebaseInstance = firebase.initializeApp(config);
      this._firestore = firebase.firestore();
      this.initialized = true;
      console.log('firebase initialized!');
    }
  }

  static GetInstance() {
    if (null == this._firebaseWrapperInstance) {
      this._firebaseWrapperInstance = new FirebaseWrapper();
    }
    return this._firebaseWrapperInstance;
  }

  async CreateNewDoc(collectionPath, doc) {
    //collectionPath is the 'posts'
    try {
      const ref = this._firestore.collection(collectionPath).doc();
      const timestamp = firebase.firestore.Timestamp.now().toDate();

      return await ref.set({ ...doc, createdAt: timestamp, id: ref.id });
    } catch (err) {
      console.log('something went wrong :(', err);
    }
  }

  async SetupCollectionListener(collectionPath, callback) {
    try {
      await this._firestore
        .collection(collectionPath)
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
          let container = [];
          querySnapshot.forEach(doc => container.push(doc.data()));
          return callback(container);
        });
    } catch (err) {
      console.log('something went bad in collectionlistener', err);
    }
  }
}
