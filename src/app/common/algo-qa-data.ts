export class AlgoQaData {

    constructor(
        public question: string = '',
        public description: string = '',
        public links: CodeLink [] = [],
        public code: string = '',
        public data: string = '',
        public tag: any = 1
    ) {

    }
}

export class CodeLink 
{
    public link: string = '';
    public displayNam : string = '';
}
