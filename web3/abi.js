const states = {
    view: 'view', // 只读不写区块链状态
    pure: 'pure', // 不会读写区块链状态
    payable: 'payable', // 可收 Ether 
    nonpayable: 'nonpayable' // 不可收 Ether
}

const types = {
    function: 'function',
    event: 'event',
    constructor: 'constructor',
    fallback: 'fallback'
}

export const abi = [
    { //  name
        type: types.function,
        inputs: [],
        name: 'name',
        outputs: [{ type: 'string' }],
        stateMutability: states.view,
    },
    { // 代币
        type: types.function,
        inputs: [],
        name: 'symbol',
        outputs: [{ type: 'string' }],
        stateMutability: states.view,
    },
    { // 授权
        type: types.function,
        name: 'approve',
        stateMutability: states.nonpayable,
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        outputs: [{ type: 'bool' }],
    },
    { // 单位
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ type: 'uint8' }],
        stateMutability: 'view',
    },
    { // 初始发行量
        type: 'function',
        inputs: [],
        name: 'initialSupply',
        outputs: [{ type: 'uint256' }],
        stateMutability: 'view'
    },
    { // 总供给
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ type: 'uint256' }],
        stateMutability: 'view',
    },
    { // 获取余额
        type: 'function',
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'recipient', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    { // 转账事件
        type: 'event',
        inputs: [
            { name: 'sender', type: 'address' },
            { name: 'recipient', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'Transfer',
        outputs: [{ type: 'bool' }],
        stateMutability: 'nonpayable'
    },

    //   业务 abi - lpBond 债券质押
    {
        type: 'function',
        name: 'lpBond',
        inputs: [
            { name: 'random', type: 'uint256' },
            { name: 'cstAmountMin', type: 'uint256' },
        ],
        outputs: [],
        stateMutability: states.payable
    },

    //   业务 abi - stake 质押
    {
        type: 'function',
        name: 'stake',
        inputs: [
            { name: 'cstAmount', type: 'uint256' },
            { name: 'cstMinAmount', type: 'uint256' },
            { name: 'random', type: 'uint256' },
        ],
        outputs: [],
        stateMutability: states.payable
    },

    // 解除质押
    {
        type: 'function',
        name: 'unStake',
        inputs: [
            { name: 'id', type: 'uint256' },
        ],
        outputs: [],
        stateMutability: states.nonpayable
    },
    // 提取收益
    {
        type: types.function,
        name: 'claimProfit',
        inputs: [
            { name: 'id', type: 'uint256' },
            { name: 'random', type: 'uint256' },
        ],
        outputs: [],
        stateMutability: states.nonpayable
    },

    //
    {
        type: types.function,
        name: 'accelerateProfit',
        inputs: [
            { name: 'id', type: 'uint256' },
            { name: 'day', type: 'uint256' },
        ],
        outputs: [],
        stateMutability: states.nonpayable
    },
    {
        type: types.function,
        name: 'getFreeRisk',
        inputs: [],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getNextRebase',
        inputs: [],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getEthBalance',
        inputs: [{ name: 'user', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getEthPrice',
        inputs: [],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getStakeParams',
        inputs: [{ name: 'cstAmount', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getLpBondParams',
        inputs: [{ name: 'ethAmount', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getStoreEthAndAddLpParams',
        inputs: [{ name: 'ethAmount', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getStoreUSDAndAddLpParams',
        inputs: [{ name: 'usdAmount', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    // IDO 相关 参与IDO
    {
        type: 'function',
        name: 'idoInvest',
        inputs: [
            { name: 'random', type: 'uint256' },
        ],
        outputs: [],
        stateMutability: states.payable
    },
    {
        type: types.function,
        name: 'getInvestAmount',
        inputs: [],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'claimCst65',
        inputs: [],
        outputs: [],
        stateMutability: states.nonpayable
    },
    {
        type: types.function,
        name: 'claimCst35',
        inputs: [],
        outputs: [],
        stateMutability: states.nonpayable
    },
    {
        type: types.function,
        name: 'getPart65',
        inputs: [{ name: 'user', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getPart35',
        inputs: [{ name: 'user', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getClaimed65',
        inputs: [{ name: 'user', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getClaimed35',
        inputs: [{ name: 'user', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    // 国库多签, 董事会 0 = 没有加入董事会， 1 = 已加入董事会
    {
        type: types.function,
        name: 'getDirector',
        inputs: [],
        outputs: [{ type: 'bool' }],
        stateMutability: states.view
    },
    // 加入董事会
    {
        type: types.function,
        name: 'joinDirector',
        inputs: [],
        outputs: [],
        stateMutability: states.nonpayable
    },
    // 赞成反对董事会提案， random=列表的字段， status=0反对， status=1赞成
    {
        type: types.function,
        name: 'passProposal',
        inputs: [{ name: 'random', type: 'uint256' },{ name: 'status', type: 'uint256' }],
        outputs: [],
        stateMutability: states.nonpayable
    },
    // 0 = 没有投票， 需要结合getDirector=1
    {
        type: types.function,
        name: 'getPassStatus',
        inputs: [{ name: 'random', type: 'uint256' },{ name: 'addr', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    // 获取董事会列表中赞成和反对数量， status = 0反对数量， status = 1赞成数量
    {
        type: types.function,
        name: 'getPass',
        inputs: [{ name: 'random', type: 'uint256' },{ name: 'status', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },

    {
        type: types.function,
        name: 'getUserProfit',
        inputs: [{ name: 'addr', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getUserClaimProfit',
        inputs: [{ name: 'addr', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getProfitById',
        inputs: [{ name: 'id', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getClaimProfitById',
        inputs: [{ name: 'id', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getReleaseDay',
        inputs: [{ name: 'addr', type: 'address' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getLeftTimeById',
        inputs: [{ name: 'id', type: 'uint256' }],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    // 计算待领取收益
    {
        type: types.function,
        name: 'calculationProfit',
        inputs: [
            { name: 'id', type: 'uint256' },
        ],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },
    {
        type: types.function,
        name: 'getEthPrice',
        inputs: [],
        outputs: [{ type: 'uint256' }],
        stateMutability: states.view
    },

]


// TODO 第一版本测试 sepolia 测试网

export const USDB_CONTRACT_ADDR = '0xe52071B8D41AaC74381B9949D72C1Dc61cd2CbE1'
export const CST_CONTRACT_ADDR = '0x36Fdc78c6ecf0503F7106859eE7e1CC0A27a00b5'
export const SCST_CONTRACT_ADDR = '0x67eA732f24Cd9667add90b978c772aA25bF35a92'
export const DAO_CONTRACT_ADDR = '0x0bFcC3D45A7b70A7925A7b76e61CCADF92cd9184'
export const FRONT_CONTRACT_ADDR = '0x3C7E3f5a7550ce5753307a86623D2b2E4484CC5E'
export const IDO_CONTRACT_ADDR = '0xde4980E817f45A7163D01eb73fbB659fb82A91ae'
export const DEPOSIT_CONTRACT_ADDR = '0xFD659F31DA5Ba155368D5fEA71980188e090a64C'
export const WETH_CONTRACT_ADDR = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'
export const LP_CONTRACT_ADDR = '0x46B9D50faBb83F8ec39d61dB77C54e018fB2D95e'
export const TREASURY_CONTRACT_ADDR = '0xfc6fA8b07Da92b93555171332cb4a244347a794F'