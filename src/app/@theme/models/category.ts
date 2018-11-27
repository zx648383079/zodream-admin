export interface ICategory {
    id:          number;
    name:        string;
    keywords?:    string;
    description?: string;
    icon:        string;
    parent_id:   number;
    position?:    number;
    banner?:      string;
    app_banner?:  string;
}

