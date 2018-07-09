pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";   //the addresses of your deployed contracts are available through this library
import "../contracts/HelloCoin.sol";

contract TestHelloCoin {
	
	function testInitialBalanceUsingDeployedContract() public {  // if no visibility specified, defaulting to "public"
		HelloCoin hc = HelloCoin(DeployedAddresses.HelloCoin());

		uint expected = 666;

		Assert.equal(hc.balanceOf(tx.origin), expected, "Should have 666 token. Testing by DeployedContract");
	}

	function testInitialBalanceUsingNewContract() public {
		HelloCoin hc = new HelloCoin();

		uint expected = 666;

		Assert.equal(hc.balanceOf(tx.origin), expected, "Should have 666 token. Testing by New Contract");
	}
}
