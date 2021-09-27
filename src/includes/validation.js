import {
    Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
  } from 'vee-validate';
  import {
    required, min, max, alpha_spaces as alpaSpaces, alpha_spaces, email,
    min_value as minVal, max_value as maxVal, confirmed, not_one_of as excluded,
  } from '@vee-validate/rules';

export default{
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);


        defineRule('required', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alpha_spaces);
        defineRule('email', email);

        // The way i define minimium & maximium value is different from the video
        defineRule('minVal', minVal);
        defineRule('maxVal', maxVal);
        defineRule('confirmed', confirmed);
        defineRule('excluded', excluded);
    },
};