export async function getArticles() {
    let endpoint = "https://newsapi.org/v2/top-headlines?country=ca&apiKey=07c6fbfaabad4a2680ac8705d22ba7cc"
    let result = await fetch(endpoint)
    let json = await result.json()
    return json
}
