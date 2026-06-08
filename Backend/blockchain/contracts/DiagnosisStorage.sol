// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title DiagnosisStorage
/// @notice Stores SHA-256 hashes of AI-generated diagnoses on-chain

contract DiagnosisStorage {

    mapping(address => string[]) private diagnosisHashes;
    mapping(address => uint256[]) private diagnosisTimestamps;

    event DiagnosisStored(
        address indexed patient,
        string hash,
        uint256 timestamp
    );

    /// @notice Store a new SHA-256 diagnosis hash for the caller
    function storeDiagnosis(string memory _hash) external {

        diagnosisHashes[msg.sender].push(_hash);

        diagnosisTimestamps[msg.sender].push(block.timestamp);

        emit DiagnosisStored(
            msg.sender,
            _hash,
            block.timestamp
        );
    }

    /// @notice Retrieve all hashes stored by the caller
    function getDiagnoses()
        external
        view
        returns (
            string[] memory hashes,
            uint256[] memory timestamps
        )
    {

        hashes = diagnosisHashes[msg.sender];

        timestamps = diagnosisTimestamps[msg.sender];
    }

    /// @notice Verify whether a specific hash exists
    function verifyHash(string memory _hash)
        external
        view
        returns (bool)
    {

        string[] memory stored =
            diagnosisHashes[msg.sender];

        for (uint i = 0; i < stored.length; i++) {

            if (
                keccak256(bytes(stored[i])) ==
                keccak256(bytes(_hash))
            ) {

                return true;
            }
        }

        return false;
    }
}