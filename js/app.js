const wrapper = document.getElementById("wrapper");
const title = document.getElementById("title")
wrapper.onclick = () => {
    const images = document.getElementsByClassName("image");

    if (images[0].classList.contains("out")) {
        for (let index = 0; index < images.length; index++) {
            images[index].classList.remove("out")
            title.classList.add("out")
        }

    } else {
        for (let index = 0; index < images.length; index++) {
            images[index].classList.add("out")
            title.classList.remove("out")
        }
    }
}