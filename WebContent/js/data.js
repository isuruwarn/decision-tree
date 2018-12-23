var tree = { 
		name: "apple-bottom jeans", 
		children: [ 
			{ 
				name: "not a shorty", 
				children: null 
				}, 
			{ 
				name: "boots with fur",
				children: [ 
					{ 
						name: "not a shorty",
						children: null
						}, 
					{
						name: "whole club looking",
						children: [
							{
								name: "not a shorty",
								children: null
								},
							{
								name: "hit the floor",
								children: [
									{
										name: "not a shorty",
										children: null
										},
									{
										name: "got low",
										children: [
											{
												name: "not a shorty",
												children: null
												},
											{
												name: "is a shorty!",
												children: null
												}
											]
										}
									]
								}
							]
						} 
					] 
				} 
			]  
		};

var tree1 = { 
			id: 1, 
			children: [ 
				{ id: 2, children: [ 
					{ id: 4, children: null }, 
					{ id: 5, children: [] } ] }, 
				{ id: 3, children: null } ] 
			};

// more than 2 children
var tree2 = { id: 1, 
		children: [ 
			{ id: 2, children: [ 
				{ id: 4, children: [ 
					{ id: 6, children: null } ] }, 
				{ id: 5, children: [
					{ id: 7, children: [
					    { id: 19, children: null },
					    { id: 20, children: null }
					    ] }, 
					{ id: 8, children: [
						{ id: 12, children: null },
						{ id: 13, children: null },
						{ id: 14, children: null },
						{ id: 15, children: null },
						{ id: 16, children: null },
						{ id: 17, children: null },
						{ id: 18, children: null }
						] },
					{ id: 9, children: null } ] 
				} ] 
			}, 
			//{ id: 3, children: null } ] }
			{ id: 3, children: [
					{ id: 10, children: null },
					{ id: 11, children: null }] 
				} ] 
			};
		

var tree4 = {
    name: "/",
    contents: [
        {
            name: "Applications",
            contents: [
                { name: "Mail.app" },
                { name: "iPhoto.app" },
                { name: "Keynote.app" },
                { name: "iTunes.app" },
                { name: "XCode.app" },
                { name: "Numbers.app" },
                { name: "Pages.app" }
            ]
        },
        {
            name: "System",
            contents: []
        },
        {
            name: "Library",
            contents: [
                {
                    name: "Application Support",
                    contents: [
                        { name: "Adobe" },
                        { name: "Apple" },
                        { name: "Google" },
                        { name: "Microsoft" }
                    ]
                },
                {
                    name: "Languages",
                    contents: [
                        { name: "Ruby" },
                        { name: "Python" },
                        { name: "Javascript" },
                        { name: "C#" }
                    ]
                },
                {
                    name: "Developer",
                    contents: [
                        { name: "4.2" },
                        { name: "4.3" },
                        { name: "5.0" },
                        { name: "Documentation" }
                    ]
                }
            ]
        },
        {
            name: "opt",
            contents: []
        },
        {
            name: "Users",
            contents: [
                { name: "pavanpodila" },
                { name: "admin" },
                { name: "test-user" }
            ]
        }
    ]
};






var tree5 = {  
        id: "node02",  
        name: "0.2",  
        data: {},  
        children: [{  
            id: "node13",  
            name: "1.3",  
            data: {},  
            children: [{  
                id: "node24",  
                name: "2.4",  
                data: {},  
                children: [{  
                    id: "node35",  
                    name: "3.5",  
                    data: {},  
                    children: [{  
                        id: "node46",  
                        name: "4.6",  
                        data: {},  
                        children: []  
                    }]  
                }, {  
                    id: "node37",  
                    name: "3.7",  
                    data: {},  
                    children: [{  
                        id: "node48",  
                        name: "4.8",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node49",  
                        name: "4.9",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node410",  
                        name: "4.10",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node411",  
                        name: "4.11",  
                        data: {},  
                        children: []  
                    }]  
                }, {  
                    id: "node312",  
                    name: "3.12",  
                    data: {},  
                    children: [{  
                        id: "node413",  
                        name: "4.13",  
                        data: {},  
                        children: []  
                    }]  
                }, {  
                    id: "node314",  
                    name: "3.14",  
                    data: {},  
                    children: [{  
                        id: "node415",  
                        name: "4.15",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node416",  
                        name: "4.16",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node417",  
                        name: "4.17",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node418",  
                        name: "4.18",  
                        data: {},  
                        children: []  
                    }]  
                }, {  
                    id: "node319",  
                    name: "3.19",  
                    data: {},  
                    children: [{  
                        id: "node420",  
                        name: "4.20",  
                        data: {},  
                        children: []  
                    }, {  
                        id: "node421",  
                        name: "4.21",  
                        data: {},  
                        children: []  
                    }]  
                }]  
            }, {  
                id: "node222",  
                name: "2.22",  
                data: {},  
                children: [{  
                    id: "node323",  
                    name: "3.23",  
                    data: {},  
                    children: [{  
                        id: "node424",  
                        name: "4.24",  
                        data: {},  
                        children: []  
                    }]  
                }]  
            }]  
        }]
    };  