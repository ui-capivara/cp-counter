export class CapivaraCounter {
    public $constants;
    public $functions;
    public $bindings;

    private capivaraMaxLength: number
    private remainingDigits: number
    private textRemainigDigits: string
    private noRemainingDigits: string
    private placeholder: string
    private element: HTMLElement

    constructor(private $scope, private $element) {
        this.element = $element
    }

    $onInit() {
        this.capivaraMaxLength = this.$bindings.capivaraMaxLengthText ? this.$bindings.capivaraMaxLengthText : 10
        this.placeholder = this.$bindings.placeholderText        
        this.remainingDigits = 0
        this.textRemainigDigits = this.capivaraMaxLength + ' caracteres restantes'
        this.noRemainingDigits = 'Você atingiu o limite de ' + this.capivaraMaxLength + ' caracteres'
    }

    checkStringSize() {
        this.remainingDigits = this.element.getElementsByTagName('input')[0].value.length

        if (this.remainingDigits < this.capivaraMaxLength) {
            this.textRemainigDigits = this.capivaraMaxLength - this.remainingDigits + ' caracteres restantes'
        } else {
            this.textRemainigDigits = this.noRemainingDigits
        }
    }
}
