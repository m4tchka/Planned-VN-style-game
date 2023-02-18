let ch1 = {
	0:{
        scene: [
            {},
			{},
			{
                Name: "",
                Dialogue: "",
                Question: "Where should we go ?",
                Options: [
                    {
                        Text: "Visit the densely forested valley",
                        Next: 1,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Take the meandering path along the cliffside",
                        Next: 2,
                        LuckChange: +2,
                        MinLuck: 0,
                    },
                    {
                        Text: "Follow the road straight through the forest",
                        Next: 3,
                        LuckChange: -1,
                        MinLuck: 0,
                    },
                ],
            }
		]
	},
	1:{
		scene: [
            {},
			{},
			{
				Name: "",
                Dialogue: "",
				Options: [
					{},
					{},
					{},
				],
			},
		],
	}
}