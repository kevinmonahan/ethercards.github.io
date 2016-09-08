---
layout: post
title: Our guarantee
date: 2016-09-08
---
Every Ether Card produced comes with this guarantee:

> If you can present an Ether Card with untouched scratch panel, but whose account has an outgoing transaction, or a card whose private key is incorrect or unreadable through no fault of your own, we will refund the lost funds, up to a total value of 5 ether, from our guarantee account. This guarantee is valid for one year from the date of manufacture of each card.

That means that if someone else somehow spends your funds before you scratch off the private key, or you scratch it off and find the key is unusable (for example, due to a printing error), we will refund any losses up to a maximum of 5 ether.

If you've already scratched the panel, we can't refund you for any unexpected withdrawals, because there's no way to verify how the transaction happened. Likewise, if you use sandpaper on your private key, feed it through a shredder, drag it behind a car, or give it to your dog, we can't be held responsible for any losses due to the key becoming illegible.

The [guarantee account](http://etherscan.io/address/0xcd6608b1291d4307652592c29bff7d51f1ad83d7) is funded by a deposit of 0.1 ether on every card printed. It's implemented as a smart contract, whose verified source can be [seen here](http://etherscan.io/address/0xcd6608b1291d4307652592c29bff7d51f1ad83d7#code), which has several useful features:

 - You can verify that a deposit was paid for your card by providing its address to the contract (or use [our verification tool](/#verify)), meaning you know we put down a deposit for every card we print.
 - Once deposited, funds can't be withdrawn by us until the guarantee expires, a year later.
 - The auditor account can pay out claims from the guarantee account. If a payout is made, that fact is recorded in the contract so you can see that for yourself.
 - Any claims are paid from the oldest deposits - meaning that we can't withdraw funds until the account has been made whole again.

Currently, we hold the position of both owner and auditor; as ether.cards grows and matures, we expect to find trustworthy individuals to appoint as independent auditors.

We think that the contract provides a good way to reduce the level of trust you have to place in us, both by providing compensation, and providing concrete proof of our good behaviour, and we hope you agree.
