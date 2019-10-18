export interface ITreeSelectData {
    header: string;
    childrens: ITreeSelectChild[]
}

export interface ITreeSelectChild {
    label: string;
    id: number;
}