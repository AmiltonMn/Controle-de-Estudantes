let botao = document.getElementById('theme');
let newImage = document.getElementById('newUserImage');
let userImage = document.getElementById('userImage')
botao.addEventListener('input', darkMode);

function darkMode()
{
    let botao = document.getElementById('theme')
    if(botao.checked)
    {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('span-theme').textContent = 'light_mode';
    } else {

        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('span-theme').textContent = 'dark_mode';
    }
}

function upImage()
{
    newImage.click();
    if(newImage.files.length == 0)
    {
        return;
    }
    let reader = new FileReader();

    reader.readAsDataURL(newImage.files[0]);

    reader.onload = () => {
        userImage.src = reader.result;
    }
}