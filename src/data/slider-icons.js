const icons = [
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/40/icon/big-ce7ba2e73b4fa75bd2be853e81eb52fc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=e331e3dec564345781800337d84821c4a88f5b21ad304011dad2eb0d454ce1b5",

        title: "Bridal Boutique",
        id: 1
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/7/icon/big-f862a43e87bd44e1b3010f777fa7896e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=f783f8d44d910fd126d2eb58358e178c0e77f03ed3a44b3418cceea903b622d9",

        title: "Photographers",
        id: 2
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/6/icon/big-46211732c81c289c0197a414e7a85e92.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7308819a946084176001c32452d792b7a8f6f1857ada8b1242495e481fa02ce4",

        title: "Videographers",
        id: 3
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/3/icon/big-6c48cf9e3c363ce3cc315b6a1114eb7f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=301c4f4725e020b0c395da9bc500260edb295d024e476073b602c7d08fe948cc",

        title: "Rings",
        id: 4
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/37/icon/big-272f36854f3b44dd4f6bc5559507c453.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=326bc1364632ad9147bec6158e855fecf5cec5e2ed47312d24a0ae717799a77e",

        title: "Outdoor Wedding Venues",
        id: 5
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/17/icon/big-3936bdb01e3af71e49446f42fdc295ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=f290f6496819f647150dfde89448292359a18715c2f699ba543d60ccae41ce18",

        title: "Designers",
        id: 6
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/2/icon/big-fe0ddae57072146294f233a81106c799.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=8710f6582adc5cdefb8d5506f3bf0e82c0cb7cc44c7325583ccac9c6ea12216e",

        title: "Venues",
        id: 7
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/13/icon/big-34ce707846116401bfd30401781b4b7b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=cca4e49229664e581e683cb083cd6fac8d0447885863f2799a9f5573670e6e11",

        title: "Lighting",
        id: 8
    },
    {
        url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/42/icon/big-05336d746529a7b2585adbf945dea5e2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=74c875e676f379990fc8f43d20cce13b785713c529f8c430a23f4720d5b3acc0",

        title: "Health",
        id: 9
    }

]

export default icons;