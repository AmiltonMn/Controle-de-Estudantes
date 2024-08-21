const botao = document.getElementById('theme');
const newImage = document.getElementById('newImage');
const userImage = document.getElementById('userImage');

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

function imgClick()
{
    newImage.click();
}

newImage.addEventListener('change', () =>
{
    if(newImage.files.lenght == 0)
    {
        return 0;
    }
    let reader = new FileReader();
    reader.readAsDataURL(newImage.files[0]);
    reader.onload = () => 
    (
        userImage.src = reader.result
    )
});