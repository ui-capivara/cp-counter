export class CapivaraCounter {
    public $constants;
    public $functions;
    public $bindings;


    private capivaraMaxLength: number
    private remainingDigits: string

    constructor(private $scope, private $element) { }

    $onInit() {
        this.capivaraMaxLength = this.$bindings.capivaraMaxLengthText ? this.$bindings.capivaraMaxLengthText : 10
        this.remainingDigits = this.capivaraMaxLength + ' caracteres restantes'
    }

    checkStringSize(){
        console.log('oi');
        
    }
}
