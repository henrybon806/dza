export default function bubbleSort(arr: number[]): void {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let placeholder = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = placeholder;
            }
        }
    }
}
