export type DejavuFootball = {
  version: "0.1.0";
  name: "dejavu_football";
  instructions: [
    {
      name: "createAuthorizer";
      accounts: [
        {
          name: "authorizer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "eventsAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "instruction";
          type: {
            defined: "CreateAuthorizerInstruction";
          };
        }
      ];
    },
    {
      name: "updateAuthorizer";
      accounts: [
        {
          name: "authorizer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "instruction";
          type: {
            defined: "UpdateAuthorizerInstruction";
          };
        }
      ];
    },
    {
      name: "withdrawFromAuthorizer";
      accounts: [
        {
          name: "authorizer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "authorizerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "instruction";
          type: {
            defined: "WithdrawFromAuthorizerInstruction";
          };
        }
      ];
    },
    {
      name: "createOracle";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorizer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "instruction";
          type: {
            defined: "CreateOracleInstruction";
          };
        }
      ];
    },
    {
      name: "updateOracle";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorizer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "instruction";
          type: {
            defined: "UpdateOracleInstruction";
          };
        }
      ];
    },
    {
      name: "invalidateOracle";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleInvalidMedata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorizer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "reason";
          type: "string";
        }
      ];
    },
    {
      name: "createRoom";
      accounts: [
        {
          name: "oracle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "room";
          isMut: true;
          isSigner: false;
        },
        {
          name: "roomHistory";
          isMut: true;
          isSigner: false;
        },
        {
          name: "players";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "playerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorizer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payerTokenAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "instruction";
          type: {
            defined: "CreateRoomInstruction";
          };
        }
      ];
    },
    {
      name: "joinRoom";
      accounts: [
        {
          name: "authorizer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "room";
          isMut: true;
          isSigner: false;
        },
        {
          name: "roomHistory";
          isMut: true;
          isSigner: false;
        },
        {
          name: "players";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "playerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payerTokenAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "playerBet";
          type: {
            defined: "PlayerBetInstruction";
          };
        }
      ];
    },
    {
      name: "withdraw";
      accounts: [
        {
          name: "oracle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "room";
          isMut: true;
          isSigner: false;
        },
        {
          name: "roomHistory";
          isMut: true;
          isSigner: false;
        },
        {
          name: "players";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vaultAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "playerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorizer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "authorizerVaultAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "authorizerAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "fee";
            type: "u64";
          },
          {
            name: "id";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "oracle";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authorizer";
            type: "publicKey";
          },
          {
            name: "teamsIds";
            type: {
              array: ["u8", 2];
            };
          },
          {
            name: "results";
            type: {
              array: ["u8", 2];
            };
          },
          {
            name: "closedAt";
            type: "i64";
          },
          {
            name: "finishedAt";
            type: "i64";
          },
          {
            name: "isFinished";
            type: "bool";
          },
          {
            name: "isInvalid";
            type: "bool";
          },
          {
            name: "context";
            type: "u8";
          },
          {
            name: "contextId";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "oracleInvalidMetadata";
      type: {
        kind: "struct";
        fields: [
          {
            name: "reason";
            type: "string";
          }
        ];
      };
    },
    {
      name: "room";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oracle";
            type: "publicKey";
          },
          {
            name: "key";
            type: "i64";
          },
          {
            name: "isFinished";
            type: "bool";
          },
          {
            name: "initAmount";
            type: "u64";
          },
          {
            name: "playersCount";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "roomsHistory";
      type: {
        kind: "struct";
        fields: [
          {
            name: "room";
            type: "publicKey";
          },
          {
            name: "createdBy";
            type: "publicKey";
          },
          {
            name: "tokenAccount";
            type: "publicKey";
          },
          {
            name: "key";
            type: "u8";
          },
          {
            name: "withdrew";
            type: "bool";
          },
          {
            name: "version";
            type: "i16";
          },
          {
            name: "createdAt";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "roomPlayers";
      type: {
        kind: "struct";
        fields: [
          {
            name: "list";
            type: {
              vec: {
                array: ["u8", 3];
              };
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "CreateAuthorizerInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "i64";
          },
          {
            name: "fee";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "UpdateAuthorizerInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "fee";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "WithdrawFromAuthorizerInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "CreateOracleInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "i64";
          },
          {
            name: "teamsIds";
            type: {
              array: ["u8", 2];
            };
          },
          {
            name: "closedAt";
            type: "i64";
          },
          {
            name: "finishedAt";
            type: "i64";
          },
          {
            name: "context";
            type: "u8";
          },
          {
            name: "contextId";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "UpdateOracleInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "results";
            type: {
              array: ["u8", 2];
            };
          },
          {
            name: "isFinished";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "PlayerBetInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "resultTeamA";
            type: "u8";
          },
          {
            name: "resultTeamB";
            type: "u8";
          },
          {
            name: "playerRoomIndex";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "CreateRoomInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "i64";
          },
          {
            name: "playerBet";
            type: {
              defined: "PlayerBetInstruction";
            };
          },
          {
            name: "initAmount";
            type: "u64";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "OracleExpired";
    },
    {
      code: 6001;
      name: "OracleInvalid";
    },
    {
      code: 6002;
      name: "BetDuplicated";
    },
    {
      code: 6003;
      name: "UnauthroizedWithdraw";
    },
    {
      code: 6004;
      name: "ValueOverFlowed";
    }
  ];
};

export const IDL: DejavuFootball = {
  version: "0.1.0",
  name: "dejavu_football",
  instructions: [
    {
      name: "createAuthorizer",
      accounts: [
        {
          name: "authorizer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventsAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "instruction",
          type: {
            defined: "CreateAuthorizerInstruction",
          },
        },
      ],
    },
    {
      name: "updateAuthorizer",
      accounts: [
        {
          name: "authorizer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "instruction",
          type: {
            defined: "UpdateAuthorizerInstruction",
          },
        },
      ],
    },
    {
      name: "withdrawFromAuthorizer",
      accounts: [
        {
          name: "authorizer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "authorizerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "instruction",
          type: {
            defined: "WithdrawFromAuthorizerInstruction",
          },
        },
      ],
    },
    {
      name: "createOracle",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorizer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "instruction",
          type: {
            defined: "CreateOracleInstruction",
          },
        },
      ],
    },
    {
      name: "updateOracle",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorizer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "instruction",
          type: {
            defined: "UpdateOracleInstruction",
          },
        },
      ],
    },
    {
      name: "invalidateOracle",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleInvalidMedata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorizer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "reason",
          type: "string",
        },
      ],
    },
    {
      name: "createRoom",
      accounts: [
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "room",
          isMut: true,
          isSigner: false,
        },
        {
          name: "roomHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "players",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "playerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorizer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payerTokenAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "instruction",
          type: {
            defined: "CreateRoomInstruction",
          },
        },
      ],
    },
    {
      name: "joinRoom",
      accounts: [
        {
          name: "authorizer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "room",
          isMut: true,
          isSigner: false,
        },
        {
          name: "roomHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "players",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "playerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payerTokenAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "playerBet",
          type: {
            defined: "PlayerBetInstruction",
          },
        },
      ],
    },
    {
      name: "withdraw",
      accounts: [
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "room",
          isMut: true,
          isSigner: false,
        },
        {
          name: "roomHistory",
          isMut: true,
          isSigner: false,
        },
        {
          name: "players",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "playerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorizer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "authorizerVaultAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "authorizerAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "fee",
            type: "u64",
          },
          {
            name: "id",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "oracle",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authorizer",
            type: "publicKey",
          },
          {
            name: "teamsIds",
            type: {
              array: ["u8", 2],
            },
          },
          {
            name: "results",
            type: {
              array: ["u8", 2],
            },
          },
          {
            name: "closedAt",
            type: "i64",
          },
          {
            name: "finishedAt",
            type: "i64",
          },
          {
            name: "isFinished",
            type: "bool",
          },
          {
            name: "isInvalid",
            type: "bool",
          },
          {
            name: "context",
            type: "u8",
          },
          {
            name: "contextId",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "oracleInvalidMetadata",
      type: {
        kind: "struct",
        fields: [
          {
            name: "reason",
            type: "string",
          },
        ],
      },
    },
    {
      name: "room",
      type: {
        kind: "struct",
        fields: [
          {
            name: "oracle",
            type: "publicKey",
          },
          {
            name: "key",
            type: "i64",
          },
          {
            name: "isFinished",
            type: "bool",
          },
          {
            name: "initAmount",
            type: "u64",
          },
          {
            name: "playersCount",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "roomsHistory",
      type: {
        kind: "struct",
        fields: [
          {
            name: "room",
            type: "publicKey",
          },
          {
            name: "createdBy",
            type: "publicKey",
          },
          {
            name: "tokenAccount",
            type: "publicKey",
          },
          {
            name: "key",
            type: "u8",
          },
          {
            name: "withdrew",
            type: "bool",
          },
          {
            name: "version",
            type: "i16",
          },
          {
            name: "createdAt",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "roomPlayers",
      type: {
        kind: "struct",
        fields: [
          {
            name: "list",
            type: {
              vec: {
                array: ["u8", 3],
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "CreateAuthorizerInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "i64",
          },
          {
            name: "fee",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "UpdateAuthorizerInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "fee",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "WithdrawFromAuthorizerInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "CreateOracleInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "i64",
          },
          {
            name: "teamsIds",
            type: {
              array: ["u8", 2],
            },
          },
          {
            name: "closedAt",
            type: "i64",
          },
          {
            name: "finishedAt",
            type: "i64",
          },
          {
            name: "context",
            type: "u8",
          },
          {
            name: "contextId",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "UpdateOracleInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "results",
            type: {
              array: ["u8", 2],
            },
          },
          {
            name: "isFinished",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "PlayerBetInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "resultTeamA",
            type: "u8",
          },
          {
            name: "resultTeamB",
            type: "u8",
          },
          {
            name: "playerRoomIndex",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "CreateRoomInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "i64",
          },
          {
            name: "playerBet",
            type: {
              defined: "PlayerBetInstruction",
            },
          },
          {
            name: "initAmount",
            type: "u64",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "OracleExpired",
    },
    {
      code: 6001,
      name: "OracleInvalid",
    },
    {
      code: 6002,
      name: "BetDuplicated",
    },
    {
      code: 6003,
      name: "UnauthroizedWithdraw",
    },
    {
      code: 6004,
      name: "ValueOverFlowed",
    },
  ],
};
