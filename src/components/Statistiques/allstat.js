/*import React, { useState } from "react";
import QRCode from "react-qr-code";
import QrReader from "react-qr-reader";

const allstat = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [password, setPassword] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSplitClick = () => {
    // Générer un mot de passe alphanumérique aléatoire
    const newPassword = generateQRCodePassword();
    setPassword(newPassword);
    setShowQRCode(true);
  };

  const handleShowClick = () => {
    if (enteredPassword === password) {
      // Le mot de passe est correct, afficher le contenu
      // Remplacez par votre logique souhaitée
      console.log("Le contenu est affiché");
    } else {
      // Le mot de passe est incorrect, afficher un message d'erreur
      setErrorMessage("Mot de passe incorrect. Veuillez réessayer.");
    }
  };

  const generateQRCodePassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 10;
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  };

  const handleScan = (data) => {
    if (data === password) {
      // Le mot de passe scanné à partir du code QR correspond
      setEnteredPassword(data);
    } else {
      // Le mot de passe scanné à partir du code QR est incorrect
      setErrorMessage("Mot de passe du code QR incorrect. Veuillez réessayer.");
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <button onClick={handleSplitClick}>Scinder</button>
      <button onClick={handleShowClick}>Afficher</button>

      {showQRCode && (
        <div>
          <QRCode value={password} />
          <p>Scanner le code QR avec votre téléphone</p>
          <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
        </div>
      )}

      {errorMessage && <p>{errorMessage}</p>}

      {showQRCode && (
        <div>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Entrez le mot de passe du code QR"
          />
        </div>
      )}
    </div>
  );
};

export default allstat;
*/