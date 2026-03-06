const repoOwner = "NightSkyYT"
const repoName = "sandys-hut"

async function loadEntries(){

    const response = await fetch(`https://api.github.com/repos/${NightSkyYT}/${sandys-hut}/issues`)
    const issues = await response.json()

    const container = document.getElementById("entries")
    container.innerHTML = ""

    issues.forEach(issue => {

        if(issue.labels.some(l => l.name === "guestbook")){

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
    `https://github.com/${NightSkyYT}/${sandys-hut}/issues/new?labels=guestbook&title=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`

    window.open(url, "_blank")

}

loadEntries()