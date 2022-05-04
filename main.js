const links = {
    github: 'lcscostadev',
    youtube: 'GamesGVG',
    facebook: 'LucasCostaDaSilva1',
    instagram: 'lcscostaa',
    twitter: 'lcscostadev'
}

function changeSocialMediaLink() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${links[social]}`;

        // alert(li.children[0].href);
    }
}

changeSocialMediaLink();

function getGitHubInfo() {
    const url = `https://api.github.com/users/${links.github}`;

    fetch(url)
        .then(response => response.json()) //pegando do github e mostrando que é um arquivo json
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
    // then é uma promessa de pegar alguma coisa

}

getGitHubInfo();