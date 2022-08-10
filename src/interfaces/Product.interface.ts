interface INutrients {
    protein?: string;
    fat?: string;
    carbohydrates?: string;
    fibre?: string;
    moisture?: string;
    calcium?: string;
    phosphorous?: string;
}

interface IProduct {
    id: string;
    name: string;
    price: string;
    image: string;
    manufacturer: string;
    category: string;
    description: string;
    ingredients: string;
    nutrients: INutrients;
    energy: string;
}

export type { IProduct, INutrients };
