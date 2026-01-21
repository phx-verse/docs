---
sidebar_position: 5.3
---

# FAQs

## What is the estimated time for withdrawing MON from the Monad pool?

PhxVerse Monad LSD utilizes a dedicated liquidity pool to facilitate withdrawals. If the requested withdrawal amount is within the pool's available balance, the transaction is processed **instantly**. Should the amount exceed the available liquidity, the protocol submits a withdrawal request to the Proof-of-Stake (PoS) validator network. In such cases, the processing time aligns with the PoS network's speed, typically ranging **between 5 to 10 hours**.

In summary, withdrawal times are determined by the request size relative to the pool's liquidity. This process remains equal to or faster than traditional Monad staking withdrawals—often twice to four times more efficient than FastLane redemption times—and incurs no additional service fees.

## How are staking rewards distributed?

Upon staking, users receive cMON tokens. The exchange rate between cMON and MON is designed to appreciate as staking rewards accrue within the protocol. Consequently, rewards are automatically reflected in the increasing value of cMON relative to MON, eliminating the need for manual reward claims.
When MON is withdrawn, the final amount is calculated using the prevailing exchange rate, ensuring the user receives their initial principal plus all accumulated rewards.

## Are there any supplementary fees associated with withdrawals?

No, there are no additional fees for withdrawing assets from the protocol.

## Is the cMON to MON exchange rate fixed?

No, the exchange rate is dynamic and increases over time as rewards are earned. The valuation is determined by the following formula:

Rate (cMON / MON) = Total MON in the protocol / Total cMON issued

As the "Total MON" grows through continuous staking rewards, the cMON / MON ratio appreciates accordingly.

## What is the protocol fee structure?

The protocol applies a 5% commission on generated staking rewards. This rate is significantly more competitive than the industry standard of 10% charged by most traditional Monad Validators.

## What are the key advantages of PhxVerse compared to traditional Monad Validators?

1. **Competitive Fee Structure**: We charge only a 5% commission on rewards, whereas traditional validators typically charge 10% or more.
2. **Enhanced Withdrawal Velocity**: Withdrawals are processed instantly if liquidity is available; alternatively, users can swap cMON for MON through decentralized exchanges (DEXs) for immediate liquidity.
3. **Optimized Yields (Auto-Compounding)**: The protocol automatically re-stakes rewards to leverage the power of compounding. This results in long-term yields that are approximately 1.5% higher than those of traditional validators.
4. **Superior Liquidity**: By issuing cMON, the protocol unlocks the value of staked assets, allowing them to be traded or utilized in other DeFi applications.
5. **Operational Simplicity**: The system automates the re-staking process, removing the burden of manual reward management from the user.

## What are the primary sources of funding for the liquidity pool?

The liquidity pool is maintained through several key streams:

1. **Initial Seed Liquidity**: Provided by the PhxVerse team to ensure early-stage efficiency.
2. **Protocol Revenue**: A portion of the protocol's fee income is recycled back into the pool to support growing demand.
3. **Internal Buffer**: New user deposits that are pending delegation to the PoS network.
4. **Consolidated Rewards**: Accumulated rewards that have been withdrawn from the PoS network but not yet re-delegated.
