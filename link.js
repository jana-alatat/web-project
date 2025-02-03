const signin = document.querySelector("#show-signin").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

const close = document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

const submit = document.querySelector("#show-submit").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

function openPopup(){
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".popup").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closePopup(){
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = "auto";
}