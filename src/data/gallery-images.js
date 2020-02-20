const images = [
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/medium-e4d00679c0915dc1d3ddd56f818c7492.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=6dc37d80bc49aa36897b467e8f1a5c99e28750e54fd18e2600fa0e9fb8dacd64" /*"../images/products/wedding-details.png"*/,
        title: "Wedding details",
        desc: "Bits and pieces of the wedding's bigger picture.",
        shop: "Al Khardawaty",
        icons: "facebook, twitter",
        id: 1
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/396/src/medium-47ac96ff399e5f3dd6c317e9e2a323e1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=82361a97b481b512cc61b333903841375a6a0dd351a59e03aae8b2ae29d71f6b",
        title: "Gold/marble wedding cake",
        desc: "Two tire gold/marble wedding cake with peach sugar flowers decoration and topper.",
        shop: "Salsabella cake studio",
        icons: "facebook, twitter",
        id: 2
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/395/src/medium-24871eacb03d4d88afb0bf41ccb975dc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=f3cb5156ec01be8404940b992e9da5cd9d196ea3524b6f3492693f81f6ed74ac",
        title: "Gold frame Invitation set",
        desc: "Delicate gold frame, wax stamped floral wedding invitation set.",
        shop: "White Yard",
        icons: "facebook, twitter",
        id: 3
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/394/src/medium-1c3dc8750a7b6b9f9933f3cae8d55fc8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=8f7c7d9419a4994148f19d92a696cb05a991242015542a1c3d46e82317269db9",
        title: "Beating hearts",
        desc: "Scattered tiny hearts mean much love for the bride and groom.",
        shop: "Al Khardawaty",
        icons: "facebook, twitter",
        id: 4
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/393/src/medium-daa766c78660e5277f1e3a428ca604f5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=0c75fab1b7927c58854cc4ced07bd7eea7022f7165989cf7fb06c3207eff6577",
        title: "Peach wonderland",
        desc: "Majestic ambiance created with faint orange lighting, thousands of tiny white blossoms, and a piano.",
        shop: "The Lounge",
        icons: "facebook, twitter",
        id: 5
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/392/src/medium-595aac7c0068654b6d19e3f6f72c46b7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=13d84f8fe9abf8ef460dcdea1c32f259d19ca00797275cacac097be9b1065351",
        title: "White and silver Cake",
        desc: "Two-leveled wedding cake decorated with colorful roses.",
        shop: "Whipped Gourmet Cakery",
        icons: "facebook, twitter",
        id: 6
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/391/src/medium-6a2a4175c69748f842d7d1bc5cf90b1f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=d838c36d8a219a515009a19b2a174409e2d2707b6a6554f32a953acd9148a81e",
        title: "Wooden guestbook",
        desc: "Wood tree slice for a novel wedding guestbook idea.",
        shop: "Al Khardawaty",
        icons: "facebook, twitter",
        id: 7
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/390/src/medium-825a34f7419c82a4e2b5515cb118c2db.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=6726ac74d18a02eb96936716a95ac3825cb077cb4db7d9e89bd61649e3ecd770",
        title: "Love is in the air",
        desc: "Bring an outdoor feel to your indoor wedding by adding that floral touch.",
        shop: "The Lounge",
        icons: "facebook, twitter",
        id: 8
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/389/src/medium-f054a8cdf8833a6113b5a5ac8c0d0b75.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T142543Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=54ffaad57093ef639a4d6d3cb53a46749dc2501f8acc4e31b6cd69f64f50fabc",
        title: "The flower tower",
        desc: "A flower tower made out of white roses for a wedding centerpiece.",
        shop: "Daisy Flower",
        icons: "facebook, twitter",
        id: 9
    }
]

export default images;