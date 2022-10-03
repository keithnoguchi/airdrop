const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LANPORTS_PER_SOL
} = require("@solana/web3.js")

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const privateKey = wallet._keypair.secretKey

console.log(publicKey)
console.log(privateKey)
