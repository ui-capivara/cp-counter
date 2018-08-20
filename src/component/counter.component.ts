export class CapivaraCounter {
  public $constants;
  public $functions;
  public $bindings;

  constructor(public $scope, public $element) { }

  $onInit() {
    if (!this.$constants.maxLength) {
      throw new Error('max-length é um parâmetro obrigatório.')
    }
  }

  $onViewInit() {
    setTimeout(() => {
      this.$bindings.cpModel = (this.$bindings.cpModel || '').substring(0, this.$constants.maxLength);
    });
  }

  getRemainingCaracteres() {
    return this.$constants.maxLength - (this.$bindings.cpModel || '').length;
  }

}
