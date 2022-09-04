import { AlgoQaData, CodeLink } from "./../../common/algo-qa-data";

export class LargestElementInAnArray {

    static algoQadat: AlgoQaData; 

    private static _initialize = (() => {
        // "this" cannot be used here
        let question:string = "Largest Element in an Array";
        let description: string = `This video talks about two 
        solutions to find the largest element in an array, 
        a O(n^2) solution 
        and a O(n) solution.`;

        let codeLink: CodeLink = new CodeLink();

        codeLink.link = `https://www.geeksforgeeks.org/c-program-find-largest-element-array/`;
        codeLink.displayName = 'GFG'
        
        LargestElementInAnArray.algoQadat = new AlgoQaData();

        LargestElementInAnArray.algoQadat.question = question;
        LargestElementInAnArray.algoQadat.description = description;
        LargestElementInAnArray.algoQadat.links = [codeLink];


    })();

}


