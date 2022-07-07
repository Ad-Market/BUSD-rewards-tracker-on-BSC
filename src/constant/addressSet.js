
const addressSet = {
    BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    USDT: "0x55d398326f99059ff775485246999027b3197955",
    USDC: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    Dai: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    ETH: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    PAX: "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
    BLK: "0xc9341b9882689FE9C12515F8EAE8d4C02F5AC2d8"
}

const walletSet = [
    {name: 'BUSD', addr: "0xe9e7cea3dedca5984780bafc599bd69add087d56"},
    {name: 'FEG', addr: "0xacfc95585d80ab62f67a14c566c1b7a49fe91167"},
    {name: 'Cake', addr: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"},
    {name: 'BLK', addr: "0xc9341b9882689FE9C12515F8EAE8d4C02F5AC2d8"},
    {name: 'USDT', addr: "0x55d398326f99059fF775485246999027B3197955"}
]

const swapSet = [
    {name: 'BNB', addr:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},
    {name: 'BUSD', addr: "0xe9e7cea3dedca5984780bafc599bd69add087d56"},
    {name: 'USDT', addr: "0x55d398326f99059ff775485246999027b3197955"},
    {name: 'USDC', addr: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"},
    {name: 'Dai', addr: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"},
    {name: 'ETH', addr: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"},
    {name: 'PAX', addr: "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094"},
    {name: 'BLK', addr: "0xc9341b9882689FE9C12515F8EAE8d4C02F5AC2d8"}
]

const pairaddressSet= {
    BUSD_BNB: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    BNB_BUSD: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    USDT_BNB: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE",
    BNB_USDT: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE",
    USDC_USDT: "0xec6557348085aa57c72514d67070dc863c0a5a8c",
    USDT_USDC: "0xec6557348085aa57c72514d67070dc863c0a5a8c",
    USDC_BUSD: "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1",
    BUSD_USDC: "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1",
    USDT_BUSD: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
    BUSD_USDT: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
    Dai_BUSD: "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489",
    BUSD_Dai: "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489",
    BNB_POW: "0xc22bfA061F55D65A529C9277A68Ff8E43429f26f",
    BLK_BNB: "0x54debbc39f867eea3dddea81f6f0e46fd4ff151b",
    ETH_USDC: "0xEa26B78255Df2bBC31C1eBf60010D78670185bD0",
    USDC_ETH: "0xEa26B78255Df2bBC31C1eBf60010D78670185bD0",
    ETH_BNB: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
    BNB_ETH: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc"
}

module.exports = {
    addressSet,
    walletSet,
    swapSet,
    pairaddressSet
};
