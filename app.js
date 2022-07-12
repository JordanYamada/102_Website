function hungry() {
    let text = "Craving some Barbecue?";
    if (confirm(text) == true) {
      alert("Check out the photo above!");
    } 
    else {text = "How about a Burger?";
        if (confirm(text) == true) {
            alert("Check out the photo below!");
          } 
          else {
            alert("Are you sure you're at the right webpage?");
        }
    }
}

let counter = 0
function secretTruth() {
    if (counter == 0) {
        alert("Oh! You found me!");
        counter++;    
    }
    else if (counter == 1) {
        alert("Shhhh... Nothing to see here.");
        counter++;
    }
    else if (counter == 2) {
        alert("If I tell you a secret, will you stop clicking me?");
        counter++; 
    }
    else if (counter == 3) {
        alert("You want to know what America's REAL favorite food is?");
        counter++; 
    }
    else if (counter == 4) {
        alert("It's BACON!!!");
        counter++; 
    }
    else {
        window.open("https://bensabaconlovers.com/best-bacon-memes/");
    }
}


let text = "So, you've come for the food?";
    if (confirm(text) == true) {
      alert("You've come to the right place!");
    } 
    else {text = "Maybe you're feeling a little hungry?";
        if (confirm(text) == true) {
            alert("You might like it here.");
          } 
          else {text = "Really?! Aren't you even a little curious?";
          if (confirm(text) == true) {
              alert("I knew you couldn't resist.");
            } 
            else {alert("Too bad! You're visiting this page, anyways!");
          }
        }
    }
