import { useEffect } from 'react';
import { useRef } from 'react'
import './App.css'

function App() {
  //Premier test
  //Ont peu donner une valeur par défaut en paramètre à useRef , ici null pour notre champ email
  const emailInput=useRef(null);
  // Renvoie l'objet current
  console.log(emailInput);
//Au clic notre input...
  const handleClickEmailButton = () => {
 // Renvoie la balise input directement
    console.log(emailInput.current);
// Renvoie la valeur de l'input soit l'email entré par l'utilisateur
    console.log(emailInput.current.value);

  };
// Deuxième test

// A notre bouton de test ont attribue par défaut la valeur false
  const isButtonClicked=useRef(false);

// Au premier clic ont change la valeur de notre référence à "true"
// Au clic suivant la valeur étant égale à true le message dans la console renverra que le bouton est déja cliqué
// Pour se rendre compte de la différence avec useState , ont va afficher dans notre rendue la valeur de notre référence en dessous du bouton
  
const onClick = () => {
    if (isButtonClicked.current) {
    console.log("ALREADY clicked");
    return;
  }
   else {
    console.log("clicked");
    isButtonClicked.current=true;
   }
  };
    
  // Premier test
  // Dans cette exemple , la référence directe étant l'input, je peux interagir directement avec lui. Ici via 
  // useEffect le champ input est directement focus au montage du composant.

  // Ou  par exemple lui attribuer un background de couleur rouge .

 useEffect(() => {

  emailInput.current.focus(); 

  emailInput.current.style.background = "red";

 },[]);


  return (
    <div className="App">
      <h1>Email</h1>
      <input type="text" ref={emailInput}/>
      <button onClick={handleClickEmailButton}>Envoyer</button>

    
      <h1>Test button</h1>
      <button onClick={onClick}>Test</button> 
      {/* Ont peut voir que la valeur de notre reférence ne change pas car elle ne provoque aucun re-rendus, elle restera à sa valeur première "false" */}
      <p>{JSON.stringify(isButtonClicked)}</p>
    </div>
    
  )
}

export default App

// En conclusion

// UseRef permet d'interagir avec le DOM et de faire persister une valeur tout au long de notre composant. 
// Son but est de ne pas influancer le Render .Il ne provoque pas de re-rendus contrairement à useState.

// LES REF NE SONT PAS PREVUS POUR ETRE AFFICHER VIA LE JSX DANS LA VUE !!!