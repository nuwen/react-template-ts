export function fetchExpenseData() {
    const usernameSecret = import.meta.env.VITE_USERNAME;

    return fetch("https://expenses-backend-mu.vercel.app/expenses", {
        headers: {
            "Content-Type": "application/json",
            Username: usernameSecret,
        },
    });
}
