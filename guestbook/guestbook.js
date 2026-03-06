const repoOwner = "NightSkyYT"
const repoName = "sandys-hut"

async function loadEntries() {

    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`)
    const issues = await response.json()

    const container = document.getElementById("entries")
    container.innerHTML = ""

    issues.forEach(issue => {

        const hasLabel = issue.labels.some(label => label.name === "guestbook")

        if (hasLabel) {

            const div = document.createElement("div")

            div.innerHTML =
                "<b>" + issue.title + "</b><br>" +
                issue.body + "<br><hr>"

            container.appendChild(div)

        }

    })

}

function sendMessage() {

    const name = document.getElementById("name").value
    const message = document.getElementById("message").value

    const url =
        `https://github.com/${repoOwner}/${repoName}/issues/new?labels=guestbook&title=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`

    window.open(url, "_blank")

}

loadEntries()