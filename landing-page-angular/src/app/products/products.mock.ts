export const productsList: Product[] = [
    {id:1, name: 'Lavandina1', price: 10, description: 'botella'},
    {id:2, name: 'Lavandina2', price: 5, description: 'botella'},
    {id:3, name: 'Lavandina3', price: 7, description: 'botella'},
    {id:4, name: 'Lavandina4', price: 8 },
    {id:5, name: 'Lavandina5', price: 2, description: 'asfsgesdgsc asfsgesdgsc asfsgesdgsc asfsgesdgsc '},
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
    // description: string;, ? para que un campo no sea obligatorio
}