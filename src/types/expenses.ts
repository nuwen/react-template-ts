export type ExpenseCategoryType = 'training' | 'travel' | 'meal';

export type ExpenseItemType = {
    id: number;
    merchant: string;
    amount: number;
    description: string;
    date: string;
    category: ExpenseCategoryType;
    status: string;
}

export type ExpenseRowItemType = {
    category: string;
    status: string;
    amount: string;
    id: number;
    merchant: string;
    description: string;
    date: string;
}