import { writable } from 'svelte/store';

export type Toast = {
    id: string;
    title?: string;
    description?: string;
    duration?: number;
};

function createToasterStore() {
    const { subscribe, update } = writable<Toast[]>([]);

    return {
        subscribe,
        add: (toast: Omit<Toast, 'id'>) => {
            const id = Math.random().toString(36).substring(2, 9);
            const newToast = { ...toast, id };
            update((toasts) => [...toasts, newToast]);

            if (toast.duration !== Infinity) {
                setTimeout(() => {
                    update((toasts) => toasts.filter((t) => t.id !== id));
                }, toast.duration || 3000);
            }
        },
        remove: (id: string) => {
            update((toasts) => toasts.filter((t) => t.id !== id));
        }
    };
}

export const toaster = createToasterStore();

export function toast(props: Omit<Toast, 'id'>) {
    toaster.add(props);
}
