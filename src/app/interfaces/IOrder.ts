import { ICartItem, IOrderRow } from './ICartItem';

export interface IOrder {
    id: number;
    companyId: string;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: boolean;
    orderRows: IOrderRow[];
}
