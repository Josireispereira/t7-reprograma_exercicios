import protocolo from './api'

export function postTweets(tweet, token) {
    // console.log('conteudo', tweet)
    // console.log('token', token)
    const url = `/tweets?X-AUTH-TOKEN=${token}`
    return protocolo.post(url, tweet)
}

// o post recebe dois parâmetros, link e eobjeto, o get só recebe a url