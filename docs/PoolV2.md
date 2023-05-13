---
slug: /poolv2
sidebar_position: 4
---

# PHX V2

## Introduction

PHX V2 is the next-generation PHX PoS Pool, deployed on Conflux eSpace. Its main improvement is to improve liquidity and yield, and it has the following characteristics:

* Support small amount of pledge, unlimited quantity, more flexible and convenient
* After CFX is pledged, the pledge certificate **cCFX** (Compound CFX) will be issued at the same time. cCFX is an ERC20 token that can circulate freely on the Conflux network and integrate into other DeFi protocols.
* Support compound interest, automatically reinvest every hour, and the yield is several percentage points higher than the current generation of PoS mining pools
* Support dynamic redemption, and real-time arrival can be achieved under Turbo redemption mode

## cCFX

cCFX is an ERC20 token and serves as the pledge certificate for PHX v2. When users pledge CFX into PHX v2, they will receive a certain amount of cCFX at the same time. cCFX represents the user’s pledge share in PHX v2.

All pledged CFX will be put into PoS, and PoS will generate income for the pledger. The income is automatically reinvested once an hour. The total amount of CFX corresponding to cCFX will continue to increase, so the value of cCFX will increase.

cCFX and CFX have an exchange ratio, which is initially 1. With the participation of PoS to obtain income, this ratio will gradually increase. When users redeem cCFX, they will exchange cCFX for CFX according to the current exchange ratio.

## PoS Oracle

PHX V2 contains a PoS Oracle smart contract that is deployed on Core Space and can provide PoS data for any contract, including:

1. Latest PoS Epoch height, Block height
2. PoS earnings of each node per Epoch
3. Current status data of each node: current votes, locked votes, unlocked votes, locking queue, and unlocking queue

Currently, the contract data is maintained by PHX administrators to ensure the accuracy and timeliness of the data. PHX v2 obtains the following data from this Oracle:

1. Node earnings data per Epoch, used to calculate APY
2. The node’s locked queue and unlocked queue are used to calculate the redemption time, which can greatly improve the accuracy of the estimated redemption time and speed up the redemption process.

The contract is open source, and any project can deploy its own PoS Oracle to provide PoS data for its own project.

## Redeem

Users can redeem cCFX held at any time. PHX V2 implements a dynamic redemption mechanism, and we will complete the user’s redemption request as soon as possible. In Turbo mode, users can immediately obtain the redeemed CFX without any waiting
In other cases, users need to wait for a period of time, which is calculated based on the current node’s locked queue and unlocked queue of the mining pool. Through PoS Oracle, we can calculate a much more accurate redemption time. This can speed up the redemption process.

### Turbo Mode

Turbo mode is a redemption mode of PHX V2. In this mode, users can immediately obtain the redeemed CFX without waiting. As a PoS mining pool, PHX V2 can use some funds to speed up the user’s redemption process, including:

* The part of the mining pool that is less than 1000 CFX cannot participate in PoS. This part of the funds can be used for fast redemption.
* The handling fee income of PHX V2 (10% of PoS income) can also be used for fast redemption.
* Newly pledged CFX will be used first for redemption requests, and the remaining part will be put into PoS.
* When performing the unpledge operation from PoS, only multiples of 1000 can be unpledged. Therefore, it is inevitable to unpledge more than the required amount of CFX. This part of the CFX can also be used for fast redemption.

## Handling Fee

PHX v2 will charge a 10% handling fee for the PoS income of the staking pool. The handling fee will be used for the following purposes:

* 50% of the handling fee will be used for repurchased and burned PHX
* rest of the handling fee will be used for fast redemption, covering the development and operation costs of PHX V2

## Farming

After the launch of PHX V2, in order to incentivize users who participate in pledging, Farming will be launched. All users holding cCFX will receive PHX tokens. The specific rules are as follows:

* Farming total amount is 24 million PHX, released in 24 months, 1 million PHX per month
* Distribute PHX according to the proportion of cCFX held by users, which can be claimed at any time
* PHX can be re-pledged into the Farming pool to increase PHX acquisition speed

After PHX V2 is launched, PHX and cCFX will also create transaction pairs on Swap. We will also provide incentives to liquidity providers for transaction pairs, and LP tokens of transaction pairs can also participate in Farming. Specific rules will be announced later.

## FAQs

#### 1. Why is the amount of cCFX I received less than the amount of CFX pledged?

The exchange ratio between cCFX and CFX is slightly greater than 1, and it increases with time. Therefore, the amount of cCFX obtained by pledging is usually less than the amount of CFX pledged.

#### 2. Can I redeem it immediately after pledging CFX?

Yes, cCFX can be redeemed at any time. However, there may be a certain waiting time for the redeemed CFX, and the specific waiting time can be viewed when redeeming.