import { Injectable } from "@angular/core";
import { AlgoQaData } from "src/app/common/algo-qa-data";
import { LargestElementInAnArray } from "../largest-element-in-an-array";
import { IAlgoService } from "./ialgo-service";

@Injectable({ providedIn: 'root' })
export class ArrayAlgosService implements IAlgoService {

    public algosName: string = "Array Questions";

    public algoQandAnsdataArray: AlgoQaData[] = [

        LargestElementInAnArray.algoQadat
    ];

}
