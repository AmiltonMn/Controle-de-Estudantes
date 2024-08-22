const botao = document.getElementById('theme');
const newImage = document.getElementById('newImage');
const userImage = document.getElementById('userImage');


botao.addEventListener('input', darkMode);

function darkMode()
{
    
    let botao = document.getElementById('theme');

    const card_text = document.getElementsByClassName('card-body');
    const card = document.getElementsByClassName('card');

    console.log(card_text.length);
    console.log(card_text);

    if(botao.checked)
    {

        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('span-theme').textContent = 'light_mode';
        for(let i = 0; i < card_text.length; i++)
        {
            card_text[i].style['color'] = "white";
            card[i].style['boxShadow'] = '10px 10px 0px 0px rgb(22, 22, 22)'
            card_text[i].style['transition'] = "color 500ms";
        }

    } else {

        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('span-theme').textContent = 'dark_mode';
        for(let i = 0; i < card_text.length; i++)
        {
            card_text[i].style['color'] = "black";
            card[i].style['boxShadow'] = '6px 6px 0px 0px #b7b7b7'
            card_text[i].style['transition'] = "color 500ms";
        }

    }
}

function imgClick()
{
    newImage.click();
}

newImage.addEventListener('change', () =>
{
    if(newImage.files.length == 0)
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