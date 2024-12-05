const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore({
  projectId: 'serta-mulia-443807',
  keyFilename: 'serta-mulia-443807-a3bc28886c5c.json',
});
 
async function storeData(id, data) {
  const db = new Firestore();
 
  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;