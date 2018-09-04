import { Component, Controller, OnInit, OnViewInit } from 'capivarajs';
import template from './counter.template.html';
import style from './counter.style.scss';

@Component({
  tag: 'cp-counter',
  template,
  style,
  bindings: ['cpModel'],
  functions: [],
  constants: ['maxLength', 'placeholder'],
})
export class CapivaraCounter extends Controller implements OnInit, OnViewInit {


  constructor(public $scope, public $element) {
    super($scope, $element);
  }

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
