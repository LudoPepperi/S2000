var Transaction = 'B2B';
var Catalog = 'Default Catalog';
var blocks_config = {}
var Brands = [
    
      {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Nylon",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop9%5C%22,%5C%22Value%5C%22:%5C%22Touw%20-%20Nylon%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    },
    {
        title: "padding:5px 5px 5px 5px;text-align:center",
        text:"Cordes - Polyethylène",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo'
    }
    ]

//Promotions block
var Promotions = [
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/S2000/Offre1_1.jpg'
    }
    ]
var Promotions2 = [
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%221fed1213-9371-4267-8e07-c83c56b057e1%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/S2000/Offre1_2.jpg'
    }
    ]
var CaruselData = [
    {

        title: 'Bienvenue chez Saveur 2000',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel1_1.jpg',
        description: 'une large categorie de produits soigneusement sélectionnés',
        buttonText: 'Découvrez notre gamme',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: 'Boissons non alcoolisées',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel1_2.jpg',
        description: '',
        buttonText: 'Boissons',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: 'Boissons Alcoolisées',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel1_3.jpg',
        description: '',
        buttonText: 'Vins et Spiritueux',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: 'Produits Frais',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel1_4.jpg',
        description: '',
        buttonText: 'Accédez à la gamme',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: 'Animaux',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel1_5.jpg',
        description: '',
        buttonText: 'Chiens et Chats',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: 'non Alimentaire',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel1_6.jpg',
        description: '',
        buttonText: 'Totue la gamme',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
];

var CaruselDataSecond = [
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel2_1.jpg',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/S2000/Carousel2_2.jpg',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    }
];
customHomepage.test = "test"
