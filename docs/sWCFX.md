---
slug: /swcfx
sidebar_position: 5
---

# sWCFX

## Introduction

**sWCFX** is a modern WCFX deployed on Conflux eSpace. It is fully compatible with WCFX and has the following new features:

1. Add multiple convenient methods: `depositTo`, `withdrawTo`, `withdrawFrom`, `depositToAndCall`, `approveAndCall`, `transferAndCall`
2. Support FlashMint (ERC3156)
3. Support ERC20Permit (EIP-2612)
4. Provide annualized yield of 2%-6%.

## How it works

When the issuance of sWCFX exceeds a certain amount (such as 1M), a certain proportion (such as 50%) of newly deposited CFX will be staked into PoS to enhance the security of the network. At the same time, PoS earnings can also be obtained, and the earnings will be distributed to sWCFX holders. The exchange ratio between sWCFX and CFX is 1:1, and can be exchanged at any time.

By setting a reasonable staking ratio, most redemption requests can be exchanged in real time. For large redemption requests in extremely special scenarios, it is usually guaranteed to be completed within 24 hours.

We will also set up an independent liquidity pool to further ensure the real-time redemption of sWCFX

sWCFX holders can earn estimated annualized returns of 2%-6%. All earnings can be withdrawn in real-time, and unclaimed earnings will also be used to increase the liquidity of sWCFX redemption

## Use Cases

Currently, most of the use cases for WCFX can theoretically be replaced by sWCFX. DeFi protocols can use sWCFX as a CFX ERC20 wrapper and can earn additional income to increase their revenue or reward users.

If DeFi projects want to provide flash loan services, they can also integrate sWCFX.

sWCFX supports ERC20Permit (EIP-2612), which can save the gas cost of the Approve operation if DeFi projects.

## FAQs

### Whether sWCFX has a run risk

sWCFX has more than 100% reserve, so there is no run risk. For extremely special large redemptions, it may not be possible to complete in real-time, but it is usually completed within 24 hours.
