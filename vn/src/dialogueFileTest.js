let ch1Test = {
    0: {
        scene: [
            {
                Name: "Test Name",
                Dialogue: "Test Dialogue",
                Background: `/backgrounds/test.jpg`,
            },
            {
                Name: "Test Name2",
                Dialogue: "Test Dialogue2",
            },
            {
                Name: "Test Name2",
                Dialogue: "Test Dialogue2",
                Question: "Test question ??",
                Options: [
                    {
                        Text: "Option 1",
                        Next: 1,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2",
                        Next: 2,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3",
                        Next: 3,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
    1: {
        scene: [
            {},
            {},
            {
                Name: "",
                Dialogue: "",
                Options: [
                    {
                        Text: "Option 1",
                        Next: 4,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2",
                        Next: 5,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3",
                        Next: 6,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
    2: {
        scene: [
            {},
            {},
            {
                Name: "",
                Dialogue: "",
                Options: [
                    {
                        Text: "Option 1 leading to 4",
                        Next: 4,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2 leading to 5",
                        Next: 5,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3 leading to 6",
                        Next: 6,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
};
export { ch1Test };
