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

const getWalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet balance is ${walletBalance}`)
    } catch(e) {
        console.error(e)
    }
}

const main = async() => {
    await getWalletBalance()
}

main()
