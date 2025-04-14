import {
	connect,
	createConfig,
	http,
	watchAccount,
	reconnect,
	signMessage,
	disconnect,
	getAccount,
	getBalance,
	readContract,
	writeContract
} from '@wagmi/core'

import {
	injected
} from '@wagmi/connectors'

import {
	sepolia,
	blast
} from '@wagmi/core/chains'

import {
	formatEther,
	parseEther
} from "viem";

import {
	abi
} from './abi.js'


export const config = createConfig({
	chains: [sepolia],
	// chains: [blast],
	connectors: [injected()],
	transports: {
		[sepolia.id]: http(),
		// [blast.id]: http()
	},
})

class Web3 {
	/**
	 * 钱包地址
	 */
	address = ''
	/**
	 * 构造器
	 */
	constructor() {
		/**
		 * 监听用户及用户状态改变
		 */
		let that = this
		watchAccount(config, {
			onChange(account) {
				that.accountChanged(account)
				console.log('Account changed!', account)
			},
		})

		this.reconnect()
	}
	/**
	 * 用户及用户状态改变
	 * @param {Object} account 用户信息
	 */
	accountChanged(account) {
		if (account.isConnected) {
			this.address = account.address
		} else {
			this.address = ''
		}
	}
	/**
	 * 链接钱包
	 */
	async connect() {
		return await connect(config, {
			connector: injected(),
			chainId: config.chains[0].id
		})
	}
	/**
	 * 重新链接钱包
	 */
	async reconnect() {
		return await reconnect(config, {
			connector: [injected()]
		})
	}
	/**
	 * 断开钱包链接
	 */
	async disconnect() {
		return await disconnect(config)
	}
	/**
	 * 对消息进行签名
	 * @param {Object} msg 消息
	 */
	async signMessage(msg) {
		return await signMessage(config, {
			message: msg
		})
	}
	/**
	 * 获取当前钱包用户信息
	 */
	getAccount() {
		return getAccount(config)
	}

	/**
	 * 1000000000000000000n to  '1'
	 */
	formatEther(wei) {
		return formatEther(wei)
	}

	/**
	 * 1 to 1000000000000000000n
	 */
	parseEther(ether) {
		return parseEther(ether)
	}
	/**
	 * 获取余额
	 */
	async getBalance(addr, token = '') {
		return await getBalance(config, {
			address: addr,
			config: config,
			token: token
		})
	}

	/**
	 * 读合约
	 * @param {string} address 地址
	 * @param {string} functionName 方法名
	 * @param {array} args 参数，需要传数组 [args1, args2...]
	 * @returns 
	 */
	async readContract(address, functionName, args = []) {
		return await readContract(config, {
			abi: abi,
			address: address,
			functionName: functionName,
			args: args
		})
	}

	/**
	 * 写合约
	 * @param {string} address 地址
	 * @param {string} functionName 方法名
	 * @param {array} args 参数，需要传数组 [args1, args2...]
	 * @param {string} val value
	 * @returns 
	 */
	async writeContract(address, functionName, args, val = '') {
		return await writeContract(wagmiConfig, {
			abi: abi,
			address: address,
			functionName: functionName,
			args: args,
			value: parseEther(val)
		})
	}
}

export default web3 = new Web3()