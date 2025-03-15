document.getElementById("s").addEventListener("click",function(){
    let name  = document.getElementById("name").value;
    let age  =document.getElementById("age").value;
    let mail = document.getElementById(" ......if you're eligible or not!!!");
    
    if (parseInt(age) >=  18 ){
        console.log(`${name } your'e  good to go through it!!`)
        alert(`${name } your'e eligible to enter in this webiste :`);
        window.location.href = 'home.html'
    }else if (parseInt(age)<=18){
        console.log(`${name} you're not eligible here to enter in the site with`);
        alert(`${name} you're not eligible here to enter in the site with`);
    }else{
       alert("invalid indo enter in our site ")
       
        console.log("enter a valid info its wrong ifo you giving us ");
    }
    
    
    alert(`${name} you're eligible you can enter here come on enter and use our site thanks for verification have a good day :`);
});

//home.html settings
