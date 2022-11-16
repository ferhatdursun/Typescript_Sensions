// TODO define name with IXXXX
export interface ITodoItem {

    text: string,

    id: string;

    isDone: boolean;

}


export interface ITodoRequestBody extends Pick<ITodoItem, "text"> {}


export interface ISuccessResponse {
    msg: string;
    payload: ITodoItem;
}