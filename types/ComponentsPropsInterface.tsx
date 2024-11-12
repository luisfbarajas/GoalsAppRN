export interface IGoalItemProps{
    text: string;
    id:string;
    onDeleteItem: (id: string) => void;
}

export interface IGoalInput{
    onAddGoalHandler: (text: string) => void;
    visible: boolean;
    endAddGoalHandler:() => void;
}



