var Voting = artifacts.require("./Voting.sol");
var ECRecovery = artifacts.require("./ECRecovery.sol");

const sigUtil = require("eth-sig-util")

var alice_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Alice"}])
var bob_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Bob"}])
var carol_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Carol"}])


sg
adf
sef
asdf
asdfa
ads
