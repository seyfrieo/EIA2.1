function Eingabefeld(): void {
  let eingabe: string = prompt("Gimme your name, please!.", "");
  if (eingabe != null) {
    document.getElementById("Type").innerHTML =
      "Herzlichen Dank, " + eingabe + ". Deine Daten wurden erfolgreich an die NSA weitergeleitet.";
  }
}
