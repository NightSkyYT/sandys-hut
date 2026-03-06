const repoOwner = "nightskyyt"
const repoName = "sandys-hut"

async function loadEntries() {

    const url = `https://api.github.com/repos/${nightskyyt}/${sandys-hut}/issues?state=open`

    const response = await fetch(url)
    const issues = await response.json()

    const container = document.getElementById("entries")
    container.innerHTML = ""

    issues.forEach(issue => {

        if(issue.labels.some(label => label.name === "guestbook")){

            const div = document.createElement("div")

            div.innerHTML =
            "<b>" + issue.title + "</b><br>" +
            issue.body + "<br><hr>"

            container.appendChild(div)

        }

    })

}

function sendMessage(){

    const name = document.getElementById("name").value
    const message = document.getElementById("message").value

    const url =
    `https://github.com/${nightskyyt}/${sandys-hut}/issues/new?labels=guestbook&title=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`

    window.open(url)

}

loadEntries()