export interface MenuItem {
    name: string;
    url?: string;
    icon?: string;
    active?: boolean;
    expand?: boolean;
    chidren?: Array<MenuItem>;
}
