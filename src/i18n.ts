import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../i18n/messages';

Vue.use(VueI18n);

const locale = 'zh_CN';

const i18n = new VueI18n({
  locale: locale,
  messages,
  fallbackLocale: 'en',
  silentTranslationWarn: false,
});

export default i18n;
