function changerCouleur (id)
{
    let couleur = "";

    if (id == "blue")
      couleur = "orange";
    else
      couleur = "blue";
    document.getElementById(id).style.background = couleur;
}

function changerText (id)
{
    let text = "Je veux devenir ";

    if (id == "blue")
      text = text + "blue";
    else
      text = text + "orange";
    document.getElementById(id).innerHTML = text;
}

function changerId (id)
{
    let newId = ""

    if (id == "blue")
      newId = "orange";
    else
      newId = "blue";
    document.getElementById(id).id = newId;
}
